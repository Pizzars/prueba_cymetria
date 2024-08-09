import { useState } from 'react'
import Button from '../general/buttons/Button'
import Input from '../general/inputs/Input'
import { getData } from 'src/proxy/BackendREST'
import { toast } from 'react-toastify'
import { ResponseType } from 'src/proxy/responseData'
import { Student } from 'src/proxy/models'
import DataCard from './components/DataCard'

const Home = () => {
  const [document, setDocument] = useState<string>('')
  const [result, setResult] = useState<Student | null>(null)

  // Documento que muestra datos: 1018473282

  // Función para verificar las secuencias repetidas
  const hasRepeatedSequence = (str: string) => {
    // Dividir la cadena en todas las posibles longitudes de subsecuencia
    for (let i = 1; i <= str.length / 2; i++) {
      const pattern = str.slice(0, i)
      const regex = new RegExp(`^(${pattern})+$`)
      if (regex.test(str)) {
        return true
      }
    }
    return false
  }

  // Función para controlar el envio de los datos
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (hasRepeatedSequence(document)) {
      toast.error('El número de documento contiene secuencias repetidas.')
      return
    }

    toast.loading('Buscando documento...')
    const res = await getData(`consulta/${document}`, {}, true)
    toast.dismiss()
    console.log(res)
    if (res.status === ResponseType.OK) {
      setResult(res.data)
      toast.success('Consulta exitosa')
    }
    toast.error(res.data.error)
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen pt-24 pb-8 px-8 max-w-full'>
      {result ? (
        <div className='text-secondary flex flex-col'>
          <DataCard
            title='Datos del estudiante'
            data={[
              { label: 'ID', value: result.id },
              {
                label: 'Nombre',
                value: `${result.estudiante.nombres} ${result.estudiante.apellidos}`
              },
              { label: 'Tipo de documento', value: result.estudiante.tipo_documento },
              { label: 'Númeto de documento', value: result.estudiante.num_documento },
              { label: 'Correo', value: result.estudiante.email }
            ]}
          />
          <DataCard
            title='Datos del curso'
            data={[
              {
                label: 'Nombre del curso',
                value: `${result.curso.nombreCurso}`
              },
              { label: 'Código', value: result.curso.codigoCurso },
              { label: 'Nivel', value: result.curso.nivel },
              { label: 'Modalidad', value: result.curso.modalidad },
              { label: 'Estado', value: result.aprobado ? 'Aprovado' : 'Reprovado' }
            ]}
          />
          <Button
            text='Nueva consulta'
            className='mx-auto'
            onClick={() => setResult(null)}
            type='button'
          />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center border border-primary w-full rounded-lg p-4 shadow-lg bg-white mb-4'
        >
          <Input
            value={document}
            onChange={e => {
              // Filtrar solo los dígitos numéricos
              const filteredValue = e.target.value.replace(/\D/g, '')
              setDocument(filteredValue)
            }}
            type='text'
            label='Documento'
            placeholder='1001001001'
            maxLength={10}
            minLength={6}
          />
          <Button text='Consultar' type='submit' className='w-full mt-4' />
        </form>
      )}
    </div>
  )
}

export default Home
