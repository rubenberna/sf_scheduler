import React from 'react'
import { Header } from 'semantic-ui-react'

const HeaderDefault = (props) => (
  <div>
    <Header
      size={props.size}
      textAlign={props.textAlign}
      float={props.float}
      color={props.color}
      icon={props.icon}>
      {props.children}
    </Header>
  </div>
)

export default HeaderDefault