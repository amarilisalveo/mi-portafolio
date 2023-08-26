import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Envia un mensaje</h2>
        <p className="contactpara">
        Actualmente estoy buscando oportunidades para un puesto de desarrollador front-end.
         <br /> Si hay alguna vacante mi bandeja de entrada está siempre abierta.
         <br />
          ¡Respondere lo mas pronto posible!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.location ='mailto:amariveth@gmail.com';
          }}
        >
          Enviar
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>rahulvijay</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;