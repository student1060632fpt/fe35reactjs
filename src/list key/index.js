import React, { Component } from 'react'

export default class ListKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [
                { id: 1, name: 'Realme', price: 20 },
                { id: 2, name: 'Iphone', price: 30 },
                { id: 3, name: 'Vertu', price: 20 }

            ]
        }

    }

    renderTable = () => {
        return this.state.listProduct.map(product => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Table</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
