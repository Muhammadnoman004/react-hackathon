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

    return (
        <div>
            <h1 id='ProductDetailhead'>Product Details</h1>
            {
                ProductDetail ? (
                    <div className="cardDetail" style={{ width: '500px' }}>
                        <img id='imageDetails' src={!ProductDetail.ImageURl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7IKDWaJ3CtNehfT99UBbWEM5gB353A5DD6s7HIepcbdFu8_9Pc9IIbHTAUJ2mCAHfhk&usqp=CAU" : ProductDetail.ImageURl} className='card-img-top' alt="" />
                        <div className="card-body m-2">
                            <h4 id='nameDetails' className="card-title mx-2">{ProductDetail.name} - <span>${ProductDetail.price}</span></h4>
                            <p className="card-text mx-2 desDetail">{ProductDetail.des}</p>
                            <button className='btn btn-success' id='BuyNowBtn'>Buy Now</button>
                        </div>
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }



        </div>
    )
}
