import React, { Component } from 'react';

function VideoContainer() {
    return (
        <div>
            <h4>Video Container</h4>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KEgxcv-NAzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RGCNW2KOtIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}
  



export default VideoContainer;