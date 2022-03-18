import React from 'react';
import Produit from "../components/Produit";

class Produits extends React.Component {

    constructor(props) {
        super(props);
        this.state = { produits: [] };
    }

    async componentDidMount() {
        const response = await fetch("datas/datas.json");
        const produits = await response.json();
        this.setState({ produits: produits });
    }

    render() {
        return (
            <>
                <h1>Produits</h1>
                {
                    this.state.produits.map((produit) => {
                        return <Produit prod={produit} key={produit.id} />;
                    })
                }
            </>
        );
    }
}

export default Produits;