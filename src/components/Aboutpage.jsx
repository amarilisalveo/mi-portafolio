import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre <span>Mí</span></h3>
                        <p className='aboutdetails'> Soy una desarrolladora que le gusta trabajar con tecnologias Frontend. He trabajado con tecnologias como React.js y  Wordpress. Tengo curiosidad por aprender más sobre el desarrollo web y las nuevas tecnologias. 
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage