import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import HomeAboutUs from './components/HomeAboutUs';
import PageAboutUs from './pages/AboutUs';
import ReqDonation from './components/ReqDonation';
import InfoDonasi from './components/InfoDonasi';
import Berita from './components/News';
import DonationArticle from './pages/AllDonation/InfoDonation';
import NewsArticle from './pages/AllNews/News';
import {FooterContainer} from './containers/Footer';
import TableComponent from './components/Table';
import Education from './components/Education'
import SinglePost from './components/SinglePost';
import EducationPage from './pages/AllEducation/Education';
import DetailDonasi from './components/PageDetailDonasi';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Hero />
          <TableComponent />
          <InfoDonasi/>
          <Berita/>
          <Education />
          <HomeAboutUs />
        </Route>
        <Route exact path="/post/:id" component={SinglePost} />
        <Route path='/AllEducation'>
          <EducationPage/>
        </Route>
        <Route path='/AllNews'>
          <NewsArticle/>
        </Route>
        <Route path='/PageDetailDonasi'>
          <DetailDonasi />
        </Route>
        <Route path='/ReqDonation'>
          <ReqDonation />
        </Route>
        <Route path='/PageAboutUs'>
          <PageAboutUs />
        </Route>
        <Route path='/AllDonationPage'>
          <DonationArticle />
        </Route>
        <Redirect to="/" />
      </Switch>
      <FooterContainer />
    </Router>
  )
}

export default App;