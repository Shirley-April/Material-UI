import faker, { fake } from "faker"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table,
 TableBody,
 TableCell, 
 TableContainer, 
 TableHead, 
 TableRow, 
 Paper,
} from '@material-ui/core'


let USERS = [], STATUSES = ["Active", "Pending", "Blocked"]
for(let i = 0; i < 14; i++){
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
} 



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  }); 

function MTable(){
    const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >User Info</TableCell>
            <TableCell >Job Info</TableCell>
            <TableCell >Joining date</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                {row.name}
                {row.email}
                {row.phone}
              </TableCell>
              <TableCell >
              {row.jobTitle}
              {row.company}
              </TableCell>
              <TableCell >
              {row.joinDate}
              </TableCell>
              <TableCell >
              {row.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MTable