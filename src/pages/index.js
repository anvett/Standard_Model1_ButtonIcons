import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIconsButton from "@/components/ContactIconsButton/contactIconsButton";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import styles from "../styles/Home.module.scss";

export default function testpage() {
  //-----------------------------------------------
  // Contact Data Array
  //-----------------------------------------------

  const contactData = [
    {
      href: "tel:1234567890",
      icon: "/icons/call_c.png",
      alt: "Phone",
      title: "Contáctame",
    },
    {
      href: "mailto:info@example.com",
      icon: "/icons/email_c.png",
      alt: "Email",
      title: "Email",
    },
    {
      href: "https://wa.me/1234567890",
      icon: "/icons/whatsapp_c.png",
      alt: "WhatsApp",
      title: "WhatsApp",
    },
    // {
    //   href: "https://t.me/username",
    //   icon: "/icons/telegram_c.png",
    //   alt: "Telegram",
    //   title: "Telegram",
    // },
    {
      href: "https://maps.google.com/?q=Central Park, NY",
      icon: "/icons/location_c.png",
      alt: "Location",
      title: "Ubicación",
    },
  ];

  //-----------------------------------------------
  // Image Gallery Data Array
  //-----------------------------------------------

  const images = [
    {
      thumbnail: "/images/componentes/cirugia_robotica.jpg",
      full: "/images/componentes/cirugia_robotica.jpg",
      title: "Cirugía Robótica",
      description:
        "La cirugía robótica es una técnica quirúrgica en la que el cirujano opera al paciente a través de un sistema robótico.",
      descriptionItems: [
        "Mínimamente invasiva",
        "Precisión y control",
        "Recuperación más rápida",
        "Menos dolor y sangrado",
        "Cicatrices más pequeñas",
        "Menor riesgo de infección",
        "Menor tiempo de hospitalización",
        "Menor tiempo de recuperación",
      ],
      highlightedText: "Incluye 1 consulta de valoración",
      alt: "Oferta 1",
    },
    {
      thumbnail: "/images/componentes/cirugia.jpg",
      full: "/images/cirugia.jpg",
      title: "Cirugía Ocólogica",
      description: "Cirugía oncológica General y Laparoscópica",
      descriptionItems: [
        "Cirugía oncológica especializada", 
        "Estudio y tratamiento de tumores", 
        "Cirugía laparoscópica", 
        "Cirugía de colon y recto",
      ],
      highlightedText: "Incluye 1 consulta de valoración",
      alt: "Oferta 2",
    },
    {
      thumbnail: "/images/componentes/hospital.jpg",
      full: "/images/componentes/hospital.jpg",
      title: "Director Hospital Eugenio Espejo",
      description: "Hospital de Especialidades Eugenio Espejo",
      descriptionItems: [
        "Hospital de tercer nivel",
        "Atención de especialidades médicas",
        "Atención de emergencias",
        "Hospitalización",
        "Cirugías",
        "Consultas médicas",
        "Exámenes de laboratorio",
      ],
      highlightedText: "Dirección medica del Hospital Eugenio Espejo",
      alt: "Oferta 3",
    },
  ];

  return (
    <>
      <Head>
        <title>Ing. Ericka Veintimilla</title>
        <meta name="description" content="Dr. Carlos Veintimilla Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://drcarlosveintimilla.anvetcard.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Dr. Carlos Veintimilla" />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://erickaveintimilla.businessdigicards.com/images/shared_image.jpg"
        />
      </Head>
      <Layout>
        <Container fluid className={styles.mainContainer}>
          {/* Profile Section */}

          <section className={styles.profileSection}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Profile Image Section */}

              <Row>
                <Col className={styles.ProfileImageSection}>
                  <ProfileImage
                    src="/images/perfil/profile.jpg"
                    alt="Dr. Carlos Veintimilla T."
                    size={250}
                  />
                </Col>
              </Row>

              {/* Personal Info Section */}
              <Row>
                <Col>
                  <PersonalInfo
                    name="Dr. Carlos Veintimilla"
                    title="Director Hospital Eugenio Espejo"
                    description="Médico Ocólogo especialista en cirugía general y laparoscópica"
                  />
                </Col>
              </Row>

              {/* Social Networks Section */}

              <Row>
                <Col>
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/likeatemkt?mibextid=ZbWKwL"
                    instagram="https://www.instagram.com/likeate.digital/?igsh=bzh1c3l0NGt2MmYx"
                    tiktok="https://www.tiktok.com/@marketing.con.ericka?_t=8knFmU8Fup3&_r=1"
                    linkedin="https://www.linkedin.com/in/ericka-veintimilla-1b1b1b1b/"
                  />
                </Col>
              </Row>

              {/* Contact Info Section */}
              <Row>
                <Col className={styles.contactButtonSection}>
                  <ContactIconsButton
                    contacts={contactData}
                    buttonClassName="customButtonClass" // Clases adicionales para personalizar los botones
                    titleClassName="customTitleClass" // Clase para personalizar los títulos
                    iconClassName="customIconClass" // Clase para personalizar los íconos
                    colClassName="customColClass" // Clase para personalizar la columna
                    containerContactButton="customContainerClass" // Clase para personalizar el contenedor
                  />
                </Col>
              </Row>
            </motion.div>
          </section>

          {/* Image Gallery Section */}

          <section className={styles.imageGallerySection}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Row>
                <Col>
                  <h1 className={styles.galleryTitle}>Imágenes Destacadas</h1>
                  <p className={styles.galleryDescription}>
                    Especialidades y servicios que ofrezco
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ImageGallery images={images} />
                </Col>
              </Row>
            </motion.div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
