import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#FF7A00" : "white"};
  color: ${props => props.primary ? "white" : "#FF7A00"};
  width: 121px;
  height: 53px;
  border-radius: 10px;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #FF7A00;
`;



export default  Button;