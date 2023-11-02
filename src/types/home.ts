export type FavoriteAuthor = {
  id: string,
  name: string,
  picture: string,
  booksCount: number
};

export type AllBook = {
  id: string,
  name: string
  author: {
    id: string,
    name: string,
  }
  cover: string,
  category: string,
};

export type FavoriteBook = {
  id: string,
  name: string,
  cover: string,
  author: {
    name: string
  }
};

export type HomeData = {
  userPicture: string,
  favoriteBooks: FavoriteBook[]
  allBooks:AllBook[]
  favoriteAuthors: FavoriteAuthor[]
};
