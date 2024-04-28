import { db } from "../Configuration/Firbase.config";
import { collection, onSnapshot, doc, getDoc, deleteDoc, } from "firebase/firestore";
import { storage } from "../Configuration/Firbase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ProductEntity } from "../lib/Firebase.entities";

export const getAllProducts = (callback) => {
    try {
        const q = collection(db, ProductEntity);

        return onSnapshot(q, (snapshot) => {
            const productsList = snapshot.docs.map((doc) => {
                return {
                    ...doc.data(), id: doc.id
                }
            });
            callback(productsList);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

export const getProductbyid = async (pid) => {
    return new Promise(async (res, rej) => {

        const docRef = doc(db, `${ProductEntity}/${pid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            res(docSnap.data());
        } else {
            rej("not found");
        }
    })


}

export const DeleteProduct = async (pid) => {
    await deleteDoc(doc(db, ProductEntity, pid));

}


export const ImageURL = (file) => {
    console.log(file);
    return new Promise((resolve, reject) => {
        const restaurantImageRef = ref(storage, `images/${file.name}`
        );
        const uploadTask = uploadBytesResumable(restaurantImageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');

                switch (snapshot.state) {
                    case "paused":
                        console.log('Upload is paused');
                        break;
                    case "running":
                        console.log("running");
                        break;
                }
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        console.log(downloadURL);
                        resolve(downloadURL);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
        );
    });
}