import React, {useState} from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

// import { a } from 'react-scroll';
import './navbar.css';

const navData = [
  {
    name: 'home',
    url: '#home'
  },
  {
    name: 'Destinations',
    url: '#destinations'
  },
  {
    name: 'Carousel',
    url: '#carousels'
  },
  {
    name: 'Search',
    url: '#book'
  },
  {
    name: 'Views',
    url: '#views'
  },
]
const navMobData = [
  {
    nameMob: 'Home',
    urlMob: '#home',
  },
  {
    nameMob: 'Destinations',
    urlMob: '#destinations',
  },
  {
    nameMob: 'Carousel',
    urlMob: '#carousel',
  },
  {
    nameMob: 'Search',
    urlMob: '#book',
  },
  {
    nameMob: 'Views',
    urlMob: '#views',
  },
]

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav)

  return (
    <div id='home' className={ nav ? 'navbar navbar-bg' : 'navbar' } >
      <div className={nav ? 'logo dark' : 'logo'} >
        <h2>
          BARNASAWA.
        </h2>
      </div>
      <ul className="nav-menu">
        {
          navData.map((item, index) => (
            <a href={item.url} key={index} >
              <li>{item.name}</li>
            </a>
          ))
        }
      </ul>
      <div className="nav-icons">
        <BiSearch className='icon' style={{ maginRight: '1rem' }} />
        <BsPerson className='icon' />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {
          !nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)
        }
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu' } >
        <ul className="mobile-nav">
          {
            navMobData.map((item, index) => (
              <a href={item.urlMob} key={index} >
                <li>{item.nameMob}</li>
              </a>
            ))
          }
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className='icons' />
            <FaInstagram className='icons' />
            <FaTwitter className='icons' />
            <FaPinterest className='icons' />
            <FaYoutube className='icons' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar