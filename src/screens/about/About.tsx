import BannerAbout from './components/BannerAbout'
import InfoSection from './components/InfoSection'
import about from '../../assets/about/about.jpg'
import aboutUs from '../../assets/about/about_us.jpg'

const About = () => {
  return (
    <div>
      <BannerAbout />
      <InfoSection
        title='¿Quiénes somos?'
        text={`AEQUSST Medicina Preventiva SAS es una empresa líder en el campo de la seguridad y salud
          en el trabajo en Colombia. Nos especializamos en brindar asesoría y consultoría en salud
          ocupacional a diversas industrias y empresas de todos los tamaños. Además, ofrecemos una
          amplia gama de exámenes médicos ocupacionales para evaluar la aptitud y prevenir riesgos
          laborales.`}
        image={about.src}
      />
      <InfoSection
        title='Conoce un poco más de AEQUSST'
        text={`AEQUSST Medicina Preventiva SAS fue fundada en el año 2005 con el propósito de brindar servicios especializados en seguridad y salud en el trabajo en Colombia. Desde sus inicios, la empresa se ha destacado por su compromiso inquebrantable con la protección y bienestar de los trabajadores, colaborando estrechamente con empresas de diversos sectores para garantizar entornos laborales seguros y saludables. A lo largo de los años, AEQUSST ha logrado construir una sólida reputación basada en la calidad de sus servicios y la dedicación de su equipo de profesionales altamente capacitados.`}
        image={aboutUs.src}
        left={false}
        color='bg-transparent'
      />
      {/* <InfoSection
        title='Misión'
        text={`Nuestra misión en AEQUSST es promover y preservar la salud y seguridad de los trabajadores, brindando servicios integrales de salud ocupacional y asesoría especializada. Nos comprometemos a ofrecer soluciones personalizadas y de calidad, adaptadas a las necesidades de cada cliente, con el objetivo de minimizar los riesgos laborales y garantizar un entorno laboral seguro y saludable.`}
        image={about.src}
      />
      <InfoSection
        title='Visión'
        text={`Nuestra visión en AEQUSST es convertirnos en la empresa líder en seguridad y salud en el trabajo en Colombia, reconocida por nuestra excelencia en servicios de salud ocupacional, asesoría y consultoría. Buscamos ser referentes en la promoción de entornos laborales seguros, colaborando activamente en la prevención de accidentes y enfermedades laborales, y fomentando una cultura de bienestar y cuidado de la salud en las organizaciones.`}
        image={about.src}
        left={false}
        color='bg-transparent'
      /> */}
      <InfoSection
        title='Contáctanos'
        text={`Si deseas más información sobre nuestros servicios o tienes alguna consulta, no dudes en contactarnos. Estamos aquí para ayudarte. ¡Estamos ansiosos por escucharte y colaborar en tus necesidades de seguridad y salud en el trabajo! Puedes comunicarte con nosotros.`}
      >
        <button className='bg-secondary text-primary font-bold text-md mt-8 py-2 px-4 rounded-lg'>
          Contactar ahora
        </button>
      </InfoSection>
    </div>
  )
}

export default About
