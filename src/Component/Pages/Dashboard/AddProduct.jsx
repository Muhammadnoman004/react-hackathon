import React, { useEffect, useState } from 'react'
import ProductTable from '../Product/ProductTable'
import { getAllProducts } from '../../../Services/Product.service'
import ProductModal from '../../Modal/ProductModal'

export default function AddProduct() {

    const [Allproducts, setAllProducts] = useState(null)
    const [ShowModal, setShowModal] = useState(false)
    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            console.log("productsList ==>", productsList);
            setAllProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <h1>Admin Dashboard</h1>
                <div>
                    <button className='btn btn-warning' style={{ marginRight: '20px' }} onClick={() => setShowModal(!ShowModal)}>Add Product</button>
                    <button className='btn btn-danger' style={{ marginRight: '20px' }}>Logout</button>
                </div>
            </div><br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        {
                            Allproducts ?
                                (

                                    Allproducts.map((product, index) => {
                                        return (
                                            <ProductTable {...product} key={index} />
                                        )
                                    })
                                ) : (
                                    <h1>Loading...</h1>
                                )
                        }
                    </tr>
                </tbody>
            </table>
            <br /><br />
                {ShowModal && <ProductModal />}

        </div>
    )
}
