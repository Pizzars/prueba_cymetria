import BannerAbout from './components/BannerAbout'
import InfoSection from './components/InfoSection'
import about from '../../assets/about/about.jpg'
import aboutUs from '../../assets/about/about_us.jpg'
import team from '../../assets/about/team.jpg'

const About = () => {
  return (
    <div>
      <BannerAbout />
      <InfoSection
        title='¿Quiénes somos?'
        text={`En AEQUSST  estamos comprometidos con la salud y bienestar de los trabajadores y las empresas. Somos una empresa especializada en ofrecer servicios integrales de salud ocupacional y exámenes médicos ocupacionales, dedicados a garantizar que los empleados se desempeñen en un entorno seguro y saludable.`}
        image={about.src}
      />
      <InfoSection
        title='Nuestro Enfoque'
        text={`Entendemos que la salud de los trabajadores no solo es un requisito regulatorio, sino una inversión en la productividad y el éxito sostenible de las empresas. Nuestros servicios no se limitan a realizar exámenes médicos, sino que abarcan evaluaciones exhaustivas y personalizadas que se adaptan a las necesidades de cada industria y puesto de trabajo.`}
        image={aboutUs.src}
        left={false}
        color='bg-transparent'
      />
      <InfoSection
        title='Nuestro Equipo de Expertos'
        text={`Contamos con un equipo multidisciplinario de profesionales altamente capacitados y comprometidos con la salud ocupacional. Nuestros médicos especialistas en seguridad laboral y otros profesionales de la salud están dedicados a proporcionar evaluaciones precisas, asesoramiento competente y recomendaciones concretas para garantizar que los empleados estén en su mejor estado de salud mientras cumplen con sus responsabilidades laborales.`}
        image={team.src}
      />
      {/* <InfoSection
        title='Visión'
        text={`Nuestra visión en AEQUSST es convertirnos en la empresa líder en seguridad y salud en el trabajo en Colombia, reconocida por nuestra excelencia en servicios de salud ocupacional, asesoría y consultoría. Buscamos ser referentes en la promoción de entornos laborales seguros, colaborando activamente en la prevención de accidentes y enfermedades laborales, y fomentando una cultura de bienestar y cuidado de la salud en las organizaciones.`}
        image={about.src}
        left={false}
        color='bg-transparent'
      /> */}
      <InfoSection
        title='Contáctanos'
        color='bg-transparent'
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
