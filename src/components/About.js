import React from 'react'
import { Link } from "react-router-dom"

export default function About(props) {

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#06121c" : "white"
  }

  return (
    <>

      <div className="card text-center container my-4 border-secondary" id='cardShadow' style={myStyle}>
        <div className="card-header border-secondary">
          About us
        </div>
        <div className="card-body">
          <h5 className="card-title fs-3">Text Manipulatar</h5>
          <div className='about card-text pb-3 '>Welcome to Text Manipulator. We're dedicated to giving you the very best of service, with a focus of efficient text manipulation.
            Founded in 2022 by Pranav Shinde,Text Manipulator has come a long way from its beginnings as a simple text handler app.
            We hope you enjoy our Web app as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            <br />
            Sincerely,
            <br />
            Pranav Shinde (CEO/Founder-TextManipulator)</div>
          <Link to="/" className="btn btn-info ">Go to Home page</Link>
        </div>
        <div className="card-footer text-muted border-secondary">
          THANKS
        </div>
      </div>

    </>




  )
}
