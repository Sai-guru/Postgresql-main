import { useState } from "react";
import axios from "axios";
import type { Demo } from "../types"; //new thing


const CreateData = () => {
    const [form,setForm] = useState<Demo>({name:'',email:'',is_active:true});

    const handleSubmit = async(e :React.FormEvent)=> {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/data/${import.meta.env.VITE_POSTGRES_TABLE_NAME}`, form);
            console.log("Backend response:", res.data);
            alert('Data Created!');
            setForm({name:'',email:'',is_active:true}); // Reset form after submission
            
        }catch(err) {
            console.error("Error creating data:", err);
        }
        
    }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>

        <input placeholder="enter your name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input placeholder="enter your email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <label>Active
             <input type="checkbox" checked={form.is_active} onChange={(e)=>setForm({...form,is_active:e.target.checked})}/>
        </label>
       
        <button type="submit">Submit</button>
        </form>
        </div>
         
    </>
  )
}

export default CreateData;