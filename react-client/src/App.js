import React, { useEffect, useState } from 'react';
import './App.css';
import socket from './utilities/socketConnection';
import Widget from './components/Widget';

const App = () => {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    socket.on('data', (data) => {
      const currentState = ({ ...performanceData });
      currentState[data.macA] = data;
      setPerformanceData(currentState)
    });
  }, []);
  let widget = [];
  Object.entries(performanceData).forEach(([key, value]) => {
    widget.push(<Widget key={key} data={value} />)
  })
  return (
    <div className="App">
      {widget}
    </div>
  );
}

export default App;
