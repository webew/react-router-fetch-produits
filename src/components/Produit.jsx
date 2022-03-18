import React, { Component } from 'react'

class Produit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <h2>{this.props.prod.nom}</h2>
                <p>{this.props.prod.prix} €</p>
            </>
        );
    }
}

export default Produit;