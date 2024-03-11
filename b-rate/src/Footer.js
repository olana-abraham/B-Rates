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
                            <li>brate042@gmail.com</li>
                            <li>Los Angeles, CA</li>
                            <li>330 De Neve Drive</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Help Center</h4>
                        <ul className = "list-unstyled">
                            <li><a className='test' href="/">Home</a></li>
                            <li><a className='test' href="./Login">Login</a></li>
                            <li><a className='test' href="./register">Register</a></li>
                            <li><a className='test' href="./reviews">Reviews</a></li>
                            <li><a className='test' href="https://menu.dining.ucla.edu/hours/">Menu</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Connect with Us</h4>
                        <ul class="list-unstyled">
                            <li><a href="https://www.tiktok.com/@ucla?lang=en" className='test'>Tiktok</a></li>
                            <li><a href="https://twitter.com/AbrahamOlana" className='test'> Twitter</a></li>
                            <li><a href="https://www.instagram.com/nattiicho/" className='test'>Instagram</a></li>
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