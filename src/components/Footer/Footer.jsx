import React from 'react';

import './Footer.css';

function Footer () {
    
    return (
        <div className="footer__container">
            <div className="about-links">
                <div className="about">
                    <h2 id="about-title">About</h2>
                    <p>Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam quaerat accusantium corporis eaque velit officia soluta voluptatum at? Illo fugiat nisi exercitationem commodi molestiae distinctio, sit sint ea dolor?</p>
                </div>
                <div className="quick__links">
                    <h2 id="quick__links-title">Quick Links</h2>
                    <ul className="quick__links-list">
                        <li><a href="">Menu Item 1</a></li>
                        <li><a href="">Menu Item 2</a></li>
                        <li><a href="">Menu Item 3</a></li>
                        <li><a href="">Menu Item 4</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© 2020 Company Name. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;