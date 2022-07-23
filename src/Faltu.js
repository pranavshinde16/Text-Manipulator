import React from 'react'
import PropTypes from 'prop-types'

export default function Faltu(props) {
  return (
    <h1>{props.name} {props.middle} {props.surname}</h1>
  )
}

Faltu.prototypes={
    name:PropTypes.string.isRequired,
    middle: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}

Faltu.defaultProps={
    name: "Shreeram",
    middle:"Pramod",
    surname:"Shinde"
}