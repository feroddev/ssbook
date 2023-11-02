import styled from 'styled-components';

export const CardFavoriteAuthor = styled.div`
  display: flex;
  width: 248px;
  height: 69px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
  margin: 10px 20px 0 0;
`;

export const ImageAuthor = styled.img`
  width: 63px;
  height: 67px;
  border-radius: 8px;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

export const TitleAuthor = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #555;
`;

export const AuthorBook = styled.p`
  font-size: 14px;
  color: #757575;
  font-weight: 400;
`;
