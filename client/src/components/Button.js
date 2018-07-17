import React from 'react'
import {Button} from 'reactstrap'

const button =(props)=>(
      <div>
          <Button color="primary mb-4 mt-2" onClick={props.clicked}>{props.children}</Button>
      </div>
)

export default button