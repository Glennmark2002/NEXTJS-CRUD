'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

function AddTopic() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!title || !description) {
      alert('Title and Description are required')
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', { 
        method: 'POST', 
        headers: { 'Conent-Type' : 'application/json' }, 
        body : JSON.stringify({ title, description })
      })

      if(res.ok) {
        router.push('/');
      } else { 
        throw new Error('Failed to create a topic')
      }

    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input onChange={(e) => setTitle(e.target.value)}        value={title}       type='text' placeholder="Topic Title"       className='border border-slate-500 px-8 py-2' />
      <input onChange={(e) => setDescription(e.target.value)}  value={description} type='text' placeholder="Topic Description" className='border border-slate-500 px-8 py-2' />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Add Topic </button>
    </form>
  );
}

export default AddTopic;
