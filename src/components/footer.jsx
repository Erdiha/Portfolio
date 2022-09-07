import React from 'react'
import pdf from '../static/Erdi_Haciogullari_Resume.pdf'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className="footer-greet">
          <hr className='footer-hr-top hr' />
          <h1><a href = {pdf} target = "_blank">View <span style={{color: "#DF7861"}}>Resume</span></a></h1>
          <hr className='footer-hr-bottom hr' />
          </div>
        <div className="footer-contact-wrappper">
          <a className='footer-contact linkedin' target="blank" href="https://www.linkedin.com/in/erdi-haciogullari-919246222/"></a>
          <a className='footer-contact github' target="blank" href="https://github.com/Erdiha"></a>
          <a className='footer-contact handshake' target="blank" href="https://app.joinhandshake.com/stu/users/18554836"></a>
        </div>
        
    </div>
  )
}

export default Footer