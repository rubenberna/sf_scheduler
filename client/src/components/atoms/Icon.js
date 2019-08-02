import React from 'react'
import { Icon } from 'semantic-ui-react'

const IconDefault = (props) => {
  return(
    <Icon 
      disabled={props.disabled}
      name={props.name}
      color={props.color}
      circular={props.circular}
      size={props.size} /> 
  )
}


export default IconDefault