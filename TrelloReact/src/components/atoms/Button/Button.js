/* eslint-disable */
import styled from 'styled-components';

const StyledButton = styled.button(
    ({ disabled }) => `
    cursor: ${disabled ? 'default' : 'pointer'};
    opacity: ${disabled ? '0.5': '1'};
    font-size: 20px;
    border-radius: 2px;
    border: none;
    padding: 4px 8px;
    margin: 0px 10px;
    
     :disabled {
      border: 1px solid gray;
      background-color: grey;
      color: white;
      cursor: auto;
    }
    :focus {
      outline: #61dafb 1px solid;
    }
    :active {
      outline: #61dafb 1px solid;
    }
`);

const Button = (props) => {
    const { children, ...otherProps } = props;
    return <StyledButton {...otherProps}>{children}</StyledButton>
}

export default Button;