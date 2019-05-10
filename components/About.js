import React,{Component} from 'react'

class About extends Component{
    render(){

        return (
          <Navigation/>
          
           <Router>
             <h1>Welcome to About</h1>
             <Switch>
  
               <Route exact path="/navigation" render={UserComponent}/>
               <Route exact path="/stock" render={LoginComponent}/>
             </Switch>
           </Router>
          
        );
        }
    }
    export default About  