import React from "react";
import './App.css'
import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import {  Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Stats from "./Pages/Stats";
import Register from "./Pages/LoggedOut/Register";
import HomeScreen from "./Pages/LoggedOut/HomeScreen";
import Login from "./Pages/LoggedOut/Login";
import Catalog from "./Pages/LoggedOut/Catalog";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="stats/" element ={<Stats />} />
                <Route path="register/" element ={<Register />} />
                <Route path="login/" element ={<Login />} />
                <Route path="catalog/" element ={<Catalog />} />
                <Route path="/" element ={<HomeScreen />} />
            </Routes>
            
        </div>
    )
}

export default App