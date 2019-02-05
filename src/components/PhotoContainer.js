import React from 'react';

const PhotoContainer = ({urls, loading}) => {

    const populate = ()=>{
      let lis =  urls.map((url,i) => <li key={i}>
        <img src={url} alt="" />
      </li>)
      if(lis.length === 0){
        if(loading){
          return(
            <li className="not-found">
              <h3>Loading...</h3>
            </li>
          );
        }else{
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
        <h2>Results</h2>
        <ul>
          {populate()}
          
          
        </ul>
      </div>
    );
}

export default PhotoContainer;