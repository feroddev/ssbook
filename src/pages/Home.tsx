/* eslint-disable react/jsx-max-depth */
import { useQuery } from 'react-query';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { HomeData } from '../types/home';
import * as Style from '../style/StyledHome';
import '../App.css';
import FavoritesAuthor from '../components/FavoritesAuthors';
import Library from '../components/Library';
import FavoriteBooks from '../components/FavoriteBooks';
import NavBar from '../components/NavBar';

const apolloClient = new ApolloClient({
  uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  cache: new InMemoryCache(),
});

const GET_DATA = gql`
query {
  userPicture
  favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
  favoriteAuthors {
    id
    name
    picture
    booksCount
  }
    allBooks {
      id
      name
      author {
        id
        name
      }
      cover
      category
    }
}
`;

type HomeDataQuery = {
  data: HomeData | undefined,
  isLoading: boolean,
};

function Home() {
  const { data, isLoading }: HomeDataQuery = useQuery('myData', async () => {
    const response = await apolloClient.query({ query: GET_DATA });
    return response.data;
  });

  const [bodyHeight, setBodyHeight] = useState('100vh');

  useEffect(() => {
    setBodyHeight(`${document.body.clientHeight}px`);
  }, [data]);

  if (isLoading) return <Style.Loading>Carregando...</Style.Loading>;

  const { userPicture, favoriteBooks, favoriteAuthors, allBooks } = data as HomeData;
  if (!favoriteBooks || !favoriteAuthors || !allBooks) return <p>Aguarde</p>;

  const categoriesList = [...new Set(allBooks.map((book) => book.category))];

  return (
    <Style.Container>
      {favoriteBooks && favoriteAuthors && (
        <>
          <Style.TopBar />
          <Header profileImage={ userPicture } />
          <NavBar />
          <Style.Main>
            <Style.FavoriteBooks>
              <FavoriteBooks favoriteBooks={ favoriteBooks } />
            </Style.FavoriteBooks>
            <Style.Wrapper>
              <FavoritesAuthor favoriteAuthors={ favoriteAuthors } />
              <Library
                categoriesList={ categoriesList }
                allBooks={ allBooks }
              />
              <Style.BarActors bodyHeight={ bodyHeight } />
            </Style.Wrapper>
          </Style.Main>
        </>
      )}
    </Style.Container>
  );
}

export default Home;
