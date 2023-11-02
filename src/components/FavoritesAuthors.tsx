import { Link } from 'react-router-dom';
import * as Style from '../style/StyledFavoriteAuthors';
import { FavoriteAuthor } from '../types/home';
import CardFavoriteAuthor from './CardFavoriteAuthor';

type FavoritesAuthorProps = {
  favoriteAuthors: FavoriteAuthor[];
};

function FavoritesAuthor({ favoriteAuthors }: FavoritesAuthorProps) {
  return (
    <>
      <Style.AuthorContainer>
        <Style.Title>
          Autores favoritos
        </Style.Title>
        <Link to="/">
          <Style.Span>
            ver todos
          </Style.Span>
        </Link>
      </Style.AuthorContainer>
      <Style.AuthorSection>
        {favoriteAuthors && favoriteAuthors.map((author) => (
          <CardFavoriteAuthor
            key={ author.id }
            author={ author }
          />
        ))}
      </Style.AuthorSection>
    </>
  );
}

export default FavoritesAuthor;
