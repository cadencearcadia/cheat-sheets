import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PythonCheatSheet from './components/PythonCheatSheet';
import JavaScriptCheatSheet from './components/JavaScriptCheatSheet';
import ReactCheatSheet from './components/ReactCheatSheet';
import MongoMacCheatSheet from './components/MongoMacCheatSheet';
import ThreeJSCheatSheet from './components/ThreeJSCheatSheet';
import NextJSCheatSheet from './components/NextJSCheatSheet';
import NodeJSCheatSheet from './components/NodeJSCheatSheet';
import GitCheatSheet from './components/GitCheatSheet';
import VimCheatSheet from './components/VimCheatSheet';
import DjangoCheatSheet from './components/DjangoCheatSheet';
import ReactLibrariesCheatSheet from './components/ReactLibrariesCheatSheet';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<PythonCheatSheet />} />
          <Route path="/javascript" element={<JavaScriptCheatSheet />} />
          <Route path="/react" element={<ReactCheatSheet />} />
          <Route path="/reactlibraries" element={<ReactLibrariesCheatSheet />} />
          <Route path="/mongodb-mac" element={<MongoMacCheatSheet />} />
          <Route path="/threejs-mac" element={<ThreeJSCheatSheet />} />
          <Route path="/nextjs" element={<NextJSCheatSheet />} />
          <Route path="/nodejs" element={<NodeJSCheatSheet />} />
          <Route path="/git" element={<GitCheatSheet />} />
          <Route path="/vim" element={<VimCheatSheet />} />
          <Route path="/django" element={<DjangoCheatSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
