import React from 'react';
import { MainNavConnectedComponent } from './HOC/Shared/MainNav';
import MainContainer from './components/MainContainer';
import NotificationContainer from './HOC/Shared/NotificationContainer';
import './App.css';

const App = () => (
    <div className="App main-container">
        <NotificationContainer props />
        <MainNavConnectedComponent />
        <MainContainer />
    </div>
);

export default App;
