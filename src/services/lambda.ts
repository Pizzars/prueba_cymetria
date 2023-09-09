// import { Amplify, API } from 'aws-amplify'
// import awsmobile from './aws-exports'

import { postData } from 'src/proxy/BackendREST'
import { ResponseType } from 'src/proxy/responseData'

// Amplify.configure({ ...awsmobile, ssr: true })
// const myAPI = 'aequsst'
// const pathSendEmail = '/aequsst'

interface ContactDto {
  name: string
  email: string
  phone: string
  message: string
}

export const sendContactEmail = async (form: ContactDto): Promise<boolean> => {
  try {
    const response = await postData('contact', form)
    if (response && response.status === ResponseType.OK) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
