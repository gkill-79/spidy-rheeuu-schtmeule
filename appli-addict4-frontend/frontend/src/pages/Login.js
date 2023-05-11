
// src/Login.js
import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

// Composant de connexion (formulaire) avec hooks et fonction fléchée (useState) et useContext (AuthContext)  (contexte d'authentification)  
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });

  // fonction de soumission du formulaire de connexion 
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(credentials);
  };
  
  // fonction de gestion des changements dans le formulaire de connexion
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // affichage du formulaire de connexion
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Identifiant :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* // affichage du mot de passe  (type="password")   */}


        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* // affichage de l'adresse email  (type="email")   */}
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

      {/* // affichage du lien de création de compte  (Link)   */}
      <p>
        Vous n'avez pas de compte ?{' '}
        <Link to="/signup" className="create-account">
          Créer un compte
        </Link>
      </p>
    </div>
  );
};

export default Login;














