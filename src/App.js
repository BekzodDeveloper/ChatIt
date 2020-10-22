import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <Content/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}

export default App;
