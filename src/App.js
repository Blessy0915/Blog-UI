import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import Users from './components/Users'
import UserPost from './components/UserPost'
import Posts from './components/Posts'
import PostShow from './components/PostShow'



function App() {
  return (
    <BrowserRouter>
        <div className = "container-fullwidth">
        <nav className ="navbar navbar-expand-md navbar-dark bg-dark navbar-custom ">
        <Link to="/" className="navbar-brand-mb-0 h4"><img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>Blog UI</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul className="nav justify-content-end">
              <li className="navbar-nav">
                  <Link className="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link active" to="/users"> Users <span class="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link active" to="/posts"> Posts <span class="sr-only">(current)</span></Link>
              </li>
        </ul>
</nav>
 <br/>
 <br/>
 </div>





        <div>
          
          <Route path = "/" component = {Home} exact = {true}/>
          <Route path = "/users" component = {Users} exact = {true}/>
          <Route path = "/posts" component = {Posts} exact = {true}/>
          <Route path = "/users/:id" component = {UserPost}/>
          <Route path = "/posts/:id" component = {PostShow}/>
          
          
          
        </div>
    </BrowserRouter>
  );
}

export default App;
