import { Menu } from './Components/Menu';
import './App.css';
import { AddCourses } from './Components/AddCourses';
import { AllCourses } from './Components/AllCourses';

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Row, Col } from "react-bootstrap"
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Container style={{ maxWidth: '990px', marginTop: '25px' }}>
          <Header />
          <Row >
            <Col md={4} style={{ marginTop: '6%' }}>
              <Menu />
            </Col>
            <Col md={8} style={{ marginTop: '6%', display:'flex' ,flexWrap:'wrap'}}>
              <Routes >
                <Route path='/' Component={Home} exact />
                <Route path='/add-course' Component={AddCourses} exact />
                <Route path='/view-courses' Component={AllCourses} exact />
                <Route path='/about-us' Component={About} exact/>
                <Route path='/contact-us' Component={Contact} exact/>

              </Routes>

            </Col>
          </Row>
        </Container >
      </Router>
    </div>

  );
}

export default App;
