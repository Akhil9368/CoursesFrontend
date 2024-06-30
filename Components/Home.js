import React, { useState,useEffect} from 'react'

import { Button } from 'reactstrap';
export const Home = () => {
  useEffect(()=>{
    document.title = "Home || LearnCode with Akhil";
  },[])
  const [Name,setName] = useState("Akhil Soni")
    return (
        <div>
          
          <div className='text-start'>
            <h1  style={{ color: 'blue' }}>Hii, {Name} </h1>
            <p className="lead">This website gives you the ample of courses, learn & start your carrrier in IT department</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead text-center" >
              <Button color="primary">Learn More</Button>
            </p>
          </div>
        
        </div>
      );
}
