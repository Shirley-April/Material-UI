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
 Avatar,
 Grid,
 Typography,
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



const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: "10px 10px",
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    avatar: {
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.getContrastText(theme.palette.secondary.light)
    },
    name: {
        fontWeight: "bold",
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: "bold",
        fontSize: '0.75rem',
        color: "white",
        backgroundColor: "grey",
        padding: "10px 18px",
        display: "inline-block"
    }

  })); 

function MTable(){
    const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell className={classes.tableHeaderCell} >User Info</TableCell>
            <TableCell className={classes.tableHeaderCell} >Job Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Joining date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                  <Grid item lg={2}>
                      <Avatar alt={row.name} src='.' className={classes.avatar}/>
                </Grid>
                <Grid item lg={10}>
              <Typography className={classes.name}>{row.name}</Typography> 
              <Typography color="textSecondary" variant="body2">{row.email}</Typography> 
              <Typography color="textSecondary" variant="body2">{row.phone}</Typography>  
                
                
                </Grid>
                </Grid>
              </TableCell>
              <TableCell >
             <Typography color="primary" variant="subtitle2">{row.jobTitle}</Typography>
             <Typography>{row.company}</Typography> 
              
              </TableCell>
              <TableCell >
              {row.joinDate}
              </TableCell>
              <TableCell >
             <Typography 
             className={classes.status}
             style ={{
                 backgroundColor:
                ((row.status === "Active" && "green")) ||
                ((row.status === "Pending" && "blue")) ||
                ((row.status === "Blocked" && "orange"))
             }}
             >{row.status}</Typography> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MTable