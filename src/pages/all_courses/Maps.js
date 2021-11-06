import React, {useState, useEffect} from 'react'
// import {DataGrid} from '@material-ui/data-grid'
import {collection, addDoc, query, onSnapshot} from "firebase/firestore";
import { db } from "../icons/firebase";
import Table from '../dashboard/components/Table/Table';

const columns = [
  // {field: 'id', headerName: 'ID'},
  // {field: 'name', headerName: 'Name', width: 350},
  {field: 'titleFb', headerName: 'titleFb', width: 200 , editable: true},
  {field: 'costFb', headerName: 'Cost', width: 200 , editable: true},
  {field: 'authorFb', headerName: 'Author', width: 200 , editable: true},
  {field: 'categoryFb', headerName: 'Category', width: 200 , editable: true},
  {field: 'courseFeatureFb', headerName: 'Course Feature', width: 200},
  {field: 'overviewFb', headerName: 'Overview', width: 200 , editable: true},
  {field: 'learningOutcomefFb', headerName: 'Learning Outcome', width: 200 , editable: true}
]

const Maps = () => {

 
 const [data2, setData2] = useState([])
 useEffect(() => {
  const q = query(collection(db, "courses"));
  const sub = onSnapshot (q, (querySnapshot) =>{
    var array = [];
    querySnapshot.forEach((doc)=>{
      array.push({...doc.data(), id: doc.id});
    });setData2(array)
  });
  return () => {
   sub();
  }
}, []); console.log("from maps",data2);
  return (
    <div style={{height: 700, width: '100%'}}>
      {/* <DataGrid 
        rows={data2}
        columns={columns}
        pageSize={12}
        checkboxSelection
        delete
      /> */}
      <Table/>
    </div>
  )
}

export default Maps