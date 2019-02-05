import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({urls, loading, searchTerm}) => {

    const populate = ()=>{
      let lis =  urls.map((url,i) => <GalleryItem key={i} url={url}/>)
      // if there are no images
      if(lis.length === 0){
        //display loading if loading
        if(loading){
          return(
            <li className="not-found">
              <h3>Loading...</h3>
            </li>
          );
        }else{
          //display no results if not loading
          return(
            <li className="not-found">
              <h3>No Results Found</h3>
              <p>You search did not return any results. Please try again.</p>
            </li>
          );
        }
      }else{
        return lis;
      }
    }
    return(
        <div className="photo-container">
        <h2>Results for {searchTerm}</h2>
        <ul>
          {populate()}
        </ul>
      </div>
    );
}

export default Gallery;