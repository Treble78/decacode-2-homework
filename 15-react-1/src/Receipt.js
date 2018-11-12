import React, {Component} from 'react';

class Receipt extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFavourite: this.props.isFavourite
        }
    }

    render() {

        return( 

            <li key = {this.props.id}>
                <span>{this.props.name}</span>
                {(!this.state.isFavourite) ? false : <span>---->{this.props.ingredients}</span>}
                {(!this.state.isFavourite) ? false : <img src={this.props.thumbnail}/>}
                {(!this.state.isFavourite) ? <button onClick={this.props.addToFavourites}>ATF</button> : <button onClick={this.props.deleteFromFavourites}>DEL</button>}
            </li>
        )
    } 
}

export default Receipt;