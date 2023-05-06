import React from 'react'

function ContactMe() {ç
  return (
    <div>
      <h1>
        Contact Me
        </h1>
        <div>
          <form>
            <input type="text" placeholder='name'/>
            <input type="email" placeholder='email'/>
            <textarea type="text" placeholder='message'/>
            <button type='submit'>
              Contact Me
            </button>
          </form>
        </div>
      </div>
  )
}

export default ContactMe