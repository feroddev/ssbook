import { Link } from 'react-router-dom';
import * as Style from '../style/StyledHeader';

function NavBar() {
  return (
    <Style.Nav>
      <Style.NavButtonActive>
        <Link to="/">
          <Style.NavText>
            Meus Livros
          </Style.NavText>
        </Link>
      </Style.NavButtonActive>
      <Style.NavButton>
        <Link to="/">
          <Style.NavText>
            Emprestados
          </Style.NavText>
        </Link>
      </Style.NavButton>
    </Style.Nav>
  );
}

export default NavBar;
