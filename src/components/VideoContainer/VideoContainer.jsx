import React from 'react';

import './VideoContainer.css';


function VideoContainer() {
    return (
        <div className="video__container">
                <iframe className="video__sizing" width="560" height="315" src="https://www.youtube.com/embed/KEgxcv-NAzY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="video__sizing" width="560" height="315" src="https://www.youtube.com/embed/RGCNW2KOtIE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
  



export default VideoContainer;