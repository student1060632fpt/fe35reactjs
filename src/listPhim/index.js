import React, { Component } from 'react';
import data from './data.json';

export default class ListPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data,
        }
    }
    renderHTMl = () => {
        return this.state.listMovie.map(movie => {
            return (
                <div className="col-sm-4" key={movie.maPhim}>
                    <div className="card">
                        <img className="card-img-top" src={movie.hinhAnh} alt="Card image" />
                        <div className="card-body">
                            <h4 class="card-title">{movie.tenPhim}</h4>
                            <p class="card-text">{movie.moTa}</p>
                            <p class="card-text">{movie.ngayKhoiChieu}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <h3 className="title text-center">ListPhim</h3>
                <div className="container">
                    <div className="row">
                        {this.renderHTMl()}
                    </div>
                </div>
            </div>
        )
    }
}
