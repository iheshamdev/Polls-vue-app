import axios from 'axios';

const HTTP_REQUEST = async (
  method,
  URL,
  postData,
  auth = undefined,
  contentType = 'multipart/form-data'
) => {

  const toFormData = (obj) => {
    const formData = new FormData()
    Object.keys(obj).forEach(key => formData.append(key, obj[key]))
    return formData
  }

  const request = await axios({
    method,
    url: URL,
    data: toFormData(postData),
    headers: {
      'Content-Type': contentType,
    }
  }).then(function (response) {
      return response
    }).catch((err) => {
      console.warn(err)
      return err.response
    })
  return request
}


export const POST = (URL, postData, auth) => {
  return HTTP_REQUEST('post', URL, postData, auth)
}

export const PATCH = (URL, data, auth) => {
  return HTTP_REQUEST('patch', URL, data, auth)
}

export const PUT = (URL, data, auth) => {
  return HTTP_REQUEST('put', URL, data, auth)
}

export const GET = (URL, auth) => {
  return HTTP_REQUEST('get', URL, {}, auth)
}

export const DELETE = (URL, data, auth) => {
  return HTTP_REQUEST('delete', URL, data, auth)
}

export default { GET, POST, PATCH, PUT, DELETE }
