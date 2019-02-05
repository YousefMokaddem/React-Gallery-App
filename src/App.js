import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config';
class App extends Component {
  state = {
    searchedUrls:[],
    catUrls:[],
    dogUrls:[],
    computerUrls:[]
  }
  componentDidMount(){
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        catUrls:res
      }));
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        dogUrls:res
      }));
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        computerUrls:res
      }));
  }
  render() {
    return (
      <div className="App">
       <SearchForm />
       <MainNav />
       <PhotoContainer urls={this.state}/>
      </div>
    );
  }
}

export default App;
