import React from 'react';
import './App.scss';
import Navbar from './components/shared/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import MemberDetail from './components/MemberDetail/MemberDetail';
import Footer from './components/shared/Footer/Footer';
import TestMe from './components/TestMe/TestMe';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import CoolSitesPage from './pages/CoolSitesPage/CoolSitesPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="app-container">
        <Switch>
          <Route path="/exercises" component={props => <CoolSitesPage {...props}/>}  />
          <Route path="/gallery" component={props => <GalleryPage {...props}/>}  />
          <Route path="/test-me" component={props => <TestMe {...props}/>}  />
          <Route path="/solar-system-member/:id" component={props => <MemberDetail {...props}/>}  />
          <Route path="/" component={props => <HomePage/>}  />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
