import React from 'react';
import './selects.css';

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'
import ImgSelect from '../imgSelects/ImgSelect';

const selectData = [
  {
    imgUrl: BoraBora,
    name: 'Bora Bora',
  },
  {
    imgUrl: BoraBora2,
    name: 'Emerald Bay',
  },
  {
    imgUrl: Maldives,
    name: 'Maldives',
  },
  {
    imgUrl: Maldives2,
    name: 'Grenda',
  },
  {
    imgUrl: Maldives3,
    name: 'Barbados',
  },
  {
    imgUrl: KeyWest,
    name: 'Key West',
  },
]

const Selects = () => {
  return (
    <div id='views' className='selects'>
      <div className="container">
        {
          selectData.map((item, index ) => (
            <div key={index}>
              <ImgSelect bgImg={item.imgUrl} text={item.name} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Selects