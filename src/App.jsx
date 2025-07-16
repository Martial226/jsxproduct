import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './components/Name.jsx';
import Price from './components/Price.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';
import profilImage from './assets/casque.jpg';

const prenom = "Martial";

function App() {
  return (
    <div className="container mt-5">
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="text-center mt-4">
        <h4>{prenom ? `Bonjour, ${prenom} !` : "Bonjour !"}</h4>
        {prenom && (
          <img
            src={profilImage}
            alt="profil"
            style={{ borderRadius: "50%", marginTop: "10px", width: "100px", height: "100px" }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
