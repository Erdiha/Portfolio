
import React, { useEffect, useState } from 'react';
import bio from "../assets/paragraphs";
import ContactUs from './email';
import './home.css';

 const Home = (props) => {
  const [showforms,setShowforms] = useState(false);
  const [buttonName,setButtonName] = useState("Let's Talk");
  const [isInters,setIsInters] = useState(false);
  
  useEffect(()=>{
    const bottomSelector = document.querySelector(".bottom-span")
    const footerSelector = document.querySelector("#footer")
    const getlistitems = document.querySelectorAll('.list-item'); 
    const getWorkitems = document.querySelectorAll('.w');
    const getProjects = document.querySelector(".bb");
    const getContact = document.querySelector(".cc")
    const getHome = document.querySelector(".aa")
    const getWorkd = document.querySelectorAll(".work-describe")
   
    const observer = new IntersectionObserver((entries,options)=>{       
          if(entries[0].isIntersecting){
            setIsInters(()=>true);
            if(props.getName ==="contact"){
                getContact.classList.add("nav-items-active");
                footerSelector.classList.add("footerActive");
                getProjects.classList.remove("nav-items-active")
            
            }
            else{
              getProjects.classList.add("nav-items-active")
              getHome.classList.remove("nav-items-active");
              getContact.classList.remove("nav-items-active");
              footerSelector.classList.remove("footerActive");
           
            }
            getlistitems.forEach(item=>{
              item.classList.add("activeList")
            })
          } 
          else{
            getHome.classList.add("nav-items-active");
            getContact.classList.remove("nav-items-active");
            footerSelector.classList.remove("footerActive");
            getProjects.classList.remove("nav-items-active");
            setIsInters(()=>false);
            getlistitems.forEach(item=>{
              item.classList.remove("activeList");
           });
           getWorkitems.forEach(item=>{
             item.classList.remove("mobileActive")
           });
          };
      });
    if(bottomSelector && getlistitems && getProjects && getlistitems && getWorkitems){
      observer.observe(bottomSelector)}
  },[isInters , props.getName])
    

    const getLetsTalk = document.querySelector(".get-in-touch-container");
    if(getLetsTalk){
      if(!showforms){
        console.log(showforms)
        getLetsTalk.classList.add("getintouch-active")
      }else{
      }
    }
  const clickHandler = ()=>{
    setShowforms(cur=>!cur);
    !showforms?setButtonName("Close"):setButtonName("Lets Talk")
  }
  return (
    <div className='home-wrapper'>
      <span  className=" white-paint" alt="" />
        <div className=" section first-page-wrapper">
           <div className='bio-wrapper'> 
                <h2>I am Erdi</h2>
                <p className='bio'>{bio} </p>
                <hr className="bio-hr"  />
                <button onClick={clickHandler} className="get-in-touch-button" >
                {buttonName}
              </button>
           </div>
           {
            showforms? 
            (<div className='get-in-touch-container'>
              <ContactUs/>
            </div>):
          (
            <div className="images-wrapper">
            </div>)
           }
           <button type="submit" value="Submit" onClick={clickHandler} className="  get-in-touch-button1" >
           {buttonName}
              </button>
        </div>
    </div>
  )
}
export default Home;
