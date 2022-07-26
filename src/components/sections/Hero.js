import Button from "../buttons/Button";

export default function Hero() {
  
  return (
    <div className="py-20 flex justify-center items-center h-screen">
      <div className="p-6 flex flex-col gap-4 bg-gray-900 bg-opacity-50">
        <p className="text-emerald-400">Hello, my name is</p>
        <h1 className="text-6xl text-white">Stijn Vergauwen.</h1>
        <p className="text-2xl">I'm a full-stack developer.</p>
        <div className="">
          {/* This button is not functional, it's supposed to scroll down when clicked but idk how to do this */}
          {/* <Button text="View my work v" />  */}
          
        </div>
      </div>
    </div>
  )
}
