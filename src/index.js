import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { BrowserRouter as Router, Switch, Route,withRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Spinner from './component/Spinner'
import {createStore} from 'redux';
import {Provider,connect} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import firebase from './firebase';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import {setUser} from './action';
const store=createStore(rootReducer,composeWithDevTools());
class Root extends React.Component{
      componentDidMount(){
        console.log(this.props.isLoading);
        firebase.auth().onAuthStateChanged(user=>{
            if(user){    
               this.props.setUser(user);
               this.props.history.push("/");
            }
        })
      }
      render(){
        // this.props.isLoading?<Spinner />:
         return (
               <Switch>
                  <Route exact path="/" component={App} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
              </Switch>
        )
      }
   }
  const mapStateFromProps=state=>({
    isLoading:state.user.isLoading
  })
  const RootWithAuth=withRouter(
        connect(
             mapStateFromProps,
             {setUser}
        )(Root)
     );
   
  
ReactDOM.render(
<Provider store={store}>
    <Router>
        <RootWithAuth />
    </Router>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
