import React from 'react';
import { Router, Route } from 'react-router-dom'; 
import TodoCreate from './todos/TodoCreate';
import TodoDelete from './todos/TodoDelete';
import TodoEdit from './todos/TodoEdit';
import TodoList from './todos/TodoList';
import Header from './Header'
import GoogleAuth from './GoogleAuth';
import history from '../history';
import './App.css'

const App = () => {
  return ( 
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>  
          <Route path="/" exact component={TodoList} />
          <Route path="/todos/new" exact component={TodoCreate} />
          <Route path="/todos/edit/:id" exact component={TodoEdit} />
          <Route path="/todos/delete" exact component={TodoDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;