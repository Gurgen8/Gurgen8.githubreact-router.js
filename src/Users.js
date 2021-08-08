import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

function Users (props){

  

        return (
            <div> 
               <div><h1> id: {props.match.params.id}</h1>
               <h1> Name: {props.match.params.name}</h1>
               <h1>value:{props.match.params.pantone_value}</h1>
               <h1>year:{props.match.params.year}</h1>
              
               </div> 
            </div>
        )
    
}
  export default withRouter(Users);

