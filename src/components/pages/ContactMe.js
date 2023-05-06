import React, { useState } from 'react'

function ContactMe() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleOnChange = (e) => {
    setInputs((prevInputs) => ({
      [e.target.name]: e.target.value
    }))
    console.log("e", e.target.value)
    console.log("inputs.name", inputs.name)
  }

  return (
    <div>
      <h1>
        Contact Me
      </h1>
      <div>
        <form>
          {inputs.name === "" && (
            <div>please enter name</div>
          )}
          <input type="text" placeholder='name'
            value={inputs.name} onChange={handleOnChange}
          />
          
          <input type="email" placeholder='email' />
          <textarea type="text" placeholder='message' />
          <button type='submit'>
            Contact Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe