import * as Style from '../style/StyledBotMenu';

function BotMenu() {
  return (
    <Style.Container>

      <Style.ActiveIcon>
        <img src="/home-icon.svg" alt="home" />
        <span>Início</span>
      </Style.ActiveIcon>

      <Style.Icon>
        <img src="/add-icon.svg" alt="add" />
        <span>Adicionar</span>
      </Style.Icon>

      <Style.Icon>
        <img src="/search-icon.svg" alt="search" />
        <span>Buscar</span>
      </Style.Icon>

      <Style.Icon>
        <img src="/fav-icon.svg" alt="favorites" />
        <span>Favoritos</span>
      </Style.Icon>

    </Style.Container>
  );
}

export default BotMenu;
