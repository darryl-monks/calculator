import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Outer = styled.div`
  display: table;
  height: calc(100% - 132px);
  margin: 0 auto;
  padding: 0 1rem 1rem;
  max-width: 400px;
  width: 100%;
`;

const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

function Container({ children }: Props) {
  return (
    <Outer>
      <Inner>{children}</Inner>
    </Outer>
  );
}

export default Container;
