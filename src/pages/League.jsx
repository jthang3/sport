import styled from "styled-components";

const Container = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const League = ({league}) => {
    const Image = styled.img`
        width: 60%;
        cursor: pointer;
        &:hover{
            width: 75%;
        }
        transition: all .2s ease;
    `
    return(
        <Container>
            <Image src = {league} />
        </Container>
    )
}

export default League;