import React, { useState, useEffect } from 'react';
import { Course } from './Course';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const base_url = 'http://localhost:8080'; // Define base URL as a constant

export const AllCourses = () => {
  useEffect(() => {
    document.title = "All Courses";
    getAllCoursesFromServer(); // Call the function to fetch courses on component mount
  }, []);

  const [data, setData] = useState([
    
     
    
  ]);

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`)
      .then(response => {
        // Update the state with the response data
        console.log("working")
        setData(response.data);
      })
      .catch(error => {
        // Handle error
        console.log(error); 
      });
  };


  const deleteCourse = (id) =>{
    toast.success('Course Deleted..');
    setData(data.filter((c) =>
      c.id !== id
    ));
  }

  return (
    <>
    <ToastContainer />
      {
        data.length > 0 ?
          data.map((item, key) => <Course key={key} item={item} deleteData = {deleteCourse} />) :
          <p>No courses available</p>
      }
    </>
  );
};
