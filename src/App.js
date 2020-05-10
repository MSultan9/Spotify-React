import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ArtistsPage from './pages/artists-page/artists-page.component';
import AlbumsPage from './pages/albums-page/albums-page.component'

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/artists" component={ArtistsPage} />
          <Route path="/artists/:id" component={AlbumsPage} />
          <Route path="*" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
