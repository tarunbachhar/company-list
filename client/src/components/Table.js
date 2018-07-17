import React from 'react'
import {Table} from 'reactstrap'
import {Link} from 'react-router-dom'


const table =(props)=>{
    let company =props.data
    let row = company.map((item)=>{
        let avg
        function average(){
        let re1 = item.reviews
        let count =0;
        re1.forEach((rating,index,arr)=>{
            count = count+ rating.rating
            avg  = count/arr.length;
        })
        return avg.toFixed(2)
        }
        // console.log(item["_id"])
        return <React.Fragment key={item._id}>
               <tr>
                   <td>{item.name}</td>
                   <td>{item.reviews.length===0 ? 0 : item.reviews.length}</td>
                   <td>{item.location}</td>
                   <td>{item.reviews.length===0 ? 0 : average()}</td>
                   <td>{item.date}</td>
                   <td><Link className="btn btn-outline-success" 
                   to={`/addReview/${item["_id"]}/${item.name}`}>Write Review</Link></td>
               </tr>
        </React.Fragment>
    })
    return (
        <Table striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of Reviews</th>
                    <th>Location</th>
                    <th>Average Rating</th>
                    <th>Date</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
        </Table>
    )
}

export default table