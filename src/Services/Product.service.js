import { db } from "../Configuration/Firbase.config";
import { collection, onSnapshot, doc, getDoc, deleteDoc, addDoc } from "firebase/firestore";
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

// export const AddProduct = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             first: "Ada",
//             last: "Lovelace",
//             born: 1815
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }

// }