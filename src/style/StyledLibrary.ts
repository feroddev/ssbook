import styled from 'styled-components';

export const FilterContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  padding: 10px 0;
  @media (min-width: 705px) {
    overflow: hidden;
  }
`;

export const FilterButtonActive = styled.button`
  background-color: #A076F2;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin: 0 5px;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  background-color: #fff;
  border: 1px solid #E0E0E0;
  border-radius: 50px;
  padding: 10px 20px;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin: 0px 5px;
  cursor: pointer;
`;

export const AllBooksContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  cursor: pointer;
`;

export const CoverBook = styled.img`
  width: 48px;
  height: 70px;
  border-radius: 8px;
`;

export const BookTitle = styled.h2`
  width: 60vw;
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
  color: #757575;
  font-weight: 400;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #555;
`;
