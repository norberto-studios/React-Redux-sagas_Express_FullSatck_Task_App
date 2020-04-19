import React from "react";
import { connect } from "react-redux";
import * as mutations from '../redux/actions/actions';

const LoginComponent = ({authenticateUser, authenticated}) => (
  <div>
   <h2>Login Page</h2>
   {authenticated === mutations.NOT_AUTHENTICATED ? <p>Wrong Login Credentials</p>:''}
   <br/>
   <form onSubmit={authenticateUser}>
     <input type="text" placeholder="username" defaultValue="Dev" name="username" id=""/>
     <br/>
     <br/>
     <input type="password" placeholder="password" defaultValue="" name="password" id=""/>
     <br/>
     <br/>
     <button type="submit">Login</button>
   </form>
  </div>
);

const mapStateToProps = ({session}) => ({
  authenticated: session.authenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    authenticateUser(e){
      e.preventDefault();
      let username = e.target['username'].value;
      let password = e.target['password'].value;
      dispatch(mutations.requestAuthUser(username,password))
    }
  });

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
