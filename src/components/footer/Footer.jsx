import React from 'react';
import './footer.css';

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';


const leftData = [
  {
    item: 'About',
  },
  {
    item: 'Partership',
  },
  {
    item: 'Careers',
  },
  {
    item: 'Newsroom',
  },
  {
    item: 'Advertising',
  },
]

const rightData = [
  {
    item1: 'Contact',
  },
  {
    item1: 'Terms',
  },
  {
    item1: 'Policy',
  },
  {
    item1: 'Privacy',
  },
  {
    item1: 'Pricing',
  },
]

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <h3>Barnasawa.</h3>
          <div className="social">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaPinterest className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              {
                leftData.map((nav, index) => (
                  <li key={index}>{nav.item}</li>
                ))
              }
            </ul>
          </div>
          <div className="right">
            <ul>
              {
                rightData.map((navs, index) => (
                  <li key={index}>{navs.item1}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer