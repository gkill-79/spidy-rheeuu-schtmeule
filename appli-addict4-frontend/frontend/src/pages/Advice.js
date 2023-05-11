
import React from "react";
import "./Advice.css";

const Advice = () => {
  return (
    <>
      <h1>Conseils personnalisés</h1>
      <div className="container">
        <div className="advice-box" style={{ backgroundColor: "#ffd6a5" }}>
          <h2>Conseil 1</h2>
          <p>Voici un conseil personnalisé pour vous aider à surmonter vos défis.</p>
        </div>
        <div className="advice-box" style={{ backgroundColor: "#caffbf" }}>
          <h2>Conseil 2</h2>
          <p>Essayez cette technique pour améliorer votre quotidien et vous sentir mieux.</p>
        </div>
        <div className="advice-box" style={{ backgroundColor: "#9bf6ff" }}>
          <h2>Conseil 3</h2>
          <p>Voici une astuce pour vous aider à atteindre vos objectifs plus rapidement.</p>
        </div>
        <div className="advice-box" style={{ backgroundColor: "#a0c4ff" }}>
          <h2>Conseil 4</h2>
          <p>Découvrez cette méthode pour améliorer votre bien-être et votre santé.</p>
        </div>
      </div>
    </>
  );
};

export default Advice;























