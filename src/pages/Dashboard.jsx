import React, { useRef } from 'react';
import './Dashboard.css';
import cumple from '../img/caio.png';
import birthday from '../music/birthday.mp3';

const Dashboard = () => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.error('Autoplay bloqueado ou erro ao tocar áudio:', err);
      });
    }
  };

  return (
    <div className="dashboard-container">
      {/* Música de fundo */}
      <audio ref={audioRef} src={birthday} preload="auto" loop />

      <div className="dashboard-content">
        <img src={cumple} alt="Feliz Aniversário" className="birthday-img" />
        <h2> Parabéns, CAIO 🎉</h2>
        <p>  Que Deus realize seus sonhos, projetos e te encha de seu Amor.
             Que você cresça em graça e sabedoria.
             Que você espalhe o amor e a graça de Deus por onde vc for.
             Que vc seja muito Feliz. Deus te abençoe!
            </p>
        <button className="play-button" onClick={handlePlay}>🎵 Tocar música</button>
      </div>
    </div>
  );
};

export default Dashboard;