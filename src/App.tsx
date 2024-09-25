import React from 'react';
import './App.css';
import {Pages} from "ui/pages/pages";
import style from "styles/app.module.css"

function App() {
    return (
        <div className={style.appContainer}>
            <Pages/>
        </div>
    );
}

export default App;
