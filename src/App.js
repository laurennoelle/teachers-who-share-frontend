
import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Catalog from './Components/Catalog';
import CreateResource from './Components/CreateResource';
import SavedItems from './Components/SavedItems';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import CardDetails from './Components/CardDetails';
import About from './Components/About';
import Footer from './Components/Footer';

const API = ("http://localhost:3000/resources")


function App() {
  // const [page, setPage] = useState("/")
  const [resources, setResources] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setResources)
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LandingPage />
        </Route>
        <Route path="/home">
          <NavBar/>
          <Home />
          <Footer />
        </Route>
        <Route path="/catalog">
        <NavBar />
          <Catalog resources={resources}/>
          {/* <Footer /> */}
        </Route>
        <Route exact path="/resources/:id">
          <CardDetails />
          <Footer />
        </Route>
        <Route path="/shareresource">
          <NavBar/>
          <CreateResource />
          <Footer/>
        </Route>
        <Route path="/saveditems">
          <NavBar/>
          <SavedItems/>
          <Footer />
        </Route>
        <Route path="/about">
          <NavBar/>
          <About/>
          <Footer />
        </Route>
        {/* <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
        <Route path="/">
          <Home/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
