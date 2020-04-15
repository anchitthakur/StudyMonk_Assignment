import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav, NavBar} from "react-bootstrap";
import MovieComponent from "./components/MovieComponent";

import './App.css';
import NavBar from "./components/NavBar";

function App() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const [currPage, setCurrPage] = useState('now_playing');
    return (
        <>
            <NavBar setCurrPage={setCurrPage}/>
            <MovieComponent currPage={currPage}/>
        </>
    );
}

export default App;
