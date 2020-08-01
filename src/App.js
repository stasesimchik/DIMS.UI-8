import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './common/Header/Header'; 
import Main from './common/Main/Main'; 
import Footer from './common/Footer/Footer';

function App() {
        return (
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        )
}

export default App;