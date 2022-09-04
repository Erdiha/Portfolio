import { get } from 'https';
import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import './work.css';
import { cya_app, links, quotes_app, utility_app, workdetails } from './workdetails';

const Work = (props) => {
  
  const allWorks = [utility_app,quotes_app,cya_app];
  const {title,technology, describe} = workdetails;
 


  
  const getHR = document.querySelector('.projects-hr');
  const getlistitems = document.querySelectorAll('.list-item'); 
  document.addEventListener('mouseover', (e) => {
    if(getHR){
     if(e.target.className === 'work-h1'){
       getHR.classList.add("projects-hr-active")
     }else{
       getHR.classList.remove("projects-hr-active")
     }}})
  
     const handleClick = (e) => {
      let cn = e.target.className;
      const getWorkitems = document.querySelectorAll('.w');

       if(getWorkitems) {
         getWorkitems.forEach((item) =>{
         if(item.className === cn){
          console.log(item.className, cn)
           item.classList.toggle("mobileActive");
         }
         else{
          item.classList.remove("mobileActive");
         }
       });
   }
  }
   //handles the h1 tag underline resize
   

 
  const workDescribe = (num)=>{
    return <>
            <p className="desc d1">{describe[num]}</p>
            <span className="desc d2">
              <b>Technology Used</b> 
              <p>{allWorks[num]}</p></span>
            <span className="desc d3">
              <a target="_blank"  href={links[num]}>visit the website</a></span>
            </>
  }
  
  return (
    <div className=" work-wrapper">
      <h1 className="work-h1">PROJECTS</h1>
      <hr className='projects-hr'/>
        <ul className='work-lists'>
          <li className="list-item utility">
            <p className="title">{workdetails.title[0]}</p>
            <span  
            onClick={handleClick}
            className=' w work-itemu '>
            </span>
            <div className='work-describe' >
              {workDescribe(0)}
            </div>
            </li>

          <li className="list-item quotes">
            <p  className="title">{workdetails.title[1]}</p>
            <span  
             onClick={handleClick}
            className=' w work-itemq '>
            </span>
            <div className='work-describe' > 
            {workDescribe(1)}
            </div>
          </li>

          <li className="list-item cya">
            <p  className="title">{workdetails.title[2]}</p>
            <span 
             onClick={handleClick}
            className=' w work-items '>
            </span>
            <div className='work-describe' >
              {workDescribe(2)}
              </div>
          </li>
        </ul>
      <span className='bottom-span'></span>
    </div>
  )
}

export default Work