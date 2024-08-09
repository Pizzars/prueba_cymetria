'use client'
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

  // 1018473282

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

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (hasRepeatedSequence(document)) {
      toast.error('El número de documento contiene secuencias repetidas.')
      return
    }

    toast.loading('Buscando documento...')
    const res = await getData('')
    toast.dismiss()
    console.log(res)
    if (res.status === ResponseType.OK) {
      if (res.data && res.data.estudiantes_aprobados) {
        const list: Student[] = res.data.estudiantes_aprobados
        if (list.length) {
          for (let i = 0; i < list.length; i++) {
            const student = list[i]
            if (student.estudiante.num_documento === document) {
              setResult(student)
              setDocument('')
              toast.success('Consulta exitosa')
              return
            }
          }
          toast.error('Documento no encontrado')
        } else {
          toast.error('No se encontraron resultados')
        }
        return
      }
    }
    toast.error('Error al realizar la consulta, intentelo más tarde')
  }

  return (
    <div className='flex flex-col justify-center items-center'>
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
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
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
