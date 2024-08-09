/* eslint-disable no-unused-vars */

import axios from 'axios'
import queryString from 'query-string'
import { ResponseModel, ResponseType } from './responseData'
import { getToken } from 'src/hooks/useAuth'

// Ruta base para las consultas al backend
const path = 'http://localhost:4000'

// Definición de headers base para llamar el backend
const baseHeaders = {
  'Content-Type': 'application/json'
}

// Función para generar los headers necesarios para cada consulta
const generateHeaders = (token: boolean, additionalHeaders = {}) => {
  const auth = token
    ? {
        Authorization: `Bearer ${getToken()}`
      }
    : {}

  const headers = {
    ...baseHeaders,
    ...additionalHeaders,
    ...auth
  }
  return headers
}

// Función para llamar los datos por meotodo get
export const getData = async (
  url: string,
  params: Record<string, unknown> = {},
  token = true,
  additionalHeaders: Record<string, string> = {}
): Promise<ResponseModel> => {
  const queryParams = Object.keys(params).length ? `?${queryString.stringify(params)}` : ''
  const headers = generateHeaders(token, additionalHeaders)
  const config = {
    method: `GET`,
    url: `${path}/${url}${queryParams}`,
    headers: headers
  }
  try {
    const response = await axios(config as any)
    // alert(JSON.stringify(response.data));
    return new ResponseModel({
      data: response.data,
      status: ResponseType.OK,
      statusCode: 200
    })
  } catch (error: any) {
    // alert("sigue fallando :(");
    console.log(error)
    return new ResponseModel({
      data: error.response.data,
      status: ResponseType.ERROR,
      statusCode: 400
    })
  }
}

// Función para llamar los datos por meotodo post
export const postData = async (
  url: string,
  data: any,
  params: Record<string, any> = {},
  token = true,
  additionalHeaders: Record<string, string> = {}
): Promise<ResponseModel> => {
  const headers = generateHeaders(token, additionalHeaders)

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${path}/${url}${setParamsString(params)}`,
    headers,
    data: data
  }

  try {
    const response = await axios(config)
    return new ResponseModel({
      data: response.data,
      status: ResponseType.OK,
      statusCode: 200
    })
  } catch (error: any) {
    console.log(error)
    return new ResponseModel({
      data: error.response.data,
      status: ResponseType.ERROR,
      statusCode: 400
    })
  }
}

// Función para llamar los datos por meotodo patch
export const patchData = async (
  url: string,
  data: any,
  params: Record<string, any> = {},
  token = true,
  additionalHeaders: Record<string, string> = {}
): Promise<any> => {
  const headers = generateHeaders(token, additionalHeaders)

  const config = {
    method: 'PATCH',
    url: `${path}/${url}${setParamsString(params)}`,
    headers,
    data
  }
  console.log(config)

  try {
    const response = await axios(config)
    return new ResponseModel({
      data: response.data,
      status: ResponseType.OK,
      statusCode: 200
    })
  } catch (error) {
    console.log(error)
    return new ResponseModel({
      data: error,
      status: ResponseType.ERROR,
      statusCode: 400
    })
  }
}

// Función para llamar los datos por meotodo delete
export const deleteData = async (
  url: string,
  params: Record<string, any> = {},
  token = true,
  additionalHeaders: Record<string, string> = {}
): Promise<any> => {
  const headers = generateHeaders(token, additionalHeaders)

  const queryParams = Object.keys(params).length ? `?${queryString.stringify(params)}` : ''

  const config = {
    method: `DELETE`,
    url: `${path}/${url}${queryParams}`,
    headers
  }
  try {
    const response = await axios(config as any)
    return new ResponseModel({
      data: response.data,
      status: ResponseType.OK,
      statusCode: 200
    })
  } catch (error) {
    console.log(error)
    return new ResponseModel({
      data: error,
      status: ResponseType.ERROR,
      statusCode: 400
    })
  }
}

// Función para integrar paramtros en la ruta
const setParamsString = (params: any) => {
  let strParams = ''
  Object.keys(params).forEach((key, i) => {
    let value = params[key]
    if (typeof value === 'object') {
      let options = ''
      value.forEach((opcion: any) => (options += opcion + ','))
      value = options
    }
    if (i === 0) strParams += key + '=' + value
    else strParams += '&' + key + '=' + value
  })
  return strParams ? `?${params}` : ''
}
