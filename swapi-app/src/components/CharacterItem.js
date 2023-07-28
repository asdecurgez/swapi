import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

const CharacterCard = styled.li`
background-color: #1b1b1b;
padding: 20px;
border-radius: 5px;
margin-bottom: 10px;
color: #f1f1f1;
font-family: 'Arial', sans-serif;

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin: 5px 0;
}

button {
  background-color: #ff9800;
  color: #1b1b1b;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffab40;
  }
}


  .character-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CharacterItem = ({ character }) => {
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    fetchCharacterImage();
  }, []);

  const fetchCharacterImage = async () => {
    try {
      const response = await axios.get(character.url);
      const characterData = response.data;

      // Obtenemos la URL de la imagen del personaje
      const characterImageUrl = `https://starwars-visualguide.com/assets/img/characters/${getCharacterId(
        characterData.url
      )}.jpg`;

      setCharacterImage(characterImageUrl);
    } catch (error) {
      console.error('Error fetching character image:', error);
    }
  };

  // Función para obtener el ID del personaje desde su URL
  const getCharacterId = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  return (
    <CharacterCard>
      <div className="character-image">
        {characterImage && <img src={characterImage} alt={character.name} />}
      </div>
      <h3>{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height}</p>
      <button onClick={() => console.log('Personaje eliminado:', character.name)}>
        Eliminar
      </button>
    </CharacterCard>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterItem;

