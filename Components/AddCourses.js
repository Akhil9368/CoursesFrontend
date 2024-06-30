import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';



const base_url = 'http://localhost:8080';

export const AddCourses = () => {
    const [course, setCourse] = useState({
        id: '',
        tittle: '',
        description: ''
    });

    useEffect(() => {
        document.title = "Add Courses";
    }, []);

    
      

    const handleForm = (e) => {
        e.preventDefault();
        console.log(course);
        addData(course);
       
    };

    const addData = (data) => {
        console.log('Sending POST request with data:', data);
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log('Response from server:', response);
                console.log("Success...");
                toast.success("Course Added!");
                setCourse({ id: '', tittle: '', description: '' }); // Clear the form fields
            },
            (error) => {
                console.error('Error response from server:', error.response);
                console.log("Error...");
                toast.error("Failed to add course");
            }
        );
    };

    // Creating request for adding the POST details 
  

    return (
        <>
            <ToastContainer />
            <Form onSubmit={handleForm} style={{width:'100%'}}>
                <FormGroup>
                    <label htmlFor="courseId" style={{ display: "flex", justifyContent: "start", paddingLeft: "5px" }}>Course Id</label>
                    <Input
                        id='courseId'
                        placeholder='Enter the Course Id'
                        type='number'
                        name="courseId"
                        value={course.id}
                        onChange={(e) => {
                            setCourse({ ...course, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="courseName" style={{ display: "flex", justifyContent: "start", paddingLeft: "5px" }}>Course Title</label>
                    <Input
                        id='courseName'
                        placeholder='Enter the Course Title'
                        type='text'
                        name="courseName"
                        value={course.tittle}
                        onChange={(e) => {
                            setCourse({ ...course, tittle: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="courseDesc" style={{ display: "flex", justifyContent: "start", paddingLeft: "5px" }}>Course Description</label>
                    <Input
                        id='courseDesc'
                        placeholder='Enter the Course Description'
                        type='textarea'
                        name="courseDesc"
                        value={course.description}
                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container>
                    <Button type='submit'>Add Details</Button>
                    <Button type='button' color='warning' className='ms-3' onClick={() => setCourse({ id: '', tittle: '', description: '' })}>Clear</Button>
                </Container>
            </Form>
        </>
    );
};
