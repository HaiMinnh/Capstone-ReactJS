import React from 'react'
import { NavLink } from 'react-router-dom'

const Carts = () => {
    return (
        <div className='cart container pb-5 py-5 pb-3' style={{ background: '#fffcfc' }}>
            <div className="form-group ps-5 ms-5">
                <h1 className=''>Carts</h1>
                <hr />
            </div>
            <table className='text-center'>
                <thead className="table-header mt-2" style={{ background: '#d9d9d9' }}>
                    <tr className='ms-2'>
                        <th><input type="checkbox" /></th>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" defaultChecked /></td>
                        <td>1</td>
                        <td><img src="../../public/img/Shoes.png" alt="Product 1"/></td>
                        <td>Product 1</td>
                        <td>1000</td>
                        <td>
                            <button className="btn text-white" style={{ background: '#6200ee' }}>-</button>
                            <span className='d-inline-block' style={{ background: '#d9d9d9' }}>1</span>
                            <button className="btn text-white" style={{ background: '#6200ee' }}>+</button>
                        </td>
                        <td>1000</td>
                        <td>
                            <button className="btn me-2 text-white" style={{ background: '#6200ee' }}>EDIT</button>
                            <button className="btn text-white" style={{ background: '#eb5757' }}>DELETE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="text-end mt-4">
                <button className="btn text-white px-4" style={{ background: '#f2994a'}}>SUBMIT ORDER</button>
            </div>
        </div>
    )
}

export default Carts