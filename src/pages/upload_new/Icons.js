import React, {useState, useEffect} from 'react'
import icons from './icons.css'
// import fireDb from './firebase'
// import { collection, addDoc } from "./firebase/firestore"; 
import {collection, addDoc, query, onSnapshot} from "firebase/firestore";
import {db, storage} from "./firebase";
import Maps from '../maps/Maps';

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';


function Icons() {
const [description, setDescription] = useState("Description")
const [title, setTitle] = useState("Title")
const [cost, setCost] = useState("$")
const [curriculum, setCurriculum] = useState("Curriculum")
const [instructors, setInstructors] = useState("Instructors")
const [author, setAuthor] = useState("Author(s)")
const [category, setCategory] = useState("Category")
const [learningOutcome, setLearningOutcome] = useState("Learning Outcome")
const [courseFeature, setCourseFeature] = useState("Feature")
const [authorCourses,setAuthorCourses] = useState("Nill")
const [authorImg,setAuthorImg] = useState ("author.jpg")
const [imgUrl, setImgUrl] = useState ("course-1.jpg")


const [displayImage, setDisplayImage] = React.useState([]);
    const [previewImage, setPreviewImage] = React.useState('');
    const handleInputChange = (event) =>{
        return setDisplayImage([...event.target.files]);
    }
    const upload = ()=>{
       const file = displayImage;

     }

const writeUserData= async ( imgUrl,price, courseTitle, categoryFb,overviewFb,learningOutcomeFb, curriculumFb, authorName, courseFeatureFb, courseDesc,instructorsFb, authorCourses, authorImg) =>{
  await addDoc (collection (db, "courses3/" ), {
    imgUrl: `${imgUrl}`,
    price: `${cost}`,
    courseTitle: `${title}`,
    categoryFb:`${category}`,
    learningOutcomeFb: `${learningOutcome}`,
    curriculumFb: `${curriculum}`,
    authorName: `${author}`,
    courseFeatureFb: `${courseFeature}`,
    courseDesc:`${description}`,
    instructorsFb: `${instructors}`,
    authorCourses:   `${authorCourses}`,
    authorImg:  `${authorImg}`
  });
alert("done")
  }
  const [data, setData] = useState([])
 useEffect(() => {
   const q = query(collection(db, "courses"));
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

 

  return(<div className="cstatener">
   {/* <Maps data={data}/> */}
   {/* <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        /> */}
    <div className="top">
      <div className="Course_Banner_Container">
        <div className = 'Course_Banner_Top'>
        <span className="banner_span" style={{width:"300px", height:'200px', objectFit:'cover'}}> 
                        {displayImage.map((imageUrl, index) =>{
                            const img = URL.createObjectURL(imageUrl);
                            return <img src={img}  alt="the uploaded img"/>
                        })}
                    </span>
       <span className="course_banner_span">{cost}</span>
         </div>
         <div className="Course_Banner_Bottom">
        <span className="Course_Banner_Bottom_span1" > {title} </span>
        <span className="Course_Banner_Bottom_span2">{description}</span>
         </div>
         <form>
                <input type='file' multiple accept="image/*" onChange={handleInputChange} name='imagaFile' id='imageId' /> 
            </form>
            
            
    </div>
    <div className="Course_Descriptions">
           <textarea placeholder="Enter Course Feature" onChange={(e)=>setCourseFeature(e.target.value.trim())}></textarea>
           <textarea placeholder="Enter Learning Outcome"  onChange={(e)=>setLearningOutcome(e.target.value.trim())}></textarea>
           <textarea placeholder="Enter Course Category"  onChange={(e)=>setCategory(e.target.value.trim())}>{category}</textarea>
         </div>
    </div>
    <div className="buttom">
      <div className="buttom_top">
   
        <div className="inputs" >
        <input className="despription_input" maxlength="250" onChange={(e)=>setDescription(e.target.value.trim())}/>
        <span className="description_span">Enter Course Description</span>
      </div>
      <div className="inputs"> 
      <input className="despription_input " maxlength="50" onChange={(e)=>setTitle(e.target.value.trim())}/>
      <span className="Title_Span">Enter Course Titile</span> </div>
       <div className="inputs"> 
      <input className="despription_input " maxlength="50" onChange={(e)=>setCurriculum(e.target.value.trim())}/>
      <span className="Title_Span">Enter Course Curriculum</span> </div>
     
      </div>
      <div className="bottom_bottom">
      <div className="inputs"> 
      <input className="despription_input " maxlength="50" onChange={(e)=>setInstructors(e.target.value.trim())}/>
      <span className="Title_Span">Enter Course Instructors</span> </div>
      <div className="inputs"> 
      <input className="despription_input " maxlength="50" onChange={(e)=>setAuthor(e.target.value.trim())}/>
      <span className="Title_Span">Enter Course Author</span> </div>
      <div  className= "inputs">
      <input className="despription_input" maxlength="10" onChange={(e)=>setCost(e.target.value.trim())}/>
         <span>Set Cost</span></div>
      
   
         <div className="upload_image">
     <input type="file" id="myFile" onChange={(e)=>upload()}/>
     </div>
    </div>
    </div>
    <div>
    </div>
    <div className="send_button"><button onClick={writeUserData}>Upload Course</button>     </div>

    </div>
)
}

export default Icons
