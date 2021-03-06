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
import Researche3 from '../pages/Researches/Researche3';
import FinalChoice from '../pages/End/FinalChoice';
import Win from '../pages/End/Win';
import Defeat from '../pages/End/Defeat';
import Introduction from '../pages/Home/Introduction';
import Footer from '../components/footer/footer';

function App() {
  const [informations] = useState([
    {order:1, 
      texts:[
        "Agent 208, une série de braquages a eu lieu dans différents musées de Bordeaux.",
        "La Prochaine cible : Le Musée des Beaux-Arts",
        "Votre première mission si vous l’acceptez : Identifier l’oeuvre qui sera volée ce soir.",
        "L’agent 206 vous accompagnera tout au long de votre mission.",
        "Faites-vous discret, ne vous faites pas repérer."
      ],
      textButton:"J’ai compris",
    },
    {order:2, 
      texts:[
        "Tous les indices ont été trouvés ! Grâce à toi, on a déjà 2 lettres : le è et le v, et on sait que l’oeuvre représente une figure féminine.",
        "Selon mes sources son nom est composé de 3 lettres."
      ],
      textButton:"J'ai compris",
    },
  ])
  const [questions] = useState([
    {order:1, 
    texts:[
      "Ok, bien joué !",
      "Maintenant, il me faut une lettre qui se répète dans le nom et le prénom de l’artiste.",
      "Observe le panneau descriptif de l’oeuvre."
    ],
    answers:[
      {text:"A", correct:false},
      {text:"è", correct:true},
      {text:"U", correct:false}
    ]
    },
    {order:2, 
    texts:[
      "Génial !",
      "Pour cet indice, j’ai besoin de la première consonne qui apparaît dans le nom de l’oeuvre."
    ],
    answers:[
      {text:"G", correct:false},
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
        {text:"Img/assia.png", correct:false, alt:"Charles Despiau, Assia"},
        {text:"Img/femme-debout.png", correct:false, alt:"Henri Matisse, Femme debout (Etude pour Madeleine I)"},
        {text:"Img/eve.png", correct:true, alt:"Charles Despiau, Eve"}
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
      textButton:"Je suis devant le tableau",
      alt: "Eugène Carrière, Portrait de la dernière fille de l'artiste, Arsène."
    },
    {order:2, 
      texts:[
        "Ça me semble correct.",
        "Malheureusement, je n’ai que ça pour identifier la prochaine oeuvre.",
        "Elle devrait être dans la même salle. Observe autour de toi."
      ],
      urlImg: "Img/vierge.jpg",
      textButton:"Je suis devant l'oeuvre",
      alt:"Odilon Redon, Vierge."
    },
  ])
  const [audios] = useState([
    {screen: 1, url:'Audio/boss-1.mp3'},
    {screen: 2, url:'Audio/agent208-1.mp3'},
    {screen: 3, url:'Audio/agent208-2.mp3'},
    {screen: 4, url:'Audio/agent208-3.mp3'},
    {screen: 5, url:'Audio/agent208-4.mp3'},
    {screen: 6, url:'Audio/agent208-5.mp3'},
    {screen: 7, url:'Audio/agent208-6-1.mp3'},
    {screen: 8, url:'Audio/agent208-6-2.mp3'},
    {screen: 9, url:'Audio/agent208-7.mp3'},
    {screen: 10, url:'Audio/boss-3.mp3'},
    {screen: 11, url:'Audio/boss-2.mp3'}
  ])

  const [ending] = useState([
    {order: 1, 
    texts:[
      "Bien joué !",
      "Je pense que tu as trouvé l’oeuvre.",
      "La statue d’Eve est un chef d’oeuvre qui vaut des millions.",
      "Vole-la et on se partage les gains."
    ]},
    {order: 2, 
      texts:[
        "Félicitations Agent 208 !",
        "Vous avez passé avec succès le test. Il n’y a jamais eu de voleur, nous souhaitions tester votre fiabilité et votre honnêteté.",
        "Vous vous êtes placé en tant que défenseur de l’art.",
        "C’est avec plaisir que je vous annonce que vous avez été reçu.",
        "Bienvenue Agent 208 !"
    ]},
    {order: 3, 
      texts:[
        "Agent 208, vous avez échoué au test !",
        "Il n’y a jamais eu de voleur. Vous avez cédé à la tentation en privilégiant  l’argent à la culture.",
        "C’est avec dépit que je vous annonce que vous n’êtes pas reçu en tant qu’espion."
    ]}
  ])

  return (
    <Context.Provider value={{ informations, questions, researches, audios, ending }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/warning" element={<Warning/>} />
          <Route exact path="/introduction" element={<Introduction/>} />
          <Route exact path="/question" element={<Question1/>} />
          <Route exact path="/question2" element={<Question2/>} />
          <Route exact path="/question3" element={<Question3/>} />
          <Route exact path="/question4" element={<Question4/>} />
          <Route exact path="/researche" element={<Researche1/>} />
          <Route exact path="/researche2" element={<Researche2/>} />
          <Route exact path="/researche3" element={<Researche3/>} />
          <Route exact path="/finalchoice" element={<FinalChoice/>} />
          <Route exact path="/win" element={<Win/>} />
          <Route exact path="/lose" element={<Defeat/>} />
          <Route exact path="/credits" element={<Credits/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
