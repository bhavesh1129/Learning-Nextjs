import Link from 'next/link';
import React from 'react'

export default async function UserPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  const userData = await res.json();

  return (
    <>
      <div>User List</div>

      <ul className='w-full flex flex-wrap justify-center items-center mt-5'>
        {
          userData.map((user) => (
            <div key={user.key} className="mr-8 mb-4 card card-compact w-96 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.company.catchPhrase}</p>
                <div className="card-actions justify-end">
                  <Link href={`/users/${user.website}`} className="btn btn-primary">Visit Now</Link>
                </div>
              </div>
            </div>
          ))
        }
      </ul>
    </>
  )
}
