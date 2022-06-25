import { Container } from "react-bootstrap";
import ContactForm from "../../components/Contact/Contact";
export default function Contact() {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ContactForm />
    </Container>
  );
}
