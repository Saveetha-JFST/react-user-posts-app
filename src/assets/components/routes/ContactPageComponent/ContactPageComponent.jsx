import React from 'react'
import './ContactPageComponent.css'

const ContactPageComponent = () => {
  return (
    <React.Fragment>
        <h1 className='header'>Contact us</h1>
        <section className='map-container'>
          <iframe className='map' width="1200" height="800" src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.2768356951183!2d80.01509469118533!3d13.026061480381173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52605c8001b0b3%3A0x17397b086e047e7c!2sSaveetha%20Engineering%20College!5e1!3m2!1sen!2sin!4v1697904752520!5m2!1sen!2sin" ></iframe>
        </section>
        </React.Fragment>
  )
}

export default ContactPageComponent

