import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import SampleForm from "../form/form"
import "./modal.css"

function Pop(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  console.log(props)
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className={
          props.className || "text-white btn btn-primary btn-inverted mt-2"
        }
      >
        <i class="icon-phone mr-2" /> Get in touch
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Get in touch</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SampleForm
            form_name="Newsletter Form"
            form_id="5bcd42f86b63453b251972bc"
            form_classname="form-newsletter"
          >
            <div class="form-row">
              <div class="col-lg-6">
                <div class="form-group">
                  <input class="form-control" type="text" required="" />
                  <label>First Name</label>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input class="form-control" type="text" required="" />
                  <label>Last Name</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <input class="form-control" type="email" required="" />
              <label>Email address</label>
            </div>
            <div class="form-group">
              <input class="form-control" type="tel" />
              <label>Phone (optional)</label>
            </div>
            <div class="form-group">
              <textarea class="form-control h-auto" required="" />
              <label>Message</label>
            </div>
            <div class="form-group">
              <div className="webriq-recaptcha" />
            </div>
            <div class="form-group mb-4">
              <button class="btn btn-primary" type="submit">
                Send Message
              </button>
            </div>
          </SampleForm>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Pop
