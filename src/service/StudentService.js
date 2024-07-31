
import axios from 'axios'
const URL_PATH = "http://localhost:8080/students"

class StudentService {
  getAllStudents(course){
    return axios.get(URL_PATH,course)
  }

  createStudent(student){
    return axios.post(URL_PATH,student)
  }

  deleteStudent(id){
    return axios.delete(URL_PATH+"/"+id)
  }

  updateStudent(id,student){
    return axios.put(URL_PATH+"/"+id,student)
  }

  getStudentById(id){
    return axios.get(URL_PATH+"/"+id)
  }

  getStudentByCourse(course){
    return axios.get(URL_PATH+"/course", { params: { course } })
  }
}

export default new StudentService;


