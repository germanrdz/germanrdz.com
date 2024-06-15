import React from "react";

import HighlightedCode from "./HighlightedCode";
import { Wrapper } from "./styles";
import "./App.css";

function App() {
  const code = `/**
*  Hello! Welcome to my site! 👋
*  Hope you can read code. 💻
*
*  http://www.germanrdz.com | 2024
*/

import React from 'react';

const printMail = username => \`\${username}@gmail.com\`;

const GermanRodriguez = () => (
  <>
    <h1>Germán Rodríguez</h1>
    <p className="lead">
      Engineering Manager with a
      robust front-end development background
    </p>

    <quote>
      <strong>Email:</strong> {printMail('germanson')}
      <strong>Location:</strong> Hermosillo, Sonora, México.
      <strong>Phone:</strong> Ask via email.
    </quote>

    <ul id="hard-skills">
      {
        [
          'Javascript, Node & React',
          'Ruby & Ruby on Rails',
          'iOS & Android development',
        ].map((skill, i) => <li key={i}>{skill}</li>)
      }
    </ul>


    <ul id="soft-skills">
    {
      [
        'Team lead',
        'Agile mindset',
        'Startup lover',
        'English / Spanish',
      ].map((skill, i) => <li key={i}>{skill}</li>)
    }
    </ul>

    <ul id="links">
      {
        [
          {
            site: 'Github',
            url: 'https://github.com/germanson',
          },
          {
            site: 'Linked In',
            url: 'https://www.linkedin.com/in/germanson/',
          }
        ].map((link, i) => (
          <li key={i}>
            <a href={link.url}>{link.site}</a>
          </li>
        ))
      }
    </ul>
  </>
);

export default GermanRodriguez;
  `;

  return (
    <div className="App">
      <Wrapper>
        <img
          className="avatar"
          width="160"
          src="https://ca.slack-edge.com/T04MHFR0T-U042F0M5R62-2712851a18b6-512"
          alt="German"
        />
        <HighlightedCode code={code} />
        🦇
      </Wrapper>
    </div>
  );
}

export default App;
