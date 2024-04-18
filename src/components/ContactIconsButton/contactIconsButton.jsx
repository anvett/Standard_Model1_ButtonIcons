import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./contactIconsButton.module.scss";

const ContactIconsButton = ({
  contacts,
  buttonClassName = "",
  titleClassName = "",
  iconClassName = "",
  colClassName = "",
  containerContactButton = ""
}) => {
  return (
    <Container fluid className={`${styles.contactIconsContainer} ${containerContactButton}`}>
      <Row className={styles.contactIconsRow}>
        <Col className={`${styles.contactIconsCol} ${colClassName}`}>
          {contacts.map((contact, index) => (
            <button key={index} 
                    className={`${styles.contactIconButton} ${buttonClassName}`} 
                    onClick={() => window.open(contact.href)}>
              <Image className={`${styles.icon} ${iconClassName}`} src={contact.icon} alt={contact.alt} width={40} height={40} />
              <span className={`${styles.iconTitle} ${titleClassName}`}>{contact.title}</span>
            </button>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactIconsButton;
