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
            <h1>All Products</h1>
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
    )
}

export default AllProducts