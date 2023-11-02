import * as Style from '../style/StyledBookInfo';
import { Book } from '../types/bookInfo';

type BookInfoContainsProps = {
  book: Book;
  bodyHeight: string;
};

function BookInfoContains({ book, bodyHeight }: BookInfoContainsProps) {
  return (
    <Style.MainContainer>
      <Style.ContainerCover>
        <Style.Cover src={ book.cover } alt={ book.name } />
        <Style.IconOptions>
          <Style.Icon
            src={ book.isFavorite ? '/favorite-icon-complete.svg'
              : '/fav-icon-header.svg' }
            alt="favorite icone"
          />
          <Style.TextIcon>
            Favoritar
          </Style.TextIcon>
        </Style.IconOptions>
        <Style.IconOptions>
          <Style.Icon
            src="/share-icon.svg"
            alt="favorite icone"
          />
          <Style.TextIcon>
            Compartilhar
          </Style.TextIcon>
        </Style.IconOptions>
        <Style.IconOptions>
          <Style.Icon
            src="/save-icon.svg"
            alt="favorite icone"
          />
          <Style.TextIcon>
            Favoritar
          </Style.TextIcon>
        </Style.IconOptions>
      </Style.ContainerCover>
      <Style.Wrapper>
        <Style.TitleDesktop>
          <Style.TitleAndSubtitle>
            <Style.Title>{book.name}</Style.Title>
            <Style.AuthorDesktop>{book.author.name}</Style.AuthorDesktop>
          </Style.TitleAndSubtitle>
        </Style.TitleDesktop>
        <Style.BookInfo>
          <Style.TitleContainer>
            <Style.Title>{book.name}</Style.Title>
            <Style.FavoriteButton
              src={ book.isFavorite ? '/favorite-icon-complete.svg'
                : '/favorite-icon.svg' }
              alt="favorite icon"
            />
          </Style.TitleContainer>
          <Style.Author>{book.author.name}</Style.Author>
          <Style.Description>{book.description}</Style.Description>
        </Style.BookInfo>
      </Style.Wrapper>
      <Style.SideBar bodyHeight={ bodyHeight } />
    </Style.MainContainer>
  );
}

export default BookInfoContains;
