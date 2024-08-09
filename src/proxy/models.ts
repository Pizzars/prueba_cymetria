interface Course {
  nombreCurso: string
  codigoCurso: string
  nivel: string
  modalidad: string
}

interface StudentData {
  nombres: string
  apellidos: string
  tipo_documento: string
  num_documento: string //'1018473282',
  email: string
}

export interface Student {
  aprobado: boolean
  curso: Course
  id: string
  estudiante: StudentData
}
