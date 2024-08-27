import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The Wild Oasis</H1>
        <Button>Check in</Button>
      </div>
    </>
  );
}

export default App;
