import React from "react"
import styled from "styled-components"
import { Button } from "../../styles/Buttons"
import { useWrapper } from "../../Context/WrapperContext"
import { useState } from "react"
//

const StyledContactForm = styled.div`
  padding-top: 8rem;
  position: relative;
  color: white;
  @media (max-width: 936px) {
    margin-bottom: 8rem;
  }

  .fullWidth {
    width: 100vw;
    pointer-events: none;

    height: 100%;
    background-color: black;
    position: absolute;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    z-index: -100;
  }
  .container {
    width: 93.6rem;
    margin: 0 auto;
    padding-top: 9rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 936px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
    @media (max-width: 600px) {
      width: 35rem;
    }
    .letsWork {
      padding-left: 8rem;
      @media (max-width: 936px) {
        padding-left: 0;
        width: 40%;
      }
      @media (max-width: 600px) {
        width: 80%;
      }
    }
  }

  .form {
    padding-right: 8rem;
    @media (max-width: 936px) {
      padding: 0;
    }

    input {
      width: 100%;
      margin: 1.6rem 0 3.2rem;
      font-size: 2rem;
      padding: 0.5rem;
      color: white;
      height: 3.2rem;
      background: none;
      border: 1px solid #fff;
    }

    textarea {
      margin: 1.6rem 0 3.2rem;
      color: white;
      font-size: 2rem;
      padding: 0.5rem;
      height: 20vh;
      line-height: 3rem;
      border: none;
      width: 100%;
      resize: none;
      background: none;
      border: 1px solid #fff;
    }
  }
`

const ContactForm = () => {
  const { footer } = useWrapper()
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log({ form })
  return (
    <StyledContactForm
      ref={footer}
      name="contact"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div className="fullWidth"></div>
      <div className="container">
        <div className="letsWork h1">Let's work together</div>
        <div className="form">
          <form>
            <label htmlFor="name" className="sectionText">
              Name
            </label>
            <input type="text" id="name" name="name" onChange={handleChange} />
            <label htmlFor="name" className="sectionText">
              Email
            </label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message" className="sectionText">
              Message
            </label>
            <textarea type="text" id="message" name="message" />
            <Button styleType="secondary" type="submit">
              Let's talk
            </Button>
          </form>
        </div>
      </div>
    </StyledContactForm>
  )
}

export default ContactForm
