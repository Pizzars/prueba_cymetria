import axios, { AxiosError, AxiosResponse, Method } from 'axios'
import queryString from 'query-string'
import { MESSAGE_CODES } from './messageCodes.enum'

enum SERVICE_TYPES {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

enum RESPONSE_TYPES {
  OK,
  ERROR
}

const PATH = process.env.NEXT_PUBLIC_BACKEND_URL

const baseHeaders = {
  token: '',
  Accept: 'application/json'
}

interface BaseRequestConfig {
  headers: typeof baseHeaders
}

type RequestConfig<T = any> = BaseRequestConfig & {
  url: string
  method: Method
  data?: T
}

type HttpRequestResponse<T = any> = {
  data?: T
  messageCode: MESSAGE_CODES
  statusCode: number
  error?: string
}

type StandardResponse<T = any> = {
  responseType: RESPONSE_TYPES
  messageCode?: MESSAGE_CODES
  data?: T
}

/**
 * Crea la configuración de la solicitud HTTP común a todas las solicitudes.
 * @param method - Método HTTP de la solicitud.
 * @param url - URL de la solicitud.
 * @param params - Parámetros de la solicitud.
 * @param data - Datos de la solicitud.
 * @returns La configuración de la solicitud.
 */
const createRequestConfig = <T>(
  method: Method,
  url: string,
  params: Record<string, unknown> = {},
  data: string | Record<string, unknown> = {}
): RequestConfig<T> => {
  const queryParams = params ? `?${queryString.stringify(params)}` : ''
  const requestURL = `${PATH}/${url}${queryParams}`

  return {
    headers: baseHeaders,
    url: requestURL,
    method,
    data: data as T
  }
}

/**
 * Realiza una solicitud HTTP utilizando la configuración proporcionada.
 * @param configuration - Configuración de la solicitud.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud.
 */
const executeRequest = async <T>(configuration: RequestConfig<T>): Promise<StandardResponse<T>> => {
  try {
    const response: AxiosResponse<HttpRequestResponse<T>> = await axios(configuration)
    return {
      responseType: RESPONSE_TYPES.OK,
      messageCode: response.data.messageCode,
      data: response.data?.data
    }
  } catch (error) {
    console.log(error)
    const castedError: AxiosError<HttpRequestResponse> = error as AxiosError<HttpRequestResponse>

    return {
      responseType: RESPONSE_TYPES.ERROR,
      messageCode: castedError.response?.data?.messageCode,
      data: castedError.response?.data?.data
    }
  }
}

/**
 * Realiza una solicitud HTTP GET.
 * @param url - URL de la solicitud.
 * @param params - Parámetros de la solicitud.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud.
 */
export const getData = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.GET, url, params)
  return executeRequest<T>(configuration)
}

/**
 * Realiza una solicitud HTTP DELETE.
 * @param url - URL de la solicitud.
 * @param params - Parámetros de la solicitud.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud.
 */
export const deleteData = async <T>(
  url: string,
  params?: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.DELETE, url, params)
  return executeRequest<T>(configuration)
}

/**
 * Realiza una solicitud HTTP POST.
 * @param url - URL de la solicitud.
 * @param params - Parámetros de la solicitud.
 * @param data - Datos de la solicitud.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud.
 */
export const postData = async <T>(
  url: string,
  params: Record<string, unknown> = {},
  data: string | Record<string, unknown> = {}
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.POST, url, params, data)
  return executeRequest<T>(configuration)
}

/**
 * Realiza una solicitud HTTP PATCH.
 * @param url - URL de la solicitud.
 * @param data - Datos de la solicitud.
 * @param params - Parámetros de la solicitud.
 * @returns Una promesa que se resuelve con la respuesta de la solicitud.
 */
export const patchData = async <T>(
  url: string,
  data: any,
  params: Record<string, unknown>
): Promise<StandardResponse<T>> => {
  const configuration = createRequestConfig<T>(SERVICE_TYPES.PATCH, url, params, data)
  return executeRequest<T>(configuration)
}
