import { FormEvent, useState } from "react"
import Container from "../components/Container"

const username = '@hsn'

export default function PublicProfile() {
  const [text, setText] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    alert(text)
  }

  return (
    <div className="bg-indigo-500 h-[50vh] pt-[130px] mb-10 pb-10">
      <Container className="bg-white rounded-xl border shadow-xl py-5 mb-10">
        <h1 className="text-3xl text-center my-8">Send a message to <span className="text-indigo-500">{username}</span></h1>

        <form onSubmit={handleSubmit} className="max-w-xl m-auto space-y-5">
          <textarea
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Some vert secret message..."
            className="bg-gray-300 w-full rounded-md m-auto p-5"></textarea>

          <button className="px-5 py-2 w-full text-center bg-indigo-500 border-2 border-indigo-500 rounded-md text-white font-bold hover:bg-indigo-600 hover:border-indigo-600">Send</button>
        </form>
      </Container>
    </div>
  )
}