import React,{Component} from 'react'

class Stock extends Component{
    render(){

        return (
          <Navigation/>
          
           <Router>
             <h1>Welcome to Stock</h1>
             <Switch>
               <Route exact path="/about" component={About}/>
               <Route exact path="/navigation" render={UserComponent}/>
               
             </Switch>
           </Router>
          
        );
        }
    }
    export default Stock  
