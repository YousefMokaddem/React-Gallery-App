import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import MainNav from './components/MainNav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component {
  //set state
  state = {
    search:{
      urls: [],
      loading: true,
      q: ''
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
  //search
  handleSearch(q){
    //clear previous search
    this.setState({
      search: {
        urls: [],
        loading: true
      }
    });
    //search 
    fetch(`https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=${apiKey}&tags=${q}&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        //set state with new search
        search:{
          urls: res,
          loading: false,
          q: q
        }
      }))
      .catch(err => console.log('error fetching and parsing data', err));
  }
  //fetch data for the 3 buttons
  componentDidMount(){
    fetch(`https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=${apiKey}&tags=cats&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        cats:{
          urls: res,
          loading: false
        }
      }))
      .catch(err => console.log('error fetching and parsing data', err));
    fetch(`https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=${apiKey}&tags=dogs&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        dogs:{
          urls: res,
          loading: false
        }
      }))
      .catch(err => console.log('error fetching and parsing data', err));
    fetch(`https://api.flickr.com/services/rest/?per_page=24&method=flickr.photos.search&api_key=${apiKey}&tags=computers&format=json&nojsoncallback=1`)
      .then(res=>res.json())
      .then(res=>res.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`))
      .then(res=>this.setState({
        computers:{
          urls: res,
          loading: false
        }
      }))
      .catch(err => console.log('error fetching and parsing data', err));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route render={() => <SearchForm search={this.handleSearch.bind(this) }/>} />
          <MainNav />
          <Switch>
            <Route path="/cats" render={() => <Gallery urls={this.state.cats.urls} loading = {this.state.cats.loading} searchTerm={'cats'}/>} />
            <Route path="/dogs" render={() => <Gallery urls={this.state.dogs.urls} loading = {this.state.dogs.loading} searchTerm={'dogs'}/>} />
            <Route path="/computers" render={() => <Gallery urls={this.state.computers.urls} loading = {this.state.computers.loading} searchTerm={'computers'}/>} />
            <Route path="/search" render={() => <Gallery urls={this.state.search.urls} loading = {this.state.search.loading} searchTerm={this.state.search.q}/>} />
            <Route component={NotFound} />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
