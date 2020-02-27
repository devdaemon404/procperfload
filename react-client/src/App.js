import React, { useEffect, useState } from 'react';
import './App.css';
import socket from './utilities/socketConnection';
const App = () => {
  const [performanceData, setPerformanceData] = useState({});
  useEffect(() => {
    socket.on('data', (data) => {
      setPerformanceData(data)
    });
  }, []);
  console.log(performanceData)
  return (
    <div className="App">
      <header className="App-header">
        Sanity check!
      </header>
    </div>
  );
}

export default App;
