import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import reachhigher from '/src/assets/images/reach-higher.jpg'
import masercondosales from "/src/assets/images/maser-condorsales.jpg";
import netfliximage from "/src/assets/images/superexploder.jpg";
import nickjr from "/src/assets/images/nickjr-sweepstakes.jpg";
import multibank from "/src/assets/images/multibank.jpg";
import todolist from "/src/assets/images/todolist.jpg";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={reachhigher}
                isBlog={false}
                title="Reach Higher"
                description="Desarrollado en WordPress con el tema de Divi, plugins,
                JavaScript , Jquery y CSS."
                ghLink="https://www.reachhigher.org/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={masercondosales}
                isBlog={false}
                title="Maser Condor Sales"
                description="Se desarrollaron las paginas en WordPress con el tema WPBakery
                Builder, plugins y CSS."
                ghLink="https://www.masercondosales.com/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Superexploder"
                description="Se desarrollo en WordPress con el tema Divi, plugins,
                CSS, Google analytics y flexbox"
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nickjr}
                isBlog={false}
                title="Nick Jr Sweepstakes"
                description="Mantenimiento de
                modulos creados para el single page application utilizando
                React.js , sass y  webpack."
                ghLink="https://www.nickjrsweepstakes.com/ "
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={multibank}
                isBlog={false}
                title="Multibank"
                description="Mantenimiento de la pagina de Multibank desarrollada con
                HTML,CSS, ASP."
                ghLink="https://www.multibank.com.pa/es"
              />
            </Col>

            
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;