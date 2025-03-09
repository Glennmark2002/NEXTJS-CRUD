import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { SquarePen } from 'lucide-react';

const getTopics = async () => { 
  try {
    const res = await fetch('https://nextjs-crud-gold-eight.vercel.app/api/topics', { cache: 'no-store' });

    if(!res.ok) {
      throw new Error('Failed to fetch Topics');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function TopicList() {

  const { topics } = await getTopics();

  return (
    <>
      {topics.map(topic => 
        <div key={topic._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-4 items-start'>
          <div>
            <h2 className="font-bold text-2xl"> { topic.title } </h2>
            <div> { topic.description } </div>
          </div>

          <div className='flex gap-2'>
            <RemoveButton id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <SquarePen />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default TopicList;
