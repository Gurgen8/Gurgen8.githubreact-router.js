import React, { Component } from 'react';
import axios from 'axios';
import{ BrowserRouter,Link, Route,Router} from "react-router-dom"
import Users from "./Users"
import  "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data: [],
      loading:false,
      error: false,
    };
  }
 async componentDidMount() {
    this.fetchRequest()
  }


  fetchRequest = async () => {
   this.setState({ loading: true })
   const { data } = await axios.get(`https://reqres.in/api/unknown`).catch(e => {
     return {e}
   });
   this.setState({
     data:data?.data || [],
     loading: true,
     

   })
 }
  render() {
    const {data,loading,error}=this.state
    console.log(data)
   
    if (error || !data) {
      return (
        <div>
          <p> An invalid data... </p>
        </div>
      )
    }
    return (
         <> 
        <BrowserRouter >
        <div className="header">
        {data.map(user => (<Link className="link" to={'/user/' + user.id+"/"+user.name+"/"+user.pantone_value+"/"+user.year}> {user.name} </Link>)) }
        </div>
        <div className="info">
        <Route path="/user/:id/:name/:pantone_value/:year"> <Users className="user" />  </Route>   
        </div>
        </BrowserRouter>   
      </>
    );
  }
}

export default App;

