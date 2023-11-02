import { useQuery } from 'react-query';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BookInfoData } from '../types/bookInfo';
import { GlobalStyle } from '../style/GlobalStyled';
import BookInfoHeader from '../components/BookInfoHeader';
import BookInfoContains from '../components/BookInfoContains';

const apolloClient = new ApolloClient({
  uri: 'https://us-central1-ss-devops.cloudfunctions.net/GraphQL',
  cache: new InMemoryCache(),
});

function BookInfo() {
  const { bookId } = useParams();
  const [bodyHeight, setBodyHeight] = useState('100vh');

  const GET_DATA = gql`
  query {
  userPicture
  book(id: "${bookId}") {
  name
  author {
  name
  }
  cover
  description
  isFavorite
  }
}
`;

  const { data, isLoading } = useQuery('myData', async () => {
    const response = await apolloClient.query({ query: GET_DATA });
    return response.data;
  });

  useEffect(() => {
    setBodyHeight(`${document.body.clientHeight}px`);
  }, [data]);

  if (isLoading) return <p>Carregando...</p>;

  const { book, userPicture }: BookInfoData = data;

  return (
    <>
      <GlobalStyle />
      {book && (
        <>
          <BookInfoHeader userPicture={ userPicture } />
          <BookInfoContains book={ book } bodyHeight={ bodyHeight } />
        </>
      )}
    </>
  );
}

export default BookInfo;
