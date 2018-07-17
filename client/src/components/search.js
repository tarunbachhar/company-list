import React,{Component} from 'react'
import Aux from '../hoc/aux'
import {Container,Form,FormGroup,Label,Input} from 'reactstrap'


class Search extends Component {
  state={
    data:[],
    search:"",
    option:"location"
  }

 componentWillReceiveProps(nextProps){
   this.setState({
     data:nextProps.data
   })
 }

 handleSearch=(e)=>{
    this.setState({
      search:e.target.value
    })
    let filterProp =  this.props.data.filter((item)=>{
      return item.location.toLowerCase().indexOf(
        e.target.value.toLowerCase()) !==-1
    })
     
    this.props.return(filterProp) 
    
 }

  render(){
    
    return(
      <Aux>
      <Container>
      <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="search" className="mr-sm-2">Filter</Label>
        <Input type="text" name="search" placeholder="Search text...." 
         onChange={this.handleSearch}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="select" name="select" value={this.state.option} onChange={(e)=>{
          this.setState({
            option:e.target.value
          })
        }}>
          <option value="location">Location</option>
          <option value="rating">Rating</option>
        </Input>
      </FormGroup>
    </Form>
      </Container>
  </Aux>
    )
  }
} 
export default Search 