
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Catalog from './Components/Catalog';
import CreateResource from './Components/CreateResource';
import SavedItems from './Components/SavedItems';
import LandingPage from './Components/LandingPage';

function App() {
  const [page, setPage] = useState("/")

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      <NavBar onChangePage={setPage}/>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/createresource">
          <CreateResource />
        </Route>
        <Route path="/saveditems">
          <SavedItems/>
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
