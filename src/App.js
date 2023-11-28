import React from 'react';
import './App.scss';
import Header from './Components/Header';
import HomeBanner from './Components/HomeBanner';
import Login from './Components/Login';
import Banner from './Components/Banner';
import List from './Components/List';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import{Originals,ComedyMovies,TrendingNow,TVshow ,horror,documenteries } from'./Components/urls'
function App() {
  return (
    <React.Fragment>
   
     <Router>
    <Routes>
      <Route path='/' element={
        <React.Fragment>
       <Header/> 
       <HomeBanner/>
       </React.Fragment>
      }  />
      <Route path='/login' element={
        <React.Fragment>
        <Header/>
        <Login/>
        </React.Fragment>
      } />
      <Route path='/register' element={
        <React.Fragment>
        <Header/>
        <Login />
        </React.Fragment>
      } />
        <Route path='/dashboard' element={
          <React.Fragment>
        <Header/>
        <Banner/>
        <List url={TrendingNow} title="Netflix Originals" param="originals"/>
              <List url={Originals} title="Trending Now" param="trending"/>
              <List url={ComedyMovies} title="Now Playing" param="now_playing"/>
              <List url={TVshow} title="Tv Series" param="top_rated"/>
              <List url={horror} title="Horror" param="popular"/>
              <List url={documenteries } title="Romance " param="romance"/>
        </React.Fragment>
      } />
    </Routes>

     </Router>
    
    </React.Fragment>
  );
}

export default App;
