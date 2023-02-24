import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { Layout } from 'components/common/Layout';

import { RoutesList } from './routing/routes';

const App: React.FC = () => {

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
