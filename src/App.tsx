import React from 'react';
import './App.css';

function hello() {
  debugger
  alert('Hello IT-KAMASUTRA')
}

// hello()


// function declaration
function App() {
  debugger
  // полезное что-то
  // обязана вернуть JSX
  return (
      <div className="App">
        This APP component
        <Rating/>
        <Accourdion/>
      </div>
  );
}

function Rating() {
  debugger
  return (
      <div>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
      </div>
  )
}

function Accourdion() {
  debugger
  return (
      <div>
        <h3>Меню</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
  )
}

function Star() {
  return (
      <div>
        <div>Star</div>
      </div>
  )
}

export default App;