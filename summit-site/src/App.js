import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Titles from './Titles';

function App() {
  const appStyle = {
    backgroundColor: '#253D88', 
    color: '#fff', 
    minHeight: '100vh', // Ensures the content takes at least the height of the viewport
  };

  return (
    <div style={appStyle}>
      <Header />
      <Titles />
      <MainSection />
    </div>
  );
}

export default App;