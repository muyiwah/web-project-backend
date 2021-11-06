import React, {useState, useEffect} from 'react'
import icons from './icons.css'
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"; 
import {collection, addDoc, query, onSnapshot, deleteDoc,doc} from "firebase/firestore";
 import {db, storage} from "../../firebase";
 import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Maps from '../maps/Maps';
import { KeyboardArrowRight } from '@material-ui/icons';
import { CircularProgress } from "@material-ui/core";

// const firestore = getFirestore(firebaseApp);

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// const uploadTask = ({users, setArrayTasks, arrayTasks})=>{
//   let urlDownload;
//   async function fileHandler (e){
//     const local = 
//   }
// }

// var imgUrlFb ="course-1.jpg"
function Icons() {
  var [isLoading, setIsLoading] = useState(false);
const [description, setDescription] = useState("Description")
const [title, setTitle] = useState("Title")
const [cost, setCost] = useState("$")
const [overview, setOverview] = useState("Overview")
const [curriculum, setCurriculum] = useState("Curriculum")
const [author, setAuthor] = useState("Author(s)")
const [category, setCategory] = useState("Category")
const [learningOutcome, setLearningOutcome] = useState("Learning Outcome")
const [courseFeature, setCourseFeature] = useState("Feature")
const [authorCourses, setAuthorCourses] = useState("Author")
const [authorImgFb, setAuthorImgFb] = useState("author.jpg")
const [authorNameFb, setAuthorNameFb] = useState("")
const [courseDescFb, setCourseDescFb] = useState("")
const [courseLinkFb, setCourseLinkFb] = useState("/course-details")
const [courseTitleFb, setCourseTitleFb] = useState("")
// var imgUrlFb ="course-1.jpg"
const [priceFb, setPriceFb] = useState("")
const[save,setSave]=useState("")

const [displayImage, setDisplayImage] = React.useState([]);
    const [previewImage, setPreviewImage] = React.useState('');
    const handleInputChange = (e) =>{
    // document.getElementsByClassName("Buttom").stlye.display ="block";
    document.getElementById("Buttom").style.display= "block";
      const file = displayImage;
             return setDisplayImage([...e.target.files]);
         
    }
    const upload = ()=>{
       const file = displayImage;
      //  const imagesRef = ref(storage, 'images');
//       const storageRef =app.storage().ref();
//       const fileRef = storageRef.child(file.name)
//       fileRef.put(file).then(()=>{
// console.log("uploaded");
//       })
    
     }
//      const [displayImage, setDisplayImage] = React.useState([]);
//     const [previewImage, setPreviewImage] = React.useState('');
//     const handleInputChange = (event) =>{
//         return setDisplayImage([...event.target.files]);
//     }
//     const upload = ()=>{
//        const file = displayImage;
//       //  const imagesRef = ref(storage, 'images');
// //       const storageRef =app.storage().ref();
// //       const fileRef = storageRef.child(file.name)
// //       fileRef.put(file).then(()=>{
// // console.log("uploaded");
// //       })
    
//      }
const d= new Date().toISOString().slice(0, 10);
const writeUserData= async (date, authorCoursesFb,authorImg,authorName,courseDesc,courseLink,courseTitle,imgUrl,price,categoryFb,learningOutcomeFb, curriculumFb,  courseFeatureFb, descriptionFb) =>{
  await addDoc (collection (db, "courses6/" ), {
    date: `${d}`,
    authorCoursesFb: `${authorCourses}`,
    authorImg: `${authorImgFb}`,
    authorName: `${authorNameFb}`,
    courseDesc: `${courseDescFb}`,
    courseLink: `${courseTitleFb}`,
    courseTitle: `${courseTitleFb}`,
    imgUrl: `${save}`,
    price: `${priceFb}`,
   
    categoryFb:`${category}`,
    
    learningOutcomeFb: `${learningOutcome}`,
    curriculumFb: `${curriculum}`,
  
    courseFeatureFb: `${courseFeature}`,
    descriptionFb:`${description}`,
   
  });
alert("done"); 
document.getElementById("Buttom").style.display= "none";
  }


  
  const [data, setData] = useState([])
 useEffect(() => {
   const q = query(collection(db, "courses6"));
   const sub = onSnapshot (q, (querySnapshot) =>{
     var array = [];
     querySnapshot.forEach((doc)=>{
       array.push({...doc.data(), id: doc.id});
     });setData(array)
   });
   return () => {
    sub();
   }
 }, []); console.log(data);

 const [image , setImage] = useState('');

 const useStyles =makeStyles({
   field: {marginTop:20,
           marginBottom:20,
           display: "block" 
  }
 })
const classes =useStyles();



async function fileHandler (e) {
  // detect file
  setIsLoading(true);
  const fileLocal = e.target.files [0];
  // upload it to firebasestorage
  const fileRef = ref (storage, `documents / ${courseTitleFb}`);
  await uploadBytes (fileRef, fileLocal);
  // get download url
  var t = "";
  t = await getDownloadURL (fileRef);
  // handleInputChange();
  setSave(t);   setIsLoading(false);
 console.log(t);
}
console.log("after funcio ",save);








  return(

   <div className="course_input">
           <div className="course_input_top">
                
                      <TextField
                        variant="outlined"
                      id="outlined-textarea"
                      label="Author Name"
                      multiline
                      fullWidth
                    required
                    className={classes.field}
                      onChange={(e)=>setAuthorNameFb(e.target.value.trim())}
                    />
                  
                <TextField
                  variant="outlined"
                      id="outlined-textarea"
                      label="Course Title"
                      multiline
                      fullWidth
                    required
                    className={classes.field}
                      onChange={(e)=>setCourseTitleFb(e.target.value.trim())}
                    />
                    <TextField
                      variant="outlined"
                      id="outlined-textarea"
                      label="Price "
                      multiline
                      fullWidth
                    required
                    className={classes.field}
                      onChange={(e)=>setPriceFb(e.target.value.trim())}
                    /> 
                     <TextField
                 variant="outlined"
                      id="outlined-textarea"
                      label="Courses by Author(No)"
                      // placeholder="Placeholder"
                      multiline
                      fullWidth
                    required
                    className={classes.field}
                      onChange={(e)=>setAuthorCourses(e.target.value.trim())}
                    />
                      <TextField
                        variant="outlined"
                    id="outlined-textarea"
                    label="Course Category"
                    multiline
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e)=>setCategory(e.target.value.trim())}
                    />
      </div>
      <div className="course_input_bottom">
              <TextField
                variant="outlined"
                    id="outlined-textarea"
                    label="Course Description"
                    multiline
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e)=>setCourseDescFb(e.target.value.trim())}
                  />
              
                <TextField
                  variant="outlined"
                    id="outlined-textarea"
                    label="Course Feature"
                    multiline
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e)=>setCourseFeature(e.target.value.trim())}
                  />
            <TextField
              variant="outlined"
                    id="outlined-textarea"
                    label="Course Curriculum"
                    multiline
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e)=>setCurriculum(e.target.value.trim())}
                  />
                 <TextField
                   variant="outlined"
                    id="outlined-textarea"
                    label="Learning Outcome"
                    multiline
                    fullWidth
                    required
                    className={classes.field}
                    onChange={(e)=>setLearningOutcome(e.target.value.trim())}
                  />
        </div >
         <div  style={{display: "none" }}className = 'Buttom'  id = 'Buttom'> 
                       <div className="banner_span" style={{width:'450px', height:'300px', objectFit:'cover' }}> 
                        {displayImage.map((imageUrl, index) =>{
                            const img = URL.createObjectURL(imageUrl);
                            return <img src={img}  alt="course-1.jpg"  width="450" 
                            height="300"/>
                        })}
                    </div>
    
      </div>
      
        <Button
  variant="contained"
  component="label"
>
  Upload Banner
  <input
    type="file"
    hidden
    // onChange={handleInputChange} 
    // onChange = {fileHandler}
    onChange = {function (e){fileHandler(e); handleInputChange(e);}}
  />
</Button>
{isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
      type="submit"
      color="primary"
      variant="contained"
      endIcon={<KeyboardArrowRight/>}
      onClick={writeUserData}>
        Submit Cousre</Button>
                )}
</div>

)
}

export default Icons
