import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function Home() {
  return (
    <div className="h-[calc(100vh_-_80px)] bg-indigo-500 flex items-center justify-center">
      <Container className="">
        <h1 className="text-7xl text-center font-bold text-white">Some title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fuga distinctio nulla. Earum quasi at eveniet, est suscipit facere repellat.</p>
        <Link to='/'>Get your secret token</Link>
      </Container>
    </div>
  )
}