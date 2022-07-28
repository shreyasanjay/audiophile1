import React from 'react';
import './Footer.css';
function Foot(){
    return(
    <div>
        <div className='footcon'>
        <div className='col'>
                <ul className='mainul'>
                    <li>
                        <span className='title1'>AudioPhile</span>
                    </li>
                    <li className='comp'><img src='./logo.png' width='80' height='50'></img></li>
                </ul>
            </div>
            <div className='col'>
                <ul className='mainul'>
                    <li>
                        <span className='title1'>Headquarters</span>
                    </li>
                    <li className='comp'>Mumbai: 1800 899 899</li>
                    <li className='comp'>Pune: 1800 999 999</li>
                    <li className='comp'>Bangalore: 1800 799 799</li>
                </ul>
            </div>
            <div className='col'>
                <ul className='mainul'>
                    <li>
                        <span className='title1'>Quick Links</span>
                    </li>
                    <li className='comp'><a className='social' href=''>Upcoming Concerts</a></li>
                    <li className='comp'><a className='social' href=''>Subscribe</a></li>
                    <li className='comp'><a className='social' href=''>Get a Studio</a></li>
                </ul>
            </div>
            <div className='col'>
                <ul className='mainul'>
                    <li>
                        <span className='title1'>Contribute</span>
                    </li>
                    <li className='comp'>Save Girl Child</li>
                    <li className='comp'>Old Age Homes</li>
                    <li className='comp'>Plant a Tree</li>
                </ul>
            </div>
            <div className='col'>
                <ul className='mainul'>
                    <li>
                        <span className='title1'>Social Media</span>
                    </li>
                    <li className='comp'><img src='./fb.png' width='20' height='20'></img>&nbsp;<a className='social' href='https://facebook.com'>Facebook</a></li>
                    <li className='comp'><img src='./insta.png' width='20' height='20'></img>&nbsp;<a className='social' href='https://instagram.com'>Instragram</a></li>
                    <li className='comp'><img src='./twitter.png' width='20' height='20'></img>&nbsp;<a className='social' href='https://twitter.com'>Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Foot;