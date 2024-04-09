import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';

const ColorContext = createContext();
const ColorProvider = ({ children }) => {
  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return <ColorContext.Provider value={{ getRandomColor }}>{children}</ColorContext.Provider>;
};

const useColorContext = () => useContext(ColorContext);

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  const { getRandomColor } = useColorContext();

  useEffect(() => {
    const updateColor = () => {

      const colors = ['blue', 'red', 'green', 'yellow', 'purple'];
      const randomColor = getRandomColor(colors);
      setColor(randomColor);
    };
    updateColor();
  }, [count, getRandomColor]);

  return (
    <>
      <div id='caja-logo-ipf'>
        <img src="../logo.png" alt="" />
      </div>
      <h1>TP1 - React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} style={{ color: color }}>
          count is {count}
        </button>
      </div>
    </>
  );
}
const AppWithContext = () => (
  <ColorProvider>
    <App />
  </ColorProvider>
);

export default AppWithContext;
