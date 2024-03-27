import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"
import Form from './components/forms/Form1';
import Form2 from './components/forms/Form2';
import Form3 from './components/forms/Form3';
import FunFactsReact from './components/FunFacts/FunFact';
import Tenzie from './components/Game/Tenzie';
import QuizApp from './components/QuizGame/QuizApp';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>

    <QuizApp /> <br/><br/><br/>
    <Tenzie />
    <FunFactsReact /><br/>
    <Form3 /><br/> 
    <Form2 /><br/>
    <Form />
    <App />
  </div>
);
