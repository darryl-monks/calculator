import styled from 'styled-components';
import Theme from '../Theme/Theme';

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const ThemeContainer = styled.div`
  margin-left: auto;
  opacity: 0.5;
  transition: opacity 0.4s;

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
