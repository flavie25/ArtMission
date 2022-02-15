import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Warning from 'pages/Warning';
import Question1 from '../pages/Questions/Question1';

import Context from '../contexts/AppContext';
import Question2 from '../pages/Questions/Question2';
import Question3 from '../pages/Questions/Question3';
import Researche1 from '../pages/Researches/Researche1';
import Credits from '../pages/credits/Credits';
import Researche2 from '../pages/Researches/Researche2';
import Question4 from '../pages/Questions/Question4';

function App() {
  const [questions] = useState([
    {order:1, 
    texts:[
      "Ok, bien joué !",
      "Maintenant, il me faut une lettre qui se répète dans le nom et le prénom de l’artiste.",
      "Observe le panneau descriptif de l’oeuvre."
    ],
    answers:[
      {text:"A", correct:false},
      {text:"E", correct:true},
      {text:"U", correct:false}
    ]
    },
    {order:2, 
      texts:[
        "Génial !",
        "Pour cet indice, j’ai besoin de la première consonne qui apparaît dans le nom de l’oeuvre."
      ],
      answers:[
        {text:"A", correct:false},
        {text:"R", correct:false},
        {text:"V", correct:true}
      ]
      },
      {order:3, 
        texts:[
          "Super, on y est presque.",
          "Autour de toi il doit y avoir une statue portant une armure. J’ai besoin de son nom."
        ],
        answers:[
          {text:"Jeanne d’Arc", correct:true},
          {text:"Buste de Jane de Poupelet", correct:false},
          {text:"Femme debout", correct:false}
        ]
        },
        {order:4, 
          texts:[
            "Selon toi, quelle est la prochaine oeuvre qui va être volée ?"
          ],
          answers:[
            {text:"Img/assia.png", correct:false},
            {text:"Img/femme-debout.png", correct:false},
            {text:"Img/eve.png", correct:true}
          ]
          }
  ])
  const [researches] = useState([
    {order:1, 
      texts:[
        "Agent 206 à l’appareil.",
        "Le voleur a laissé des indices, rendez-vous devant ce tableau;"
      ],
      urlImg: "Img/eugene-carriere.jpg",
      textButton:"Je suis devant le tableau"
    },
    {order:2, 
      texts:[
        "Ça me semble correct.",
        "Malheureusement, je n’ai que ça pour identifier la prochaine oeuvre.",
        "Elle devrait être dans la même salle. Observe autour de toi."
      ],
      urlImg: "Img/vierge.jpg",
      textButton:"Je suis devant l'oeuvre"
    },
    {order:3, 
      texts:[
        "Tous les indices ont été trouvés ! Grâce à toi, on a déjà 2 lettres : le è et le v, et on sait que l’oeuvre représente une figure féminine.",
        "Selon mes sources son nom est composé de 3 lettres."
      ],
      urlImg: "",
      textButton:"J'ai compris"
    },
  ])
  const [audios] = useState([
    {screen: 1, url:'Audio/boss-1.mp3'},
    {screen: 2, url:'Audio/agent208-1.mp3'},
    {screen: 3, url:'Audio/agent208-2.mp3'},
    {screen: 4, url:'Audio/agent208-3.mp3'},
    {screen: 5, url:'Audio/agent208-4.mp3'},
    {screen: 6, url:'Audio/agent208-5.mp3'},
    {screen: 7, url:'Audio/agent208-6.mp3'},
    {screen: 8, url:'Audio/agent208-7.mp3'},
    {screen: 9, url:'Audio/boss-2.mp3'},
    {screen: 10, url:'Audio/boss-3.mp3'}
  ])
  return (
    <Context.Provider value={{ questions, researches, audios }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/warning" element={<Warning/>} />
          <Route exact path="/question" element={<Question1/>} />
          <Route exact path="/question2" element={<Question2/>} />
          <Route exact path="/question3" element={<Question3/>} />
          <Route exact path="/question4" element={<Question4/>} />
          <Route exact path="/researche" element={<Researche1/>} />
          <Route exact path="/researche2" element={<Researche2/>} />
          <Route exact path="/credits" element={<Credits/>} />
       
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
