import React, { Component } from 'react';
import Receipt from './Receipt';

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            searchInputVal:'',
            receipts:[],
            loader:false
        }
    }

    fetchReceipts = () => {
        this.setState({loader:true});
        fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api?q=${this.state.searchInputVal}`)
            .then((response) => response.json())
                .then((data) => {console.log(data);
                    this.setState({receipts: data.results,loader:false});
        })
    }

    updateSearchValue = (e) =>{
        this.setState({searchInputVal:e.target.value})

    }
    
    render() {
        console.log(this.state.searchInputVal);
        console.log(this.state.receipts);
        const elements = this.state.receipts;
        
        return (this.props.IsVisible) 
        ? (
            <div>
                <div style={{display:'flex'}}>
                    <input type="text" onChange={this.updateSearchValue} value={this.state.searchInputVal}></input>
                    <button onClick={this.fetchReceipts} style={{padding:"10px"}} className="btn btn-sm btn-success">Search Receipts</button>
                </div>
                {this.state.loader === false 
                ?
                    <ul>
                        {elements.length ? elements.map(el =>
                            <Receipt addToFavourites={this.addToFavourites.bind(this,el)} 
                                    key={el.title} id={el.title} name={el.title} isFavourite={false}/>):false}
                    </ul> 
                : <h5>Receipts Are Loading...</h5>
                }
            </div> 
        )   
        : null;
    }

    addToFavourites = (el) =>{

        let likedReceipt = {id:el.title,name:el.title,ingredients:el.ingredients,thumbnail:el.thumbnail};
        let currentFavourites = JSON.parse(localStorage.getItem('Receipts') || "[]");

        currentFavourites.findIndex(el => el.id === likedReceipt.id) === -1 
        ? currentFavourites.push(likedReceipt) : alert(`This Receipt Is Already In Your Fav's!`);

        localStorage.setItem('Receipts',JSON.stringify(currentFavourites));
        console.log(localStorage);

    }
}

export default Search;