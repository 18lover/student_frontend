import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../service/StudentService";

function AddStudent() {
  const { id: paraid } = useParams();
  const navigate = useNavigate();
  const All = "All"//For the navigation default All
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      if (paraid) {
        try {
          const response = await StudentService.getStudentById(paraid);
          setStudent(response.data);
        } catch (error) {
          console.error("Error fetching student:", error);
        }
      }
    };

    fetchStudent();
  }, [paraid]);

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const clear = (e) => {
    e.preventDefault();
    setStudent({
      id: "",
      name: "",
      email: "",
      course: "",
    });
  };
  const save = async (e) => {
    e.preventDefault();
    try {
      if (paraid) {
        await StudentService.updateStudent(paraid, student);
      } else {
        await StudentService.createStudent(student);
      }
      navigate("/", { state: { All } });
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <>
      <div className="width-full text-center text-bolder h-10 text-2xl bg-slate-700 text-white shadow-sm">
        <h1>{paraid ? "Edit Student 🧑‍🎓" : "New Student 🧑‍🎓"}</h1>
      </div>

      <div className="w-full flex items-center justify-center bg-green-700">
        <div className="w-2/3 h-screen flex items-center justify-center ">
          <div
            className="flex flex-col gap-5 bg-purple-400 py-10 w-2/3"
            style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
          >
            <span className="text-center font-bold text-2xl text-white">
              Student Information 📑
            </span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="bg-green-300 h-10 w-1/2 mx-auto rounded-lg px-4"
              style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="bg-green-300 h-10 w-1/2 mx-auto rounded-lg px-4"
              style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
            />
            <input
              type="text"
              placeholder="Course"
              name="course"
              value={student.course}
              onChange={handleChange}
              className="bg-green-300 h-10 w-1/2 mx-auto rounded-lg px-4"
              style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
            />

            <div className="flex gap-6 justify-center mt-5">
              <button
                className="px-4 py-2 bg-green-600 rounded-md"
                style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
                onClick={save}
              >
                {paraid ? "Update" : "Save"}
              </button>
              <button
                className="px-4 py-2 bg-red-500 rounded-md"
                style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
                onClick={clear}
              >
                Clear
              </button>
              <button
                className="px-4 py-2 bg-red-200 rounded-md"
                style={{ boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.5)" }}
                onClick={() => navigate("/", { state: { All } })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStudent;
