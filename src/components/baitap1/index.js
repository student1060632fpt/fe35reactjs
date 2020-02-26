import React, { Component } from "react";
import Header from './header';
import Content from './content';
import Sidebar from './sidebar';
import Footer from './footer';
import './baitap1.css';

export default class Baitap1 extends Component {
    render() {
        //đánh dấu đây là nội dung của bài tập 1s
        return (
            <div>
                <Header/>
                <div className="main">
                    <Content/>
                    <Sidebar/>
                </div>
                <Footer/>
            </div>
        )
    }
}