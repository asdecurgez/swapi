import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharacterItem from './CharacterItem';

const CharacterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CharacterListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results.slice(0, 10));
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <CharacterListContainer>
      {characters.length === 0 ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : (
        <CharacterListWrapper>
          {characters.map((character) => (
            <CharacterItem key={character.name} character={character} />
          ))}
        </CharacterListWrapper>
      )}
    </CharacterListContainer>
  );
};

export default CharacterList;
