import React from 'react';
import { Header } from './components';
import * as Pages from './Pages';

const App = () => {
    return (
        <>
            <Header />
            <Pages.Home />
        </>
    )
}

export default App;