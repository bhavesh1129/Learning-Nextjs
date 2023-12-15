import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/users" className="btn btn-secondary">User List </Link>
      <br />
      <Link href="/about" className="btn btn-acent">About</Link>
    </>
  )
}
