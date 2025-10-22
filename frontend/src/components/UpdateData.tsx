import { useState } from 'react';
import axios from 'axios';
import type { Demo } from '../types';

const UpdateData = () => {
  const [form, setForm] = useState<Demo>({ id: 0, name: '', email: '', is_active: true });

  const handleSubmit = async (e: React.FormEvent) => {
    try {
         if (form.id === null || form.id === undefined) {
      alert('Please enter a valid ID');
      return;
    }
    e.preventDefault();
   const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/root/data/${form.id}`, {name: form.name,email: form.email,is_active: form.is_active });
    alert('Data Updated!');
    console.log("Backend response:", res.data);
    setForm({id : 0, name:'', email:'', is_active:true}); // Reset form after submission

    }catch(err) {
      console.error("Error updating data:", err);
    }
   
  };

  return (
    <>
    <div>
      <h2><b>Update Data</b></h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="ID" value={form.id || ''} onChange={e => setForm({ ...form, id: Number(e.target.value) })} />
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <label>
          Active:
          <input type="checkbox" checked={form.is_active} onChange={e => setForm({ ...form, is_active: e.target.checked })} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
 
      </>
  );
};

export default UpdateData;
