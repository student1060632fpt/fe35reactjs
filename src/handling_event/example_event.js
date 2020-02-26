import React, { Component } from 'react'

export default class Example_event extends Component {
    isLogin = true;
    userName = 'Cybersoft';

    // Cách 1 dễ xài
    login = () => {
        /*
        if (this.isLogin){
            return <p>Hello {this.userName}</p>;
        } else {
            return <button className="btn btn-success">Đăng nhập</button>;
        }
           */
        return this.isLogin ? <button className="btn btn-success" onClick={this.log}>Đăng nhập</button> : <p>Hello {this.userName}</p> ;
    }

    log = () => {
        this.isLogin = false;
        console.log(this.isLogin);
        return this.login();
    }

    render() {
        return (
            <div>
                <h1 className="title">Example event</h1>
                {this.login()}
            </div>
        )
    }
}
