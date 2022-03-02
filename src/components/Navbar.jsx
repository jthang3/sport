
import styled from "styled-components";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Title = styled.h2`
    margin-left: 10px;
    color: white;
`
const Navbar = () => {
    return(
        <Container>
            <IconContainer>
                <SportsSoccerIcon />
            </IconContainer>
            <Title>
                Soccer app
            </Title>
        </Container>
    )
}


export default Navbar;