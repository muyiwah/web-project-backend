import { Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
//  import {DataGrid} from '@material-ui/data-grid'
import React, {useState, useEffect} from 'react'
// import fireDb from './firebase'
// import { collection, addDoc } from "./firebase/firestore"; 
import {collection, addDoc, query, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";


// const datatableData = [
//   ["Joe James", "Joe James", "Example Inc.", "Yonkers", "NY"],
//   ["John Walsh", "Example Inc.", "Hartford", "CT"],
//   ["Bob Herm", "Example Inc.", "Tampa", "FL"],
//   ["James Houston", "Example Inc.", "Dallas", "TX"],
//   ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
//   ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
//   ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
//   ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
//   ["Meral Elias", "Example Inc.", "Hartford", "CT"],
//   ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
//   ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
//   ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
//   ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
//   ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
//   ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
//   ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
//   ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
// ];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))


export default function Tables() {

 const [data, setData] = useState() 
  useEffect(() => {
    const q = query(collection(db, "users"));
    const sub = onSnapshot (q, (querySnapshot) =>{
      var array = [];
      querySnapshot.forEach((doc)=>{
        array.push({...doc.data(), id: doc.id});
      });setData(array);console.log("from users", data);

    });
    return () => {
     sub();
    }
  }, []); 

  const columns = [
    {field: 'id', headerName: 'ID'},
   {field: 'Firstname', headerName: 'Firstname', width: 350},
   {field: 'Lastname', headerName: 'Lastname', width: 350},
   {field: 'Username', headerName: 'Username', width: 350},
   {field: 'Email', headerName: 'Email', width: 350}
 ]

  const classes = useStyles();
  return (
    <>
      {/* <PageTitle title="All Courses" /> */}
      <Grid container spacing={4}>
        {/* <Grid item xs={12}>
        {data && <DataGrid 
        rows={data}
        columns={columns}
        pageSize={10}
        
        checkboxSelection
      /> }
        </Grid> */}
        <Grid item xs={12}>
          <Widget title="All Users" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={data} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
