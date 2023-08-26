import styled from "styled-components";
const CustomButtonExport = styled.button`
  padding: 10px 25px;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 2px solid rgb(255, 255, 255);
  z-index: 1;
  color: white;
&:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  background:  ${(props) => props.bg};
  transition: all 0.3s ease;
}
&:hover {
  color:  ${(props) => props.textClr};
}
&:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
`
export default CustomButtonExport;