import React, { Component } from 'react';

import './VideoContainer.css';


function VideoContainer() {
    return (
        <div className="video__container">
                <iframe className="video__big" width="560" height="315" src="https://www.youtube.com/embed/KEgxcv-NAzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <iframe className="video__small" width="560" height="315" src="https://www.youtube.com/embed/RGCNW2KOtIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
}
  



export default VideoContainer;