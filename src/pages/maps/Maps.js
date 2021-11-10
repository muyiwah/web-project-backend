import React, { useState, useEffect } from 'react'
// import {DataGrid} from '@material-ui/data-grid'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from "material-table";
import {collection, addDoc, query, onSnapshot, deleteDoc,doc ,setDoc} from "firebase/firestore";
 import {db, storage} from "../../firebase";
import { Autorenew } from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

const Maps = () => {

  var updateValue=";"
  var description="";
  var title ="";
  var cost = "";
  var overview = "";
  var curriculum = "";
  var author = "";
  var category = "";
  var learningOutcome = "";
  var courseFeature ="";
  // var authorCoursesFb  ="";
  var authorImgFb ="author.jpg";
  var authorNameFb ="";
  var courseDescFb  ="";
  var courseLinkFb  ="";
  var courseTitleFb ="";
  var imgUrlFb ="";
  var priceFb =""; 
  var cByAuthor="";
  
  // if(post2) {var post3=post2[1]}
  
  const columns = [
    // {field: 'id', headerName: 'ID'},
    // {field: 'name', headerName: 'Name', width: 350},
  
    { field: 'date', title: ' Date Uploaded', emptyValue:()=><em>Null</em> },
    { field: 'authorName', title: 'Author',emptyValue:()=><em>Null</em>  },
    { field: 'courseTitle', title: 'Course Title',emptyValue:()=><em>Null</em>  },
    { field: 'price', title: 'Cost',emptyValue:()=><em>Null</em>  },
    { field: 'authorCoursesFb', title: 'Courses by Author',emptyValue:()=><em>Null</em>  },
    { field: 'courseDesc', title: 'Description',editable:true, cellStyle: {textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden ", color:"blue" }   },
    { field: 'categoryFb', title: 'Category' ,emptyValue:()=><em>Null</em> },
    { field: 'courseFeatureFb', title: 'Course Feature',emptyValue:()=><em>Null</em>  },
    // { field: 'overviewFb', title: 'Overview' ,emptyValue:()=><em>Null</em> },
    { field: 'curriculumFb', title: 'Curriculum',emptyValue:()=><em>Null</em>  },
    { field: 'learningOutcomeFb', title: 'Learning Outcome',emptyValue:()=><em>Null</em>  },
    {
      title: "Banner",
      field: "imageUrl",
      render: (rowData) => <img src={ rowData.imgUrl} style={{ width: 100 }} />,
  }
  ]



  // await setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });


const d= new Date().toISOString().slice(0, 10);
const handleDelete = async (del) =>{

  await deleteDoc (doc (db, "courses6/", del ), {
    
   
  });
alert("done")
  } 
  const handleUpdate = async (update, date,authorImg,authorName,courseDesc,courseLink,courseTitle,imgUrl,price,categoryFb,overviewFb,learningOutcomeFb, curriculumFb,  courseFeatureFb, descriptionFb,authorCoursesFb) =>{

    await setDoc (doc (db, "courses6/", update ), {
      date: `${d}`,
    // authorCourses: `${authorCoursesFb}`,
    authorImg: `${authorImgFb}`,
    authorName: `${authorNameFb}`,
    courseDesc: `${description}`,
    courseLink: `${title}`,
    courseTitle: `${title}`,
    imgUrl: `${imgUrlFb}`,
    price: `${cost}`,
  
    categoryFb:`${category}`,
    overviewFb: `${overview}`,
    learningOutcomeFb: `${learningOutcome}`,
    curriculumFb: `${curriculum}`,
  
    courseFeatureFb: `${courseFeature}`,
    // descriptionFb:`${description}`,
    authorCoursesFb:  `${cByAuthor}`,
    });
     
  // console.log("this ios",work);
  // console.log("thi is log",work.authorName);
    // setUpdateValue("")
  // alert("done")
    } 
  
  
  
  
  
 



  const [data2, setData2] = useState([])
  useEffect(() => {
    const q = query(collection(db, "courses6"));
    const sub = onSnapshot(q, (querySnapshot) => {
      var array = [];
      querySnapshot.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id });
      }); setData2(array)
    });
    return () => {
      sub();
    }
  }, []); console.log("from maps", data2);
  const classes = useStyles();
  return (<div>
    <div>
      <MaterialTable data={data2} columns={columns} 
editable ={{
  onRowUpdate:(selectedRow)=>new Promise((resolve,reject)=>{
    // console.log(selectedRow);
   updateValue= selectedRow; var update =selectedRow.id; 
   description=selectedRow.courseDesc;
   title=selectedRow.courseTitle;
   cost=selectedRow.price;
   overview=selectedRow.overviewFb;
   curriculum=selectedRow.curriculumFb;
   category=selectedRow.categoryFb;
   learningOutcome=selectedRow.learningOutcomeFb;
   courseFeature=selectedRow.courseFeatureFb;
    cByAuthor = selectedRow.authorCoursesFb;
    imgUrlFb = selectedRow.imgUrl;
          handleUpdate(update);
    setTimeout(()=>resolve(),500)
  }
  ),
  onRowDelete: (selectedRow)=>new Promise((resolve,reject)=>{
    var del = selectedRow.id;
    console.log(selectedRow.date,selectedRow);
    handleDelete(del);
    setTimeout(()=>resolve(),500)
  })
}
}
options={{  
  actionsColumnIndex:-1,
  // cellstyle:{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden ", color:"blue"},
  headerStyle:{background:"yellow", fontSize:"12", fontWeight:"bold"},
  tableStyle:{background:"yellow", fontSize:"44", fontWeight:"bold",color:"red"},
  // cellstyle:{whiteSpace:'nowrap'}
}}
        title="Uploaded Courses" />

    </div>
    {/* <DataGrid editMode="row" rows={data2} columns={columns} /> */}

  </div>
  );
}


  /* Required for text-overflow to do anything */

export default Maps