import React, { useEffect } from 'react';

const Navbar = (props) => {
  const handleClick = (e)=>{
      const getNavItems = document.querySelectorAll(".n-items");
      const footerSelector = document.querySelector("#footer")
      props.getName(()=>e.target.name)
      
  }
  return (
    <div className='nav-wrapper'>
     <a name="icon" onClick={handleClick}  className='app-icon' href="#top"><b style={{color:"#DF7861"}}>eH</b>
     </a>
        
      <ul>
        <li ><a className='n-items aa' name="home" onClick={handleClick}  href="#top">Home</a></li>
        <li ><a className='n-items bb' name="work" onClick={handleClick} href="#work">Projects</a></li>
        <li ><a className='n-items cc' name="contact" onClick={handleClick}  href="#footer">Contact</a></li>
      </ul>
    </div>
  )
}
export default Navbar;
