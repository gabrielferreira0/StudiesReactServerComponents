import axios from 'axios';

interface Repo {
  name: string;
  description: string
}

export default async function ClientComponent() {
  const reporData = await axios.get<Repo[]>(`https://api.github.com/users/gabrielferreira0/repos`);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>
        React Server Components - Repositories
      </h1>
      <ul className='mt-4'>
        {reporData.data.map(repor => {
          return (
            <li key={repor.name}>
              {repor.name}
            </li>)
        })}
      </ul>
    </main>
  )
}
