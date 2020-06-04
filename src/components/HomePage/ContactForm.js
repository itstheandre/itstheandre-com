import React, { useState } from "react"
import styled from "styled-components"
import { useWrapper } from "../../Context/WrapperContext"
import { Button } from "../../styles/Buttons"
//

const StyledContactForm = styled.div`
  padding-top: 8rem;
  position: relative;
  color: white;

  /* width: 93.6rem; */
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
    /* width: 93.6rem; */
    margin: 0 auto;
    padding-top: 9rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 936px) {
      grid-template-columns: 1fr;
      width: 100%;
    }

    @media (max-width: 800px) {
      width: 70vw;
    }
    @media (max-width: 600px) {
      width: 35rem;
    }
    @media (max-width: 500px) {
      width: 80%;
    }
    .letsWork {
      /* padding-left: 8rem; */
      width: 40%;
      @media (max-width: 936px) {
        padding-left: 0;
        width: 40%;
      }
      @media (max-width: 800px) {
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
      font-family: var(--tt-monoReg);
      font-size: 2rem;
      color: white;
      margin: 1.6rem 0 3.2rem;
      height: 3.2rem;
      background: none;
      padding: 0.5rem;
      border: 1px solid #fff;
    }

    textarea {
      font-family: var(--tt-monoReg);
      font-size: 2rem;
      padding: 0.5rem;
      margin: 1.6rem 0 3.2rem;
      color: white;
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

async function sendForm(form, formInfo) {
  return await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": formInfo.getAttribute("name"),
      ...form,
    }),
  })
}

const ContactForm = () => {
  const { footer } = useWrapper()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [message, setMessage] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function setUserMessage(info) {
    setMessage(info)
    setTimeout(() => {
      setMessage("")
    }, 2000)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.message || !form.name || !form.email) {
      return
    }
    // console.log("submited", { form })
    const formInfo = e.target
    try {
      await sendForm(form, formInfo)
      console.log("form sent")
      setUserMessage("Form Nicely Cenas")
    } catch (error) {
      console.log(error)
      // setMessage('')
      setUserMessage("Something went wrong")
    }
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({
    //     "form-name": formInfo.getAttribute("name"),
    //     ...form,
    //   }),
    // })
    //   .then(() => console.log("form really submitted"))
    //   .catch(error => alert(error))
  }

  // console.log({ form })
  return (
    <StyledContactForm ref={footer}>
      <div className="fullWidth"></div>
      <div className="container">
        <div className="letsWork h1">Let's work together</div>
        <div className="form">
          <form
            name="contact"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="sectionText">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={form.name}
            />
            <label htmlFor="name" className="sectionText">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="message" className="sectionText">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            <Button styleType="secondary" type="submit">
              Let's talk
            </Button>
          </form>
          {/* <h1 style={{ color: "white", fontSize: "40rem" }}>{message}</h1> */}
        </div>
      </div>
    </StyledContactForm>
  )
}

export default ContactForm
