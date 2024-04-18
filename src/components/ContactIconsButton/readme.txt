# ContactIconsButton Component

El componente `ContactIconsButton` es una herramienta versátil para mostrar una serie de botones de contacto con íconos y texto, diseñada para facilitar la conexión con servicios externos como llamadas telefónicas, correos electrónicos y mapas.

## Estructura JSX

El componente se construye utilizando React y Next.js Image para una carga optimizada de imágenes. Está diseñado para ser usado dentro de un entorno React-Bootstrap, aprovechando los componentes `Container`, `Row`, y `Col` para un diseño responsivo.

### Código JSX

```jsx
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
Estilos SCSS
El SCSS para el componente está diseñado para ser modular y fácilmente adaptable. Utiliza variables de SCSS para colores y dimensiones que pueden ser configuradas en un archivo de variables globales.

Código SCSS
scss
Copy code
@import '../../styles/variables.scss'; // Importa variables globales

.contactIconsContainer {
  padding: 20px 0;
}

.contactIconsRow {
  justify-content: center;
}

.contactIconsCol {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.contactIconButton {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(50% - 10px);
  margin: 10px 0;
  padding: 10px;
  background-color: $primary-color;
  color: $secondary-color;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.icon {
  margin-right: 10px;
  width: 40px;
  height: 40px;
}

.iconTitle {
  font-size: 14px;
}

@media (max-width: 575px) {
  .contactIconButton {
    width: calc(50% - 10px);
  }
}

@media (min-width: 576px) {
  .contactIconsCol {
    max-width: 576px;
    margin: auto;
  }
}
Uso del Componente
Aquí hay un ejemplo de cómo utilizar el componente ContactIconsButton en una página. Debes proporcionar un array de objetos con los datos de contacto, incluyendo href, icon, alt, y title.

Ejemplo de Uso
jsx
Copy code
import React from 'react';
import ContactIconsButton from './ContactIconsButton'; // Asegúrate de que la ruta es correcta

function ContactPage() {
  const contactData = [
    {
      href: 'tel:1234567890',
      icon: '/icons/call_c.png',
      alt: 'Phone',
      title: 'Llámanos'
    },
    {
      href: 'mailto:info@example.com',
      icon: '/icons/email_c.png',
      alt: 'Email',
      title: 'Envíanos un correo'
    },
    // Más contactos...
  ];

  return (
    <div>
      <h1>Contacta con Nosotros</h1>
      <ContactIconsButton
        contacts={contactData}
        buttonClassName="customButtonClass"
        titleClassName="customTitleClass"
        iconClassName="customIconClass"
        colClassName="customColClass"
        containerContactButton="customContainerClass"
      />
    </div>
  );
}

export default ContactPage;
r
Copy code

Este `README.txt` cubre la descripción del componente, sus estructuras JSX y SCSS, y un ejemplo de uso que ilustra cómo integrarlo en una aplicación. Puedes expandir esta documentación con más detalles específicos según sea necesario.