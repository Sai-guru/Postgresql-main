import { useState,useEffect } from "react";
import axios from "axios";
import type { Demo } from '../types';

const ReadData = () => {
    const [data, setData] = useState<Demo[]>([]);

    useEffect(()=> {
        const fetchData = async()=> {
            try {
                  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/data/${import.meta.env.VITE_POSTGRES_TABLE_NAME}`);
                    setData(res.data);
            }catch(err) {
                console.error("Error fetching data:", err);
            }
        }
        fetchData();
    },[]);
  return (
    <>
    <div>
        <h1><b>Read from Table</b></h1>
        <ul>
              <li><b>ID</b> - <b>Name</b> - <b>Email</b></li>
            {data.map((item)=> (
                <li key={item.id}> {item.id} - {item.name} - {item.email}</li>

            ))}
        </ul>

    </div>
   
    </>
  )
}

export default ReadData