import data from '../data'
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        margin: 50
      },
}))

export default function UsersTable(){
    const classes = useStyles()

    return (
        <TableContainer className={classes.alignItemsAndJustifyContent}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Job</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell>{data.Id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.Company}</TableCell>
                            <TableCell>{data.Job}</TableCell>
                            <TableCell>{data.Active}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}