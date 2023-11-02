import { Outlet } from 'react-router-dom';
import BotMenu from './BotMenu';
import { GlobalStyle } from '../style/GlobalStyled';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <BotMenu />
      <Footer />
    </>
  );
}

export default Layout;
