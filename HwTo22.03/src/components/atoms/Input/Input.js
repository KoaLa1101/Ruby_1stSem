import styled from 'styled-components';

const StyledInput = styled.input(
  ({ disabled }) => `
  background-color: white;
  opacity: ${disabled ? '0.5' : '1'};
  font-size: 16px;
  border-radius: 2px;
  border: none;
  padding: 4px 8px;
`);

const Input = (props) => {
    const {disabled} = props
    return <StyledInput disabled={disabled} />;
}
export default Input;
