import React,{Component} from 'react'
import Navigation from './components/Navigation';
class App extends Component {
    state ={
      accountBalance:99,
      currentUser:{
        userNme: "Stan",
        memberSince: "08/23/99"
      }
  }
  render(){

    return (
      <Navigation/>

       <Router>
         <h1>Welcome to Dashboard</h1>
         <Switch>
           <Route exact path="/about" component={About}/>
           <Route exact path="/navigation" render={UserComponent}/>
           <Route exact path="/stock" render={LoginComponent}/>
         </Switch>
       </Router>
      
    );
    }
  
  }
    export default Dashboard  
