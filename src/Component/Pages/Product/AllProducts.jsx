import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductsCard/ProductCard';
import { getAllProducts } from '../../../Services/Product.service'

function AllProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            console.log("productsList ==>", productsList);
            setProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h1 id='AllProducts'>All Products</h1>
            <div className='CardBody'>
                {
                    products ? (
                        products.map((data, index) => {
                            return <ProductCard  {...data} key={index} />
                        })
                    ) : (
                        <h1>Loading...</h1>
                    )
                }
            </div>

        </div>
    )
}

export default AllProducts