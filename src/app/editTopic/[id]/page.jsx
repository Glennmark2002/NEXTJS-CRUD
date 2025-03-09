import EditTopicForm from "@/components/EditTopicForm";

const getTopicsById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache : "no-store"});   

    if(!res.ok) throw new Error("Failed to fetch topic");

    return res.json();
  } catch (error) { }
}

async function editTopic({ params }) {

  const { id } = await params;
  const { topic } = await getTopicsById(id);
  const { title, description } = topic;

  return (
    <EditTopicForm id={id} title={title} description={description} />
  );
}

export default editTopic;
