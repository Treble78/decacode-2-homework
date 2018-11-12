import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Tab from './Tab'
import Search from './Search'
import Favourites from './Favourites'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      openedTab: 'Search'
    }
}
  render() {
   
    return (
      <div>

        <nav className="navbar navbar-collapse navbar-dark bg-dark" style={{width:'10%'}}>
          <ul className="navbar-nav mr-auto">
            <Tab onTabClick={this.openOtherTab.bind(this,'Search')} name='Search'/>
            <Tab onTabClick={this.openOtherTab.bind(this,'Favourites')} name='Favourites'/>
          </ul>       
        </nav>

        <div>
          <Search IsVisible={this.state.openedTab === 'Search'}/>
          <Favourites IsVisible={this.state.openedTab === 'Favourites'}/>
        </div>

      </div>
    );
  }

  openOtherTab = (tabName) => {
    this.setState({
      openedTab: tabName
    })
  }
}

export default App;
