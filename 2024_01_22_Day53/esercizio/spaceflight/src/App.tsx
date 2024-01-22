import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainSearch from "./pages/MainSearch"
import ArticleDetail from "./pages/ArticleDetail"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainSearch/>}/>
            <Route path="/:id" element={<ArticleDetail/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
