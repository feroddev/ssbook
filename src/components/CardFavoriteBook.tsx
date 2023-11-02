import { Link } from 'react-router-dom';
import * as Style from '../style/StyledCardFavoriteBook';
import { FavoriteBook } from '../types/home';

type CardFavoriteBookProps = {
  book: FavoriteBook
};

function CardFavoriteBook({ book }: CardFavoriteBookProps) {
  return (
    <Style.CardFavoriteBook>
      <Link to={ `/book/${book.id}` }>
        <Style.ImageFavorite src={ book.cover } alt="book" />
        <Style.TitleFavorite>
          {book.name}
        </Style.TitleFavorite>
        <Style.AuthorBook>
          {book.author.name}
        </Style.AuthorBook>
      </Link>
    </Style.CardFavoriteBook>
  );
}

export default CardFavoriteBook;
