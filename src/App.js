import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';
class App extends Component {
  componentDidMount(){
    // fetch()
  }
  render() {
    return (
      <div className="App">
       <SearchForm />
       <MainNav />
       <PhotoContainer />
      </div>
    );
  }
}

export default App;
