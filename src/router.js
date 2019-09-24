import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './login';
import Main from './main'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
                <div className="container">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Login}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/main" component={Main}></Route>
                        </Switch>
                    </BrowserRouter>
                </div>
        );
    }
    
}


    const mapStateToProps = (state)=>{
        return {
        }
    };
    const mapDispatchToProps = (dispatch)=>{
        return {
        }
    };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)