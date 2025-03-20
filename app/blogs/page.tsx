"use client"
import { useState, type FormEvent } from "react"

const ComingSoon = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle email submission logic here
    alert(`Thank you! We'll notify ${email} when we launch.`)
    setEmail("")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Coming Soon!</h1>
      <p className="text-gray-600 mb-8">We&apos re working hard to bring you something amazing. Stay tuned!</p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Notify Me
        </button>
      </form>
    </div>
  )
}

export default ComingSoon

