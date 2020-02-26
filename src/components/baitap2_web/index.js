import React from 'react'
import Header from './header';
import Carousel from './carousel';
import Wwd from './wwd';
import Contact from './contact';
import Listcard from './listcard';
import Footer from './footer';

export default function Baitap2() {
    return (
        <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <Wwd/>
                    </div>
                    <div className="col-sm-4">
                        <Contact />
                    </div>
                </div>
                <Listcard />
            </div>
            
            <Footer />
        </div>
    )
}
