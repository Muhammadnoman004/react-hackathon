import React, { useEffect, useState } from 'react'
import ProductTable from '../Product/ProductTable'
import { getAllProducts } from '../../../Services/Product.service'
import ProductModal from '../../Modal/ProductModal'

export default function AddProduct() {

    const [Allproducts, setAllProducts] = useState(null)
    const [ShowModal, setShowModal] = useState(true)
    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            console.log("productsList ==>", productsList);
            setAllProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {ShowModal && <ProductModal />}
            <div id='AdminDahboardHead'>
                <h1>Admin Dashboard</h1>
                <div>
                    <button className='btn btn-warning' style={{ marginRight: '20px' }} data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Product</button>
                    <button className='btn btn-danger' style={{ marginRight: '20px', cursor: "not-allowed" }}>Logout</button>
                </div>
            </div><br />
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope='col'>id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Qty</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
            </table>

            {
                Allproducts ?
                    (

                        Allproducts.map((product, index) => {
                            return (
                                <ProductTable key={index} {...product} index={index} />
                            )
                        })
                    ) : (
                        <h1>Loading...</h1>
                    )
            }

            <br />

        </div>
    )
}
