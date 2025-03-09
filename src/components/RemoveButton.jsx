'use client';

import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';

function RemoveButton({ id }) {

  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm('Are you sure?');

    if(confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",   
      }); 
      
      if(res.ok){
        router.refresh();
      }
    }

  }

  return (
    <button onClick={removeTopic} className='text-red-400'>
      <Trash2  />
    </button>
  );
}

export default RemoveButton;
