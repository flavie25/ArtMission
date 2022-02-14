import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Warning from 'pages/Warning';
import Question1 from '../pages/Question1/Question1';

import Context from '../contexts/AppContext';

function App() {
  const [questions] = useState([
    {order:1, 
    texts:[
      <p>Ok, bien joué !</p>,
      <p>Maintenant, il me faut une lettre qui se répète dans le nom et le prénom de l’artiste.</p>,
      <p>Observe le panneau descriptif de l’oeuvre.</p>
    ],
    answers:[
      {text:"A", correct:false},
      {text:"E", correct:true},
      {text:"U", correct:false}
    ]
    },
    {order:2, 
      texts:[
        <p>Génial !</p>,
        <p>Pour cet indice, j’ai besoin de la première consonne qui apparaît dans le nom de l’oeuvre.</p>
      ],
      answers:[
        {text:"A", correct:false},
        {text:"R", correct:false},
        {text:"V", correct:true}
      ]
      },
      {order:3, 
        texts:[
          <p>Super, on y est presque.</p>,
          <p>Autour de toi il doit y avoir une statue portant une armure. J’ai besoin de son nom.</p>
        ],
        answers:[
          {text:"Jeanne d’Arc", correct:true},
          {text:"Buste de Jane de Poupelet", correct:false},
          {text:"Femme debout", correct:false}
        ]
        }
  ])
  const [researches] = useState([
    {order:1, 
      texts:[
        <p>Agent 206 à l’appareil.</p>,
        <p>Le voleur a laissé des indices, rendez-vous devant ce tableau;</p>
      ],
      urlImg: "",
      textButton:"Je suis devant le tableau"
    },
    {order:2, 
      texts:[
        <p>Ça me semble correct.</p>,
        <p>Malheureusement, je n’ai que ça pour identifier la prochaine oeuvre.</p>,
        <p>Elle devrait être dans la même salle. Observe autour de toi.</p>
      ],
      urlImg: "",
      textButton:"Je suis devant l'oeuvre'"
    },
  ])
  return (
    <Context.Provider value={{ questions, researches }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/warning" element={<Warning/>} />
          <Route exact path="/question" element={<Question1/>} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
