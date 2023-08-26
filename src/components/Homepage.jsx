import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Soy Amarilis</h2>
            <span></span>
            <Text />
            <button onClick={() => {
             window.location ='mailto:amariveth@gmail.com';
            }}
              className='socailmediabtn'>< AiOutlineGoogle  className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/amarilis-alveo/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://github.com/amarilisalveo");
            }}
              className='socailmediabtn'><AiOutlineGithub className='icon' /></button>
            
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home