import React from 'react'
import './LeftSideBar.css'
import assets from '../../assets/images/assets'

const LeftSideBar = () => {
  return (
    <div className='ls'>
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} className = 'logo' alt="" />
          <div className="menu">
            <img src={assets.menu_icon} alt="" />
          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Search here ...." />
        </div>
      </div>
      <div className="ls-list">
{Array(12).fill("").map((item,index)=>(
  <div key={index}className="friends">
          <img src={assets.profile_img}  alt="" />
          <div>
            <p>Ntsako Sithole</p>
            <span>Tjo ,Haona Stress bye bye!</span>
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default LeftSideBar
