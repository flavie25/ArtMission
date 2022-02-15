import React from 'react';
import { Link } from 'react-router-dom';
import style from './credits.module.css'

const credits = () => {
  return (
    <div className={style.credit}>
      <h1>Merci d’avoir testé l’expérience ART’MISSION !</h1>
      <div className={style.createurs}>
        <p>Créateurs</p>
        <ul>
          <li>Alyssa GOUPY</li>
          <li>Florentin SENDRA</li>
          <li>Flavie DUSSAILLANT</li>
          <li>Matéo SIMONNET</li>
          <li>Guillaume MENGELATTE</li>
          <li>Henry REVEILLER-GUILLON</li>
        </ul>
      </div>
      <div className={style.remerciments}>
        <p>Remerciements</p>
        <ul>
          <li>Musée des Beaux-Arts de Bordeaux</li>
          <li>Alexis Benoit</li>
          <li>Bastien De l’Hermitte</li>
          <li>Benjamin Hoguet</li>
          <li>Thibaut Charron</li>
          <li>Clement Casanas</li>
          <li>Oscar Motta</li>
          <li>Jean-Pierre Salmon</li>
          <li>Sarah Choux</li>
        </ul>
      </div>
      <Link to="/">recommencer l'expérience</Link>
    </div>
  );
};

export default credits;