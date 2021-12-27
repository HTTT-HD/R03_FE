import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { RouterComponent } from "./router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/pages/login';
import { UserRolesContext, useUserRolesContext } from './authenticationContext';

function App() {

  const userRolesContext = useUserRolesContext();

  return (
    <UserRolesContext.Provider value={userRolesContext}>
      <RouterComponent />
    </UserRolesContext.Provider>
  );
}

export default App;
