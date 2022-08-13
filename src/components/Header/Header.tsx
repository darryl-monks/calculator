import styled from 'styled-components';
import Theme from '../Theme/Theme';

const Container = styled.header`
  display: flex;
  padding: 1.5rem 1rem;

  @media (min-width: 375px) {
    padding: 1.5rem;
  }
`;

const ThemeContainer = styled.div`
  opacity: 0.5;
  transition: opacity 0.4s;
  margin-left: auto;

  &:hover {
    opacity: 1;
  }
`;

const Header = () => {
  return (
    <Container>
      <ThemeContainer>
        <Theme />
      </ThemeContainer>
    </Container>
  );
};

export default Header;
