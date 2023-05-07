"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClientComponent() {

  interface Repo {
    name: string;
    description: string
  }

  const [reporData, setReporData] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get<Repo[]>(`https://api.github.com/users/gabrielferreira0/repos`);
      setReporData(response.data);
    }
    fetchUserData();
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

      <h1>
        Component  Client Serve - Repositories
      </h1>

      <ul className='mt-4'>
        {reporData.map(repor => {
          return (
            <li key={repor.name}>
              {repor.name}
            </li>)
        })}
      </ul>

    </main>
  )
}