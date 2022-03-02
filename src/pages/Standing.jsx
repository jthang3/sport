import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import "./Standing.css";
import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  


const Standing = ({selectedLeague}) => {

    let [rows, setRows] = useState([]);
    let [loading,setLoading] = useState(true);

    function createData(position, team, img) {
        return { position,team,img };
      }

      
    useEffect(()=>{
          let myRows = [];
           axios(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=2021&sort=asc`).then(data => {
                if(data) {
                  setLoading(false);
                  let teamsInfo = (data.data.data.standings);
                  teamsInfo.forEach((team,index) => {
                    myRows.push(createData(index+1, team.team.name, team.team.logos[0].href));
                  })
                  return myRows;
                }
    }).then(data => setRows([...rows,...data]));
  },[]);


    const showTable = () => {
      return(
        <TableContainer style = {{width: "50%",margin: "auto"}}component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell align="left">Clubs</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <StyledTableRow key={row.position}>
                <StyledTableCell component="th" scope="row">
                  {row.position}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div className = "mainTeam">
                    <img className = "logo" src = {row.img} />
                    {row.team}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )
    }

    return(
      <>
        {loading ? <CircularProgress className='loading'/>: showTable()}
      </>
    )
}

export default Standing;