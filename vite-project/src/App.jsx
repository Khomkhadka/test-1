// src/App.jsx
import React from 'react';
import NavBar from './NavBar.jsx';
import Body from './Body.jsx';
import Body2 from './Body2.jsx';
function App() {
  return (
    <div>
      <NavBar />
      <Body/>
      <Body2/>
        
      {/* <div id="home" style={{ padding: '50px', backgroundColor: '#f0f0f0' }}>
        <h1>Home Section</h1>
      </div> */}
      {/* <div id="contact" style={{ padding: '50px', backgroundColor: '#e0e0e0' }}>
        <h1>Contact Section</h1>
      </div>
      <div id="aboutus" style={{ padding: '50px', backgroundColor: '#d0d0d0' }}>
        <h1>About Us Section</h1>
      </div> */}
    </div>  
  );
}

export default App;
