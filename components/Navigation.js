import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div>
                <img src=""/>
         <h1>Welcome from Navigation</h1> 
          
         <Link to="/About">Got to login</Link>  
         <Link to="/Stock">Got to login</Link>  
  
         </div>
        )
    }
    }
    export default Navigation  
}