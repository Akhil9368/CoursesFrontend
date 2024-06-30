import React from 'react';
import { Card, CardBody, CardSubtitle, Button, Container } from 'reactstrap';
import axios from 'axios';
import {toast } from 'react-toastify';
import {deleteData} from '../Components/AllCourses';
// import Modal from '../Components/Modal'


const base_url = 'http://localhost:8080';

export const Course = ({ item , deleteData}) => {
  function deleteCourse(id) {
    console.log(`Attempting to delete course with ID: ${id}`);
    axios.delete(`${base_url}/courses/${id}`)
      .then(response => {
        console.log("Delete request was successful:", response);
       
        deleteData(id);

      })
      .catch(error => {
        console.error("Error during delete request:", error);
        toast.error('Course not deleted..');
      });
  }
   


   
  return (
    
    <Card style={{ marginBottom: '10px', width: '40%',marginLeft:'15px'}}>
      <CardBody  >
         
        <div style={{ height:'150px', padding:'10px', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
        <CardSubtitle className="font-weight-bold" style={{fontWeight:'bold'}}>{item.tittle}</CardSubtitle>
        <CardSubtitle>{item.description}</CardSubtitle>
        </div>
        <Container style={{ display: 'flex', justifyContent:'center', marginTop: '30px' }}>
          <Button color='danger' onClick={() => {
            deleteCourse(item.id);
            console.log(item.id);
            
          }}>Remove</Button>
          <Button color='warning' className='ms-2'>Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
  

}
