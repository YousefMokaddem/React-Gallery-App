import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
class App extends Component {
  state = {
    searched:{
      urls: [],
      loading: true
    },
    cats:{
      urls: [],
      loading: true
    },
    dogs:{
      urls: [],
      loading: true
    },
    computers:{
      urls: [],
      loading: true
    }
  }
  componentDidMount(){
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        cats:{
          urls: res,
          loading: false
        }
      }));
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        dogs:{
          urls: res,
          loading: false
        }
      }));
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        computers:{
          urls: res,
          loading: false
        }
      }));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchForm />
          <MainNav />
          <Route path="/cats" render={() => <PhotoContainer urls={this.state.cats.urls} loading = {this.state.cats.loading}/>} />
          <Route path="/dogs" render={() => <PhotoContainer urls={this.state.dogs.urls} loading = {this.state.dogs.loading}/>} />
          <Route path="/computers" render={() => <PhotoContainer urls={this.state.computers.urls} loading = {this.state.computers.loading}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
