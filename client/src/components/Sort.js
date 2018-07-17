import React from 'react'
import Aux from '../hoc/aux'
import { Form, FormGroup, Label, Input } from 'reactstrap'


const sort = (props)=>(
    <Aux>

        <Form className="text-left mt-3 ml-3" >
        <Label className="mr-4">Sort </Label>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" /> Name
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="radio" /> Average Rating
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
             <Input type="radio" /> Location
          </Label>
        </FormGroup>
      </Form>
    </Aux>
)

export default sort