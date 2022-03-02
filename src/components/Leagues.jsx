import League from "../pages/League";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: spcae-around;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
`

const LeagueIcon = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 50%;
    color: white;
    margin: 20px;
`
const Leagues = ({league,searchedTeams, leagueStanding}) => {
    const leagueIcon = () => {
        if(searchedTeams.length > 0) {
            return(
                searchedTeams.map((team, index) => {
                    return(
                        <Link to="/standing" onClick={() => leagueStanding(team.id)}>
                            <LeagueIcon key = {index}>
                                <League league = {team.logos.light} />
                            </LeagueIcon>
                        </Link> 
                    )
                })
            )
        }
        else {
            return(
                league.map((league,index) => {
                    return(
                        <Link to = "/standing" onClick={() => leagueStanding(league.id)}>
                            <LeagueIcon key = {index}>
                                <League league = {league.logos.light} />
                            </LeagueIcon>
                        </Link>
                    )
                })
            )
        }
    }

    return(
        <Container>
            {leagueIcon()}
        </Container>
    )
}

export default Leagues;