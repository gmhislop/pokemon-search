
import { client } from '@/services/graphql';
import { GET_CHARACTERS } from './graphql';

export const getCharacters = async () => {
  try {
    const { data } = await client.query({
      query: GET_CHARACTERS 
    });
    return data.allPeople.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters');
  }
};
