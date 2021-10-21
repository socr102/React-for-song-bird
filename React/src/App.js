import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Login from './components/Login';
import Dj from './components/Dj';
import CreateDj from './components/CreateDj';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Notification from './components/Notification';
import Gallery from './components/Gallery';
import PageMenu from './components/PageMenu.js';
import AllDjList from './components/AllDjList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dj">
            <Dj />
          </Route>
          <Route path="/create-dj">
            <CreateDj />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/page-menu">
            <PageMenu />
          </Route>
          <Route path="/all-dj-list">
            <AllDjList />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
