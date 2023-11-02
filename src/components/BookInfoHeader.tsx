import { Link } from 'react-router-dom';
import * as Style from '../style/StyledBookInfo';
import Header from './Header';

type BookInfoHeaderProps = {
  userPicture: string;
};

function BookInfoHeader({ userPicture }: BookInfoHeaderProps) {
  return (
    <>
      <Style.HeaderContainer>
        <Style.TopBar />
        <Header profileImage={ userPicture } />
      </Style.HeaderContainer>
      <Style.Fade />
      <Style.TopMenu>
        <Link to="/">
          <Style.IconsMenu
            src="/previous-icon.svg"
            alt="previous icon"
          />
        </Link>
        <Style.IconsMenu
          src="/options-icon.svg"
          alt="options icon"
        />
      </Style.TopMenu>
    </>
  );
}

export default BookInfoHeader;
