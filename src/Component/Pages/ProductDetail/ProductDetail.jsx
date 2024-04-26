import React, { useEffect, useState } from 'react'
import { getProductbyid } from '../../../Services/Product.service'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
    const { id } = useParams()
    const [ProductDetail, setProductDetail] = useState(null)
    useEffect(() => {
        (async () => {
            const response = await getProductbyid(id)
            if (response) setProductDetail(response)
            return () => response();
        })()
    }, [])

    console.log(ProductDetail);
    return (
        <div>
            <h1>Product Details</h1>
            {
                ProductDetail ? (
                    <div className="card" style={{ width: '500px' }}>
                        <img src={ProductDetail.ImageURl} className='card-img-top' alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{ProductDetail.name}</h5>
                            <h2>{ProductDetail.price}</h2>
                            <p className="card-text">{ProductDetail.des}</p>
                            <button className='btn btn-success'>Buy Now</button>
                        </div>
                    </div>
                ):(
                    <h1>Loading...</h1>
                )
            }



        </div>
    )
}
