import React,{ Component } from "react";
import Aux from '../hoc/aux'
import axios from 'axios'
import Table from '../components/Table'
import Search from '../components/search'
import Sort from '../components/Sort'
import {Link} from 'react-router-dom'

class CompanyList extends Component {
    state = {
        companyList:[]
    }
    componentDidMount(){
        axios
         .get('/api/companies')
         .then(res=>{
             this.setState({
                 companyList:res.data
             })
         })
    }

    yahoo=(yes)=>{
      console.log(yes)
      this.setState({
          companyList:yes
      })
    }
  
    render(){
    //    console.log(this.state.companyList)
        return(
            <Aux>
                <Search data={this.state.companyList} return={this.yahoo}/>
                <Sort/>
               <Link className="btn btn-primary mb-3" style={{color:"white"}} to="/addCompany">Add Button</Link>
               <Table data={this.state.companyList}/>
            </Aux>
        )
    }
}


export default CompanyList