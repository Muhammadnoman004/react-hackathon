import React, { useState } from 'react'
import { ProductEntity } from '../../lib/Firebase.entities'
import { ImageURL } from '../../Services/Product.service'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../Configuration/Firbase.config'

export default function ProductModal() {

  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [Quntity, setQuantity] = useState("")
  const [description, setdescription] = useState("")
  const [ProductImages, setProductImages] = useState("")

  const ProductImg = (e) => {
    const URl = ImageURL(e)
    setProductImages(URL.createObjectURL(e))
    console.log(URl);
  }

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

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">ADD PRODUCT</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div >
                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder='Name' /><br />
                <input type="number" className='form-control' onChange={(e) => setprice(e.target.value)} placeholder='Price' /><br />
                <input type="number" className='form-control' onChange={(e) => setQuantity(e.target.value)} placeholder='Quantity' /><br />
                <textarea id="" cols="30" rows="5" type="text" className='form-control' onChange={(e) => setdescription(e.target.value)} placeholder='Description' ></textarea>
                <label htmlFor="selectImg" style={{ display: 'flex' }}>
                  <abbr title="Upload Product Picture">
                    <input type="file" name="" id="selectImg" onChange={(e) => ProductImg(e.target.files[0])} />
                    <img src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Silhouette-PNG-HD-Image.png" typeof='selectImg' id='selectImgIcon' alt="#" />
                  </abbr>
                  <div className='ProductImgDiv'>
                    {
                      !ProductImages ? (
                        <span id='noImage'>Not image yet</span>
                      ) : (

                        <img src={ProductImages} id='Productimages' alt="#" />
                      )
                    }
                  </div>
                </label>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={AddBtn} data-bs-dismiss="modal">Add product</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}