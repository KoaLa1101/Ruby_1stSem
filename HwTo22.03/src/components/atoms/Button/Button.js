import styled from 'styled-components';

const StyledButton = styled.button(
  ({ disabled }) => `
    color: 'black'};
    background-color: ${disabled ? 'blue' : 'white'};
    opacity: ${disabled ? '0.5' : '1'}; 
    font-size: 16px;
    border-radius: 2px;
    border: none;
    padding: 4px 8px;
    cursor: ${disabled ? 'default' : 'pointer'};
    
    &:hover {
      border: none;
      background: white;
      }
`,
);

const Button = (props) => {
  const { disabled, children } = props;
  return <StyledButton primary={disabled}>{children}</StyledButton>;
};

export default Button;
