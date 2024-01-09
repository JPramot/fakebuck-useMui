import styled from "styled-components";

// Create Component + Inject CSS เปลี่ยนได้ (h1,button,...)
// Syntax : styled.tag `CSS rule`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// ส่ง props ได้
const Button = styled.button`
  background: ${(props) => (props.primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

// Extend Style => ถูกดีไซน์มาจาก Design Pattern (Higher Order Component)
const MyFirstButton = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const MySecondButton = styled(MyFirstButton)`
  color: tomato;
  border-color: tomato;
`;

const SplitScreen = styled.div`
  display: flex;
`;

const Child = styled.div`
  flex: ${(props) => props.flex};
  text-align: center;
  border: 2px solid #bf4f74;
  &:hover {
    background-color: white;
  }
`;

const MyInput = styled.input`
  border: 2px solid #bf4f74;
  border-radius: 4px;
  &:focus {
    border: none;
    outline: none;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title className="App">Hello</Title>
      <Button>Normal</Button>
      <Button primary>Pirmary</Button>
      <MyFirstButton>My First</MyFirstButton>
      <MySecondButton>My Second</MySecondButton>
      <SplitScreen>
        <Child flex={1}>left</Child>
        <Child flex={3}>right</Child>
      </SplitScreen>
      <MyInput />
    </Wrapper>
  );
}

export default App;
