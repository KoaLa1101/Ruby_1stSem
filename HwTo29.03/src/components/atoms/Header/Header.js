/* eslint-disable */
import styled from 'styled-components';

const StyledHeader = styled.h2(
    ({hasChanged}) => `
    color: ${hasChanged ? 'purple' : 'black'};
`)

const Header = (props) => {
    const { children, hasChanged} = props;
    return <StyledHeader hasChanged={hasChanged}>{children}</StyledHeader>
}

export default Header;