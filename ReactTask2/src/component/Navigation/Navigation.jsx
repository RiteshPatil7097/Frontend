import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  console.log(styles);

  return (
    <nav className={`${styles.Navigation} container`}>
      <div className='logo'>
           <img src="/Images/logo.png" alt="this is a image"></img>
      </div>
      
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

    </nav>
  )
}

export default Navigation;
