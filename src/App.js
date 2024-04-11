import React from "react";

import HighlightedCode from "./HighlightedCode";
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
    <p className="lead">Engineering Manager with a strong background on front end development</p>

    <quote>
      <strong>Email:</strong> {printMail('germanson')}
      <strong>Location:</strong> Hermosillo, Sonora, México.
      <strong>Phone:</strong> Ask via email.
    </quote>

    <ul id="hard-skills">
      {
        [
          'Javascript',
          'React',
          'Node',
          'Ruby on Rails',
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
      <HighlightedCode code={code} />
    </div>
  );
}

export default App;
