import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import usersList from './components/usersList'

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={usersList} />
    </div>
  )
}