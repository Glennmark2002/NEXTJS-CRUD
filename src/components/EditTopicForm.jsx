'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

function EditTopicForm({ id, title, description }) {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://nextjs-crud-gold-eight.vercel.app/api/topics/${id}`, {
        method : 'PUT', 
        headers : { 'Content-type' : 'application/json' }, 
        body : JSON.stringify({ newTitle, newDescription })
      })

      if(!res.ok) {
        throw new Error('Failed to update topic');
      }

      router.push('/');
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type='text' placeholder="Topic Title" className='border border-slate-500 px-8 py-2' />
      <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type='text' placeholder="Topic Description" className='border border-slate-500 px-8 py-2' />
      <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Update Topic </button>
    </form>
  );
}

export default EditTopicForm;
