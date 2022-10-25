import React from 'react';
import './home.css';
import './work.css';
import {  links,workdetails } from './workdetails';

const Work = () => {
  const { describe} = workdetails;
  const getHR = document.querySelector('.projects-hr');
  document.addEventListener('mouseover', (e) => {
    if(getHR){
     if(e.target.className === 'work-h1'){
       getHR.classList.add("projects-hr-active")
     }else{
       getHR.classList.remove("projects-hr-active")
     }}})
  
  const workDescribe = (num)=>{
    return <>
            <p className="desc d1">{describe[num]}</p>
            <span className="desc d3">
              <a target="_blank"  href={links[num]}>visit the website</a></span>
            </>
  }
  return (
    <div className=" work-wrapper">
      <h1 className="work-h1">PROJECTS</h1>
      <hr className='projects-hr'/>
        <div id='work-lists'>
          <div className="list-item utility">
            <p className="title">{workdetails.title[0]}</p>
            <span  
            className=' w work-itemu '>
            </span>
            <div className='work-describe' >
              {workDescribe(0)}
            </div>
            </div>
          <div className="list-item quotes">
            <p  className="title">{workdetails.title[1]}</p>
            <span  
            className=' w work-itemq '>
            </span>
            <div className='work-describe' > 
            {workDescribe(1)}
            </div>
          </div>
          <div className="list-item cya">
            <p  className="title">{workdetails.title[2]}</p>
            <span 
            className=' w work-items '>
            </span>
            <div className='work-describe' >
              {workDescribe(2)}
              </div>
        </div>
        <div className="list-item quiz-game">
            <p  className="title">{workdetails.title[3]}</p>
            <span 
            
            className=' w work-items '>
            </span>
            <div className='work-describe' >
              {workDescribe(3)}
              </div>
          </div>
        </div>
      <span className='bottom-span'></span>
    </div>
  )
}

export default Work