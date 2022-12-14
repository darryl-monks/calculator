import styled from 'styled-components';

interface Props {
  screenValue: string;
}

const ScreenInput = styled.input`
  background-color: var(--secondary-bg-color);
  border-radius: 0.25rem;
  border: none;
  color: var(--screen-text-color);
  font-family: inherit;
  font-size: 3rem;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem;
  text-align: right;
  width: 100%;
`;

function Screen(props: Props) {
  const { screenValue } = props;

  return <ScreenInput type="text" value={screenValue} readOnly />;
}

export default Screen;
