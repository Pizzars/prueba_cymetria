import service1 from '../../../assets/services/ANALISI_DE_PUESTO_DE_TRABAJO.jpg'
import service2 from '../../../assets/services/FONOAUDILOGIA.jpg'
import service3 from '../../../assets/services/MEDICINA_GENERAL.jpg'
import service4 from '../../../assets/services/OPTOMETRIA.jpg'
import service5 from '../../../assets/services/PSICOLOGIA.jpg'
import ServiceItem from './ServiceItem'

export const services = [
  {
    id: 1,
    title: 'ANALISI DE PUESTO DE TRABAJO',
    description:
      'El análisis de puesto de trabajo en salud ocupacional es un proceso fundamental para evaluar en detalle las tareas, responsabilidades y condiciones en las que los empleados desempeñan sus funciones. Esta metodología se utiliza con el propósito de identificar riesgos potenciales, mejorar la seguridad y bienestar de los trabajadores, y optimizar la eficiencia en el entorno laboral.',
    icon: service1.src
  },
  {
    id: 2,
    title: 'FONOAUDILOGIA',
    description: `Durante una audiometría en salud ocupacional, se emplean técnicas y equipos de última generación para medir la audición de los empleados en diversas frecuencias y niveles de sonido. Esto permite identificar tempranamente cualquier signo de pérdida auditiva inducida por el ruido y tomar medidas preventivas para evitar un deterioro auditivo mayor.
    
    En resumen, la audiometría en salud ocupacional es una herramienta esencial para mantener la salud auditiva de los trabajadores en entornos ruidosos. Proporciona información valiosa para implementar medidas preventivas, asegurar la seguridad laboral y promover un ambiente de trabajo saludable y productivo.`,
    icon: service2.src
  },
  {
    id: 3,
    title: 'MEDICINA GENERAL',
    description:
      'La Medicina General con Énfasis Osteomuscular en Salud Ocupacional es esencial para promover la salud y el bienestar de los trabajadores, minimizando los riesgos asociados con movimientos repetitivos, malas posturas y otros factores que pueden afectar el sistema osteomuscular. Al cuidar de la salud de los empleados, se contribuye a un entorno laboral más seguro, eficiente y productivo, beneficiando tanto a los trabajadores como a las empresas.',
    icon: service3.src
  },
  {
    id: 4,
    title: 'OPTOMETRIA',
    description:
      'La Optometría en Salud Ocupacional es una rama especializada de la atención visual que se enfoca en la evaluación, preservación y mejora de la salud ocular de los trabajadores en el entorno laboral. Esta disciplina busca garantizar que la visión de los empleados sea óptima para desempeñar sus tareas de manera eficiente y segura, al mismo tiempo que previene y aborda problemas visuales relacionados con las condiciones laborales.',
    icon: service4.src
  },
  {
    id: 5,
    title: 'Baterías de riesgo psicosocial',
    description: `Las baterías de riesgo psicosocial de trabajo en salud ocupacional son herramientas fundamentales para evaluar y comprender los factores psicológicos y sociales que influyen en el bienestar mental de los trabajadores en su entorno laboral. Estas baterías están diseñadas para identificar y analizar los aspectos del trabajo que pueden afectar la salud mental, el equilibrio emocional y la calidad de vida de los empleados.
    Las baterías de riesgo psicosocial de trabajo tienen varios propósitos:

    
    Identificación de factores de riesgo: Permiten reconocer los elementos del entorno laboral que podrían estar relacionados con el estrés, el agotamiento y otros problemas de salud mental.
    
    Prevención de riesgos: Al identificar los riesgos psicosociales, se pueden tomar medidas para prevenir y abordar posibles problemas de salud mental en el trabajo.
    
    Mejora del bienestar: Al realizar cambios basados en los resultados de la batería, se puede promover un ambiente laboral más saludable y satisfactorio.
    
    Potenciación del rendimiento: Al optimizar los factores psicosociales, se puede mejorar el desempeño laboral y la calidad del trabajo.`,
    icon: service5.src
  }
]

const ServiceList = () => {
  return (
    <div
      className='flex flex-col justify-center items-center py-12 bg-white'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 content-center '>
        {services.map(service => (
          <ServiceItem service={service} key={service.id} />
        ))}
      </div>
    </div>
  )
}

export default ServiceList
