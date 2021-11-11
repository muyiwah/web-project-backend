import React, {useState,useEffect} from "react";
import {collection,query, onSnapshot} from "firebase/firestore";
import { db } from "../../../../firebase";


import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  paid: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {

  const [data2, setData2] = useState([])
 useEffect(() => {
  const q = query(collection(db, "users"));
  const sub = onSnapshot (q, (querySnapshot) =>{
    var array = [];
    querySnapshot.forEach((doc)=>{
      array.push({...doc.data(), id: doc.id});
    });setData2(array)
  });
  return () => {
   sub();
  }
}, []); console.log("from Tables users",data2)
  const classes = useStyles();
  // var keys = Object.keys(data[0]).map(i => i.toUpperCase());  keys.shift(); 

  return (
    <Table className="mb-0">
      <TableHead>
        {<TableRow>
         
            <TableCell>FIRSTNAME </TableCell>
            <TableCell>LASTNAME </TableCell>
            <TableCell>USERNAME </TableCell>
            <TableCell>DATE REGISTERED </TableCell>
            <TableCell>EMAIL </TableCell>
            <TableCell>SUBSCRIBE STATUS </TableCell>

          
        </TableRow> }
      </TableHead>
      <TableBody>
        {data && data.map(({ Firstname,Lastname,Username, Date, Email,   status }) => (
          <TableRow >
            {/* <TableCell>{date}</TableCell> */}
            <TableCell className="pl-3 fw-normal">{Firstname}</TableCell>
            <TableCell>{Lastname}</TableCell>
            <TableCell>{Username}</TableCell>
            <TableCell>{Date}</TableCell>
            <TableCell>{Email}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
