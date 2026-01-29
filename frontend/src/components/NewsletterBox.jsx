import React from 'react'
import "./newsletter.css"

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }
  return (
    <div className='newsletterContainer'>
        <p className='newsletterHeading'>Subscribe now & get 20% off</p>
        <p className="newsletterSubheading">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <form onSubmit={onSubmitHandler} className='newsletterForm'>
            <input className='newsletterInput' type="email" placeholder='Enter Your Email' required/>
            <button type='submit' className='newsletterButton'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox