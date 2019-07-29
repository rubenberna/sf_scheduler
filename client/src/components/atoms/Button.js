import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonDefault = (props) => (
  <Button
    className={props.class}
    onClick={props.onClick}
    color={props.color}
    floated={props.floated}
    loading={props.loading}
    size={props.size}>
      {props.children}
    </Button>
)

export default ButtonDefault
