import React,{Component} from 'react'
import Aux from '../hoc/aux'
import {Form,Label,Input,FormGroup,Button,Col} from 'reactstrap'
import axios from 'axios'

class AddCompany extends Component {
    state={
        name:"",
        location:""
    }

    // componentDidMount(){
    //     console.log(this.props)
    // }

    handleSubmit=(e)=>{
        e.preventDefault()
        let det = this.state
        axios
         .post('/api/companies',det)
         .then(res=>{
            //  console.log(res)
         })
         .catch(err=>{
             console.log(err)
         })
         this.props.history.goBack()
    }

    render(){
        return(
           <Aux>
               <Form onSubmit={this.handleSubmit}>
                   <FormGroup row>
                       <Label for="companyName" sm={2}>Company Name</Label>
                        <Col sm={10}>
                        <Input type="text" name="companyName" 
                        placeholder="Company Name" 
                        onChange={(e)=>{
                            this.setState({
                                name:e.target.value
                            })
                        }
                        }
                        />
                        </Col>
                   </FormGroup>
                   <FormGroup row>
                       <Label for="location" sm={2}>Location</Label>
                       <Col sm={10}>
                       <Input type="text" name="location" 
                       placeholder="Location"
                       onChange={(e)=>{
                           this.setState({
                               location:e.target.value
                           })
                       }}
                       />
                       </Col>
                   </FormGroup>
                   <Button>Save</Button>
               </Form>
           </Aux>
        )
    }
}

export default AddCompany