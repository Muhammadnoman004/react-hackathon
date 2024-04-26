import React, { useState } from 'react'
import { ProductEntity } from '../../lib/Firebase.entities'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Configuration/Firbase.config'

export default function ProductModal() {

    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [Quntity, setQuantity] = useState("")
    const [description, setdescription] = useState("")

    const AddBtn = async () => {
        try {
            if (!name || !price || !Quntity || !description) {
                alert("Please fill all field");
            } else {

                const docRef = await addDoc(collection(db, ProductEntity), {
                    name: name,
                    price: price,
                    qty: Quntity,
                    des: description
                });
                console.log("Document written with ID: ", docRef.id);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    }
    return (
        <div>

            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
            <div style={{ width: '40%', margin: 'auto', border: "2px solid black", borderRadius: "10px", padding: '20px 20px' }}>

                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder='name' /><br />
                <input type="number" className='form-control' onChange={(e) => setprice(e.target.value)} placeholder='price' /><br />
                <input type="text" className='form-control' onChange={(e) => setQuantity(e.target.value)} placeholder='description' /><br />
                <input type="number" className='form-control' onChange={(e) => setdescription(e.target.value)} placeholder='Quantity' /><br />
                <button className='btn btn-primary' onClick={AddBtn}>Add product</button>
            </div>

        </div>
    )
}
