import React, { Component } from 'react'

export default class Car extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            img: "./img/imgRedCar.jpg",
        }
    }
    
    chooseCar = color => {
        let img = "";
        switch (color){
            case 'red':
                img = "./img/imgRedCar.jpg";
                break;
            case 'silver':
                img = "./img/imgSilverCar.jpg";
                break;
            default:
                img = "./img/imgBlackCar.jpg";
                break;
        }
        this.setState({
            img
        })
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <p className="col-sm-12 text-center">Chọn xe nè</p>
                        <div className="col-sm-4">
                            <img className="img-fluid" src={this.state.img} alt="bo" />
                        </div>
                        <div className="col-sm-8">
                            <button className="btn btn-danger" onClick={() => { this.chooseCar('red') }}>Xe đỏ</button>
                            <button className="btn btn-dark" onClick={() => { this.chooseCar('black') }}>Xe đen</button>
                            <button className="btn btn-grey" onClick={() => { this.chooseCar('silver') }}>Xe bạc</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
