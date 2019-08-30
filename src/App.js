import React from 'react';

import HighlightedCode from './HighlightedCode';
import './App.css';

function App() {
  const code =
`/**
*  Hello!
*  Welcome to my site! 👋
*
*  Hope you can read code. 💻
*
*  http://www.germanrdz.com | 2019
*/

import React from 'react';

const printGmail = username => \`\${username}@gmail.com\`;

const GermanRodriguez = () => (
  <>
    <h1>Germán Rodríguez</h1>
    <p className="lead">Senior Front End Developer</p>
    <p>
      <strong>Email:</strong> {printGmail(germanson)} <br />
      <strong>Location:</strong> Hermosillo, Sonora, Mexico. <br />
      <strong>Phone:</strong> Ask via email. <br />
    </p>

    <hr />

    <ul id="primary-skills">
      {
        [
          'Javascript',
          'React',
          'Node',
          'Ruby on Rails',
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
          },
          {
            site: 'Twitter',
            url: 'https://twitter.com/GerManson',
          },
          {
            site: 'Instagram',
            url: 'https://www.instagram.com/germanson/',
          },
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
