import React, { Component } from 'react'

export default class State extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin: true,
            userName: 'Cybersoft',
        }
    }

    login = () => {
        return this.state.isLogin ? 
        <button className="btn btn-success" onClick={this.change}>Đăng nhập</button> : 
        <p>Hello {this.state.userName}</p> ;
    }

    change = () => {
        this.setState({
            isLogin : false,
        })
    }

    render() {
        return (
            <div>
                <h3 className="title">State</h3>
                {this.login()}
            </div>
        )
    }
}
