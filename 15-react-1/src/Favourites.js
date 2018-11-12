import React, { Component } from 'react';
import Receipt from './Receipt';

class Favourites extends Component{
    constructor(props){
        super(props)
        this.state = {
            favouriteReceiptIDs: this.getAllFavIDs()
        }
    }

    render() {

        const elements = JSON.parse(localStorage.getItem('Receipts') || "[]");
        console.log(elements);

        return (this.props.IsVisible) 
        ? (
            <ul>
                {elements.map(el => 
                    <Receipt deleteFromFavourites={this.deleteFromFavourites.bind(this,el)} 
                            key={el.id} id={el.id} name={el.name} 
                            ingredients={el.ingredients} thumbnail={el.thumbnail} isFavourite={true}/>)}
            </ul>
        )
        : null;
    }

    deleteFromFavourites = (el) => {

        let dislikedReceipt = {id:el.id,name:el.name};
        let currentFavourites = JSON.parse(localStorage.getItem('Receipts') || "[]");
        currentFavourites = currentFavourites.filter(el => el.id !== dislikedReceipt.id);
        localStorage.setItem('Receipts',JSON.stringify(currentFavourites));
        this.setState({favouriteReceiptIDs:this.getAllFavIDs()});
    }

    getAllFavIDs = () => {

        let currentFavourites = JSON.parse(localStorage.getItem('Receipts') || "[]");
        return currentFavourites.map(el=>parseInt(el.id));
    }
}

export default Favourites;