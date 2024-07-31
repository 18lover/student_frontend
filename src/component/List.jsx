import React, { useEffect, useState } from "react";
import StudentService from "../service/StudentService";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
function List() {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const {select} = location.state || {}
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await StudentService.getAllStudents();
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchdata();
  }, []);

  const delet = (e, id) => {
    e.preventDefault();
    StudentService.deleteStudent(id).then(() => {
      setStudents((prevstudent) => {
        return prevstudent.filter((student) => student.id !== id);
      });
    });
  };

  const update = (e, id) => {
    navigate(`/student/${id}`);
  };

     useEffect(()=>{
  
      const fetchdata=async()=>{
          setLoading(true)
          let response = null;
          console.log(select);
          try {
            if(select === "All" )
            {
                response = await StudentService.getAllStudents();
            }
            else
            {
                response = await StudentService.getStudentByCourse(select);
            }
              console.log(response.data);
              setStudents(response.data);
          } catch (error) {
              console.log(error);
          }
          setLoading(false)
      }
      fetchdata();
     },[select])
  return (
    <div className="flex">
      <div className="mt-5 ms-10 w-2/3">
        Student List 📃
        <table className="border w-full text-center">
          <thead className="border-2 border-blue-900 bg-gray-500 text-white">
            <th className="">Sr.No</th>
            <th className="w-1/4 border">Name</th>
            <th className="w-1/4 border">Email</th>
            <th className="w-1/4 border">Course</th>
            <th className="w-1/4 border">Action</th>
          </thead>

          {!loading && (
            <tbody className="">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-green-500 h-10">
                  <td className=" border-2 border-black">{student.id}</td>
                  <td className=" border-2 border-black">{student.name}</td>
                  <td className=" border-2 border-black">{student.email}</td>
                  <td className=" border-2 border-black">{student.course}</td>
                  <td className=" border-2 border-black">
                    <button
                      className="bg-red-300 rounded-md py-1 me-2 px-2"
                      onClick={(e) => delet(e, student.id)}
                    >
                      Delete❌
                    </button>
                    <button
                      className="bg-yellow-300 rounded-md py-1  px-2"
                      onClick={(e) => update(e, student.id)}
                    >
                      Edit📝
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <Dropdown />
    </div>
  );
}

export default List;
