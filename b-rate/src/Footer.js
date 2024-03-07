import React from 'react';
import './footer.css'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <div className="col">
                        <h4>About Us</h4>
                        <ul className = "list-unstyled">
                            <li>343-024-2344</li>
                            <li>Moscow, Russia</li>
                            <li>330 De Neve Drive</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>About Us</h4>
                        <ul className = "list-unstyled">
                            <li>343-024-2344</li>
                            <li>Moscow, Russia</li>
                            <li>330 De Neve Drive</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>About Us</h4>
                        <ul className = "list-unstyled">
                            <li>343-024-2344</li>
                            <li>Moscow, Russia</li>
                            <li>330 De Neve Drive</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} DONTi | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;