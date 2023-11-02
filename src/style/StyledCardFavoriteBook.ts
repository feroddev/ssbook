import styled from 'styled-components';

export const CardFavoriteBook = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 15px;
  width: 140px;
  cursor: pointer;
`;

export const ImageFavorite = styled.img`
  width: 136px;
  height: 198px;
  border-radius: 10px;
`;

export const TitleFavorite = styled.h2`
  width: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  color: #555;
`;

export const AuthorBook = styled.p`
  font-size: 14px;
  width: 140px;
  color: #757575;
  font-weight: 400;
`;
