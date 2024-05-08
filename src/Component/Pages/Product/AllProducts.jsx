import React, { useEffect, useState } from 'react'
import ProductCard from '../../ProductsCard/ProductCard';
import { getAllProducts } from '../../../Services/Product.service'
import Loader from '../../Loader/Loader';
import { Link } from 'react-router-dom';

function AllProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            setProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div id='AllProducts'>
                <h1 style={{ fontWeight: "bold" }}>All Products</h1>
                <Link to={'/dashboard'} className='text-light' style={{ textDecoration: "none", fontFamily: "monospace" }}>Go to Dashboard</Link>
            </div>
            <div className='CardBody'>
                {
                    products ? (
                        products.map((data, index) => {
                            return <ProductCard  {...data} key={index} />
                        })
                    ) : (
                        <Loader show={true} />
                    )
                }
            </div>

        </div>
    )
}

export default AllProducts