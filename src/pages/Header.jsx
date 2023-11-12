import React from 'react';
import './header.css';

const Header = ({ toggleActive }) => {
    


  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
            <i className='bi bi-sliders' />
        </a>
        <div className="userItems">
            <a href="#" className="icon">
                <i className='bi bi-heart-fill' />
                <span className='like'>{library.length}</span>
            </a>
            <a href="#" className="icon">
                <i className='bi bi-bag-fill' />
                <span className='bag'>{bag.length}</span>
            </a>
            <div className='avatar'>
                <a href="#">
                    <img src='https://picsum.photos/seed/picsum/200/300' alt='user Image' />
                </a>
                <div className='user'>
                    <span>User Name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header