import React from 'react'
import { DeleteProduct } from '../../../Services/Product.service'

export default function ProductTable(props) {

    const { name, price, qty, id, index } = props

    return (
        <div>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{qty}</td>
                        <td><button className='btn btn-danger' onClick={() => DeleteProduct(id)}>delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
