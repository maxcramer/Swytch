import React, { Component } from 'react';

import './VideoContainer.css';


function VideoContainer() {
    let vid1 = document.getElementById('video_1');
    let vid2 = document.getElementById('video_2');
    let vidContainer = document.getElementsByClassName('video__container');
    console.log(vidContainer)
    

    return (
        <div className="video__container">
                <iframe className="video__sizing" width="560" height="315" src="https://www.youtube.com/embed/KEgxcv-NAzY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="video__sizing" width="560" height="315" src="https://www.youtube.com/embed/RGCNW2KOtIE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}
  



export default VideoContainer;