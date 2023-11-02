import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as Style from '../style/StyledLibrary';
import { AllBook } from '../types/home';
import { converteToTitle } from '../utils/functions';

type LibraryProps = {
  categoriesList: string[];
  allBooks: AllBook[];
};

function Library({ categoriesList, allBooks }: LibraryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('TECHNOLOGY');
  return (
    <div>
      <Style.Title>
        Biblioteca
      </Style.Title>
      <Style.FilterContainer>
        {categoriesList && categoriesList.map((category, index) => (
          <div key={ index }>
            { category === activeCategory && (
              <Style.FilterButtonActive
                onClick={ () => setActiveCategory(category) }
              >
                {converteToTitle(category)}
              </Style.FilterButtonActive>
            )}
            { category !== activeCategory && (
              <Style.FilterButton
                onClick={ () => setActiveCategory(category) }
              >
                {converteToTitle(category)}
              </Style.FilterButton>
            )}
          </div>
        ))}
      </Style.FilterContainer>
      <Style.AllBooksContainer>
        {allBooks && allBooks.map((book) => (
          <Link to={ `/book/${book.id}` } key={ book.id }>
            <Style.BookCard>
              <Style.CoverBook src={ book.cover } alt="book cover" />
              <Style.AuthorInfoContainer>
                <Style.BookTitle>{book.name}</Style.BookTitle>
                <Style.AuthorBook>{book.author.name}</Style.AuthorBook>
              </Style.AuthorInfoContainer>
            </Style.BookCard>
          </Link>
        ))}
      </Style.AllBooksContainer>
    </div>
  );
}

export default Library;
