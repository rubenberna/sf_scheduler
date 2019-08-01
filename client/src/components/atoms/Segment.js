import React from 'react'
import { Segment } from 'semantic-ui-react'

const SegmentDefault = (props) => (
  <Segment
    attached={props.attached}
    circular={props.circular}
    className={props.className}
    floated={props.floated}
    color={props.color}
    loading={props.loading}
    raised={props.raised}
    secondary={props.secondary}
    textAlign={props.textAlign}
    size={props.size}>
    {props.children}
  </Segment>
)

export default SegmentDefault