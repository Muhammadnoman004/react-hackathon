import React from 'react'
import { DeleteProduct } from '../../../Services/Product.service'

export default function ProductTable(props) {

    const { name, price, qty , id } = props

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td scope="col">1</td>
                        <td scope="col">{name}</td>
                        <td scope="col">{price}</td>
                        <td scope="col">{qty}</td>
                        <td scope="col"><button className='btn btn-danger' onClick={() => DeleteProduct(id)}>delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
