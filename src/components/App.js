import React from 'react'
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage'
import About from './About'
import Gallery from './Gallery'
import Blog from './Blog'


const App = () => (
    <Router>
        <Switch>            
            <Route exact path="/" component={({ location }) => <HomePage pathName={location.pathname} /> }/>
            <Route path="/about" component={({ location }) => <About pathName={location.pathname} /> }/>
            <Route path="/gallery" component={({ location }) => <Gallery pathName={location.pathname} className='gallery' />} />
            <Route path="/blog"  component={({ location }) => <Blog pathName={location.pathname} /> }/>
        </Switch>
    </Router>
    
)

export default App