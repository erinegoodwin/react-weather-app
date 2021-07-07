import styled from 'styled-components';

const StyledCard = styled.main`
    width: 600px;
    height: 100%;
    padding: 48px;
    background-color: rgba(250,250,250,0.7);
    color: #000000;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 588px;
    backdrop-filter: blur(30px);
`
export const Card = (props) => {
    const children = props.children;
    return (
        <StyledCard>{children}</StyledCard>
    )
}
