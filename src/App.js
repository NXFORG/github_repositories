import React from 'react';
import { Header } from './components';
import * as Pages from './Pages';
import './style.css';

const App = () => {
    return (
        <>
            <Header />
            <Pages.Home />
        </>
    )
}

export default App;