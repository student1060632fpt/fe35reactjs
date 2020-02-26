import React, { Component } from 'react';

export default class RenderingElements extends Component {
    username = 'Nguyen';
    lop = 'fe35';

    renderInfo = () => {
    return <p>{this.username} {this.lop}</p>;
    }

    render() {
        return (
            <div>
                <h1 className="title">RenderingElements</h1>
                <p>Username: {this.username}</p>
                <p>lop: {this.lop}</p>
                {this.renderInfo()}
            </div>
        )
    }
}
