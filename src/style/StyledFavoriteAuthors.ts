import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #555;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #A076F2;
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorSection = styled.section`
  display: flex;
  flex-direction: row;
  overflow: scroll;
  margin-bottom: 30px;
  @media (min-width: 844px) {
    overflow: hidden;
  }
`;
