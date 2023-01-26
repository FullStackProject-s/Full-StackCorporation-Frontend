import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'

import { useAppDispatch } from 'redux/store';
import { checkAuth } from 'redux/auth/asyncActions';

import { Layout } from 'components/common/Layout';

import { RoutesList } from './routing/routes';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element = {<Layout/>}
      >
      {RoutesList.map((obj, index) => (
        <Route key={index} {...obj} />
      ))}
      </Route>
    </Routes>
  );
}

export default App;
