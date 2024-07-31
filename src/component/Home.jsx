import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from './List';

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // Runs only on mount


  return (
    <>
      <div className='width-full text-center text-bolder h-10 text-2xl bg-slate-700 text-white shadow-sm'>
        <h1>🧑‍🎓 Student Information 🧑‍🎓</h1>
      </div>
      <div className='mt-5 ms-10'>
        <button
          onClick={() => navigate('/student')}
          className='cursor-pointer px-4 py-2 bg-blue-400 rounded-lg'
        >
          Add Student 🧑‍🎓
        </button>
      </div>
      {loading ? <p>Loading...</p> : <List  />}
    </>
  );
}

export default Home;
