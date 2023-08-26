import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globalstyle';
import CustomBtn from "./components/CustomBtn";
import "./App.css";
function App() {
  let myFavColor = "red";
  //Creating a custom theme using its varaible in button css as well as in global theme 
  const theme = {
    color: {
      gradient1: "#6253e1",
      gradient2: "#852d91",
      gradient3: "#a3a1ff",
      gradient4: "#f24645",
      bgColor: "black"
    },
    screenssizes: {
      mobileS: "(min-width: 320px)"
    }
  }
  const ButtonWrapper = styled.div`
  .bn632-hover {
  
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .bn632-hover:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
  .bn632-hover:focus {
    outline: none;
  }
  .bn632-hover.bn24 {
    background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.gradient1} ,
        ${({ theme }) => theme.color.gradient2} ,
        ${({ theme }) => theme.color.gradient3} ,
        ${({ theme }) => theme.color.gradient4} ,
        #f24645
      );
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  }
  `
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <br />
      <CustomBtn bg="teal" textClr="white" > Custom Button with prop</CustomBtn> {/* using style componet with prop*/}
      <ButtonWrapper>
        <button class="bn632-hover bn24" >Inline Button with variable </button>  {/*using style with variable of val set by theme  */}

      </ButtonWrapper>
    </ThemeProvider>
  );
}
export default App;
