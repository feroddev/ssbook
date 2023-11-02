import { Link } from 'react-router-dom';
import * as Style from '../style/StyledFavoriteBooks';
import { FavoriteBook } from '../types/home';
import CardFavoriteBook from './CardFavoriteBook';

type FavoritesBooksProps = {
  favoriteBooks: FavoriteBook[];
};

function FavoriteBooks({ favoriteBooks }: FavoritesBooksProps) {
  return (
    <Style.ContainerFavoriteBook>
      <Style.ContainerTitle>
        <Style.Title>
          Livros favoritos
        </Style.Title>
        <Link to="/">
          <Style.Span>
            ver todos
          </Style.Span>
        </Link>
      </Style.ContainerTitle>
      <Style.FavoritesContainer>
        {favoriteBooks && favoriteBooks.map((book) => (
          <CardFavoriteBook book={ book } key={ book.id } />
        ))}
      </Style.FavoritesContainer>
    </Style.ContainerFavoriteBook>
  );
}

export default FavoriteBooks;
