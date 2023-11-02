/* eslint-disable react/jsx-max-depth */
import * as Style from '../style/StyledHeader';

type HeaderProps = {
  profileImage: string;
};

function Header({ profileImage }: HeaderProps) {
  return (
    <Style.HeaderContainer>
      <Style.Container>
        <Style.Header>
          <img src="/logo.svg" alt="logo" />
          <Style.InputSearch>
            <Style.Input type="text" placeholder="Busque um livro" />
          </Style.InputSearch>
          <Style.IconDiv>
            <Style.Icons src="/add-icon-header.svg" alt="add" />
            <span>Adicionar</span>
          </Style.IconDiv>

          <Style.IconDiv>
            <Style.Icons src="/fav-icon-header.svg" alt="favorites" />
            <span>Favoritos</span>
          </Style.IconDiv>
          <Style.LineVertical />
          <Style.InfoUserContainer>
            <Style.Perfil src={ profileImage } alt="user" />
            <Style.NameUser>
              Avatar
            </Style.NameUser>
          </Style.InfoUserContainer>
        </Style.Header>
      </Style.Container>
    </Style.HeaderContainer>
  );
}

export default Header;
