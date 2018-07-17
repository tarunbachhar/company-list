import React,{Component} from 'react'
import Aux from '../hoc/aux'
import axios from 'axios'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'

class AddReview extends Component {

    state={
        data:[],
        id:""
    }

    componentDidMount(){
        console.log(this.props)
        let id  = this.props.match.params.id
        axios
        .get(`/api/companies/${id}/reviews`)
        .then(res=>{
            this.setState({
                data:res.data,
                id:this.props.match.params.id
            })
        })
        .catch(err=>console.log(err))

    }
    render(){
        let reviews = [...this.state.data]
         let row = reviews.map((item)=>{
             return <React.Fragment key={item['_id']}>
                   <tr>
                       <td>{item.name}</td>
                       <td>{item.subject}</td>
                       <td>{item.body}</td>
                       <td>{item.rating}</td>
                       <td>{item.date}</td>
                   </tr>
             </React.Fragment>
         })

        return(
            <Aux>
                <h3>{this.props.match.params.name}'s Reviews</h3>
                <Link to={`/addReviewForm/${this.state.id}`} className="btn btn-primary mb-3" style={{color:"white"}}>Add Review</Link>
                <Table>
                    <thead>
                        <tr>
                        <th>Reviewer's Name</th>
                        <th>Subject</th>
                        <th>Body</th>
                        <th>Rating</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </Table>
            </Aux>
        )
    }
}

export default AddReview