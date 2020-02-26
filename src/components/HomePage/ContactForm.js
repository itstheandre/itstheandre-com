import React from "react"
import styled from "styled-components"
import { Button } from "../../styles/Buttons"
import { useWrapper } from "../../Context/WrapperContext"

const StyledContactForm = styled.div`
  padding-top: 8rem;
  position: relative;
  color: white;

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

    .letsWork {
      padding-left: 8rem;
    }
  }

  .form {
    padding-right: 8rem;

    input {
      width: 100%;
      margin: 1.6rem 0 3.2rem;
      color: white;
      height: 3.2rem;
      background: none;
      border: 1px solid #fff;
    }

    textarea {
      margin: 1.6rem 0 3.2rem;
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
  return (
    <StyledContactForm ref={footer}>
      <div className="fullWidth"></div>
      <div className="container">
        <div className="letsWork h1">Let's work together</div>
        <div className="form">
          <form>
            <label htmlFor="name" className="sectionText">
              Name
            </label>
            <input type="text" />
            <label htmlFor="name" className="sectionText">
              Email
            </label>
            <input type="email" id="name" />
            <label htmlFor="message" className="sectionText">
              Message
            </label>
            <textarea type="text" id="message" />
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
