import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav, NavBar} from "react-bootstrap";
import MovieComponent from "./components/MovieComponent";

import './App.css';
import NavBar from "./components/NavBar";

function App() {
    const [currPage, setCurrPage] = useState('now_playing');
    return (
        <>
            <NavBar setCurrPage={setCurrPage}/>
            <MovieComponent currPage={currPage}/>
        </>
    );
}

export default App;
