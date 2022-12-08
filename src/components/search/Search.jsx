import React from 'react';
import './search.css';

import Gold from '../../assets/gold.png';

const Search = () => {
  return (
    <div id='book' className='search'>
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p>
          Come experience the very pinnacle of luxury 
          Caribbean all-inclusive vacations for 
          couples at Sandals Resorts. 
          Our luxury beach resorts, 
          set along the most gorgeous tropical 
          settings and exquisite beaches in Saint Lucia,
          Jamaica, Antigua, The Bahamas, Grenada, 
          Barbados and Curaçao, feature unlimited 
          gourmet dining, unique bars serving premium 
          liquors and wines, and every land and water 
          sport, including complimentary green fees at 
          our golf resorts and PADI® certified scuba 
          diving at most resorts. 
          If you are planning a wedding, 
          Sandals is the leader in Caribbean 
          destination weddings and honeymoon packages.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="gold" style={{ marginRight: '1rem' }} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View PaCkages</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">Get An Additional 7% Off</h4>
            <p className="timer">12 Hours Left!</p>
            <p className="offers">View All Current Offers</p>
          </div>
          <form action="">
            <div className="input-wrap">
              <label htmlFor="">Destination</label>
              <select name="" id="">
                <option value="1">Grande Antigua</option>
                <option value="1">Grenda</option>
                <option value="1">Emerald Bay</option>
                <option value="1">Bora Bora</option>
                <option value="1">Key West</option>
                <option value="1">Maldives</option>
                <option value="1">Barbados</option>
              </select>
            </div>
            <div className="date">
              <div className="input-wrap">
                <label htmlFor="">Check In</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Availabilities</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search