import { useState } from 'react';
import styled from 'styled-components';
import Keyboard from '../Keyboard/Keyboard';
import Screen from '../Screen/Screen';

const Container = styled.div`
  background-color: var(--secondary-bg-color);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 24px 40px rgba(0, 0, 0, 0.2);
`;

function Calculator() {
  const [screenValue, setScreenValue] = useState<string>('0');

  return (
    <Container>
      <Screen screenValue={screenValue} />
      <Keyboard screenValue={screenValue} setScreenValue={setScreenValue} />
    </Container>
  );
}

export default Calculator;
