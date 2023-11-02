import { FavoriteAuthor } from '../types/home';
import * as Style from '../style/StyledCardFavoriteAuthor';

type CardFavoriteAuthorProps = {
  author: FavoriteAuthor;
};

function CardFavoriteAuthor({ author }: CardFavoriteAuthorProps) {
  return (
    <Style.CardFavoriteAuthor>
      <Style.ImageAuthor src={ author.picture } alt="author" />
      <Style.AuthorInfoContainer>
        <Style.TitleAuthor>
          {author.name}
        </Style.TitleAuthor>
        <Style.AuthorBook>
          {author.booksCount >= 2 ? `${author.booksCount} livros`
            : `${author.booksCount} livro`}
        </Style.AuthorBook>
      </Style.AuthorInfoContainer>
    </Style.CardFavoriteAuthor>
  );
}

export default CardFavoriteAuthor;
