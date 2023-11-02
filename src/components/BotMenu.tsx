import * as Style from '../style/StyledBotMenu';

function BotMenu() {
  return (
    <Style.StyledContainer>

      <Style.StyledActiveIcon>
        <img src="/home-icon.svg" alt="home" />
        <span>Início</span>
      </Style.StyledActiveIcon>

      <Style.StyledIcon>
        <img src="/add-icon.svg" alt="add" />
        <span>Adicionar</span>
      </Style.StyledIcon>

      <Style.StyledIcon>
        <img src="/search-icon.svg" alt="search" />
        <span>Buscar</span>
      </Style.StyledIcon>

      <Style.StyledIcon>
        <img src="/fav-icon.svg" alt="favorites" />
        <span>Favoritos</span>
      </Style.StyledIcon>

    </Style.StyledContainer>
  );
}

export default BotMenu;
