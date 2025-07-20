
import axios from 'axios';
import { useState } from 'react';

const DeleteData = () => {
  const [id, setId] = useState<number | null>(null);

  const handleDelete = async () => {
    if (id === null) {
      alert('Please enter a valid ID');
      return;
    }
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/data/${import.meta.env.VITE_POSTGRES_TABLE_NAME}/${id}`);
      alert('Data Deleted!');
      setId(null);
    } catch (err) {
      console.error("Error deleting data:", err);
    }
  };

  return (
    <>
    <div>
      <h2><b>Delete Data</b></h2>
      <input type="number" placeholder="ID" value={id || ''} onChange={e => setId(Number(e.target.value))} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  
     </>
  );
};

export default DeleteData;
