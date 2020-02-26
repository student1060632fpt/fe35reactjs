import React, { Component } from 'react'

export default class Handling extends Component {

    handleOnClick = () => {
        console.log(5);
    }

    handleWarning = ten => {
        console.log(ten);
    }

    render() {
        return (
            <div>
                <h3 className="title">Handling event</h3>
                <button className="btn btn-success" onClick={this.handleOnClick}>Handling Event</button>
                <br/>
                <button className="btn btn-warning" onClick={() => {this.handleWarning('Nguyen')}}>Params</button>
            </div>
        )
    }
}
