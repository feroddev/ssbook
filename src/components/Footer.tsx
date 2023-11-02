import * as Style from '../style/StyledFooter';

function Footer() {
  return (
    <Style.FooterContainer>
      <Style.FooterContent>
        <img src="/logo-footer.svg" alt="logo" />
        <Style.FooterTextContain>
          <p>Todos os direitos reservados.</p>
          <p>Studio Sol Books © 2023</p>
        </Style.FooterTextContain>
      </Style.FooterContent>
    </Style.FooterContainer>
  );
}

export default Footer;
