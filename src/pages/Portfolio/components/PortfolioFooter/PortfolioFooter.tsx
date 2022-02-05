import React from 'react';

import "./PortfolioFooter.css"

import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import { SiAltiumdesigner } from 'react-icons/si'
import { MdFacebook } from 'react-icons/md'

const PortfolioFooter: React.FC = () => {
  return (
    <section className='portfolio-footer'>
      <div>
        <AiFillMail className='portfolio-footer-icon' size={40}/>
        <FaLinkedin className='portfolio-footer-icon' size={40}/>
        <FaGithub className='portfolio-footer-icon' size={40}/>
        <MdFacebook className='portfolio-footer-icon' size={40}/>
      </div>
      <hr />
      <SiAltiumdesigner className='portfolio-footer-icon' size={40} color='gray'/>
      <p>created with (Project Name)</p>
    </section>
  );
};

export default PortfolioFooter;