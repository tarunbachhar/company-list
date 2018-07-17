import React,{Component} from 'react'
import Aux from '../hoc/aux'
import {Form,Label,Input,FormGroup,Button,Col} from 'reactstrap'
import axios from 'axios'


class AddReviewForm extends Component {
    state={
        name:"",
        rating:"",
        subject:"",
        body:""
    }

     
    handleReviewSubmit=(e)=>{
        e.preventDefault()
        let det = this.state
       
        axios
         .post(`/api/companies/${this.props.match.params.id}/reviews`,det)
         .then(res=>{
            //  console.log(res)
         })
         .catch(err=>{
             console.log(err)
         })
         this.props.history.goBack()
    }

    render(){
        return (
            <Aux>
                <Form onSubmit={this.handleReviewSubmit}>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name Of Reviewer</Label>
                        <Col sm={10}>
                        <Input type="text" name="name" placeholder="reviewer's name"
                         onChange={(e)=>
                            this.setState({
                                name:e.target.value
                            })
                        }
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="rating" sm={2}>Rating</Label>
                        <Col sm={10}>
                        <Input type="text" name="rating" placeholder="rating"
                         onChange={(e)=>
                            this.setState({
                                rating:e.target.value
                            })
                        }
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="subject" sm={2}>Subject</Label>
                        <Col sm={10}>
                        <Input type="text" name="subject" placeholder="subject"
                         onChange={(e)=>
                            this.setState({
                                subject:e.target.value
                            })
                        }
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="body" sm={2}>Body</Label>
                        <Col sm={10}>
                        <Input type="text" name="body" placeholder="body"
                         onChange={(e)=>
                            this.setState({
                                body:e.target.value
                            })
                        }
                        />
                        </Col>
                    </FormGroup>
                    <Button>Save</Button>
                </Form>
            </Aux>
        )
    }
}

export default AddReviewForm