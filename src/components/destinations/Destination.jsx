import React from 'react';
import './destinations.css';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import KeyWest from '../../assets/keywest.jpg';

const Destination = () => {
  return (
    <div id='destinations' className='destinations'>
      <div className="contaier">
        <h1>All-Inclusive Resorts</h1>
        <p>On the Caaribbean's Best Beaches</p>
        <div className="img-container">
          <img src={BoraBora} alt="/" className="span-3 image-grid-row-2" />
          <img src={BoraBora2} alt="/" />
          <img src={Maldives} alt="/" />
          <img src={Maldives2} alt="/" />
          <img src={KeyWest} alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Destination