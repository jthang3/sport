import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.input`
    width: 50%;
    margin: auto;
    border: 2px solid black;
    border-radius: 20px;
    background-color: white;
    height: 50px;
    transform: translateY(60px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    margin-bottom: 50px;
    padding-left: 20px;
`

const Search = ({leagueName, searchTeams}) => {
    let [search,setSearch] = useState("");
    let [searchedList, setSearchedList] = useState([]);
    useEffect(()=>{
        if(search.length > 0) {
            let searchList = leagueName.filter(team => team.name.includes(search));
            setSearchedList(searchList);
        }
        else {
            setSearchedList([]);
        }
        searchTeams(searchedList);
    },[search])
    return(
        <Container placeholder="Search" value = {search} onChange = {(e) => setSearch(e.target.value)}/>
    )
}

export default Search;