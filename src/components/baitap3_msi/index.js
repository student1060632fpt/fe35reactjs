import React from 'react';
import "./baitap3.css";
import Navbar from './navbar';
import Carousel from './carousel';
import Smartphone from './smartphone';
import Laptop from './laptop';
import Promo from './promotopn';

export default function Baitap3() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <section id="smartphone" class="container-fluid pt-5 pb-5">
                <h1 class="text-white text-center">BEST SMARTPHONE</h1>
                <div class="row">
                    <Smartphone />
                    <Smartphone />
                    <Smartphone />
                    <Smartphone />
                </div>
            </section>
            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <Laptop />
                    <Laptop />
                    <Laptop />
                    <Laptop />
                </div>
            </section>
            <section id="promotion" className="container-fluid pt-5 pb-5">
                <h1 className="text-center text-white">PROMOTION</h1>
                <div className="container bg-light pt-5 pb-5">
                    <div className="row">
                        <Promo />
                        <Promo />
                        <Promo />
                    </div>
                </div>
            </section>
        </div>
    )
}
