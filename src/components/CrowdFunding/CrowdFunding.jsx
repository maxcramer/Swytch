import React, { Component } from 'react';

import './CrowdFunding.css';

class CrowdFunding extends React.Component{
    render() {
        return(
            <div className="crowdfunding">
                <h3>Funding Complete & Closed</h3>
                <p>Raised £945,198 GDP from 2,096 backers</p>
                <div id="prog__bar">
                    <div id="parent__prog__bar">
                        <div id="child__prog__bar">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CrowdFunding