import styled from 'styled-components';

const StyledCheckBox = styled.input`
  cursor: pointer;
`;

const CheckBox = (props) => {
    const {changeText} = props;
    return <StyledCheckBox {...props} type="checkbox" onChange={changeText}/>;
}

export default CheckBox;