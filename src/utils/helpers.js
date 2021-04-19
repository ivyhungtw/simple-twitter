// import axios from 'axios'
import Swal from 'sweetalert2'

// const baseURL = ''
// local 版本
// const baseURL = ''

// const axiosInstance = axios.create({
//   baseURL
// })

// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`
//   }
//   return config
// }, err => {
//   Promise.reject(err)
// })

// export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})