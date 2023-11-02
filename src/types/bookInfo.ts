export type Book = {
  id: string,
  name: string,
  author: {
    name: string,
  }
  cover: string,
  description: string,
  isFavorite: boolean,
};

export type BookInfoData = {
  userPicture: string,
  book: Book
};
