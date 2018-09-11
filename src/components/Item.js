import React, { Component } from 'react'

const Item = props => {
  return <li onClick={props.remove}>{props.text}</li>
}

export default Item
