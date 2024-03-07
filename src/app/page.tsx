"use client";

import React, { useEffect, useState } from 'react';
import { Character } from '@/queries/characters/types';
import { getCharacters } from '@/queries/characters';
import { Heading } from '@/components/atoms';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };
    fetchData();
  }, []);

  fetch('https://swapi.dev/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));


  return (
    <main>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character: Character) => (
          <li key={character.name}><Heading as='h1'>{character.name}</Heading></li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
