import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    const { name, price, des, ImageURl, id } = props
    return (
        <div className='CardBody'>
            <div className="card">
                <img id='images' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&s' className='card-img-top' alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2>{price}</h2>
                    <p className="card-text">{des}</p>
                    <Link to={`/product-detail/${id}`}><p>View Details..</p></Link>
                </div>
            </div>
        </div>
    )
}
