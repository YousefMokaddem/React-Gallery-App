import React from 'react';

const PhotoContainer = ({urls}) => {

    const populate = ()=>{
      return urls.catUrls.map((url,i) => <li key={i}>
        <img src={url} alt="" />
      </li>)
    }
    return(
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {populate()}
          
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    );
}

export default PhotoContainer;