import React from 'react';
import './imgSelect.css';

const ImgSelect = ({ bgImg, text }) => {
  return (
    <div className='selects-location'>
      <div>
        <img src={bgImg} alt={text} />
        <div className="overlay">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ImgSelect