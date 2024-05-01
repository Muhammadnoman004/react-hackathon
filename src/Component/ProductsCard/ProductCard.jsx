import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const { name, price, des, ImageURl, id } = props
    return (
        <div className='CardBody'>
            <div className="card">
                <img id='images' src={!ImageURl ? 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' : ImageURl} className='card-img-top' alt="" />
                <div className="card-body">
                    <h4 className="card-title" style={{ fontWeight: 'bold' }}>{name}</h4>
                    <h5>${price}</h5>
                    <Link to={`/product-detail/${id}`} style={{ display: "flex", justifyContent: "end", textDecoration: "none" }}><p>View Details..</p></Link>
                </div>
            </div>
        </div>
    )
}
