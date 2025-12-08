import Image from "next/image"

export default function header() {
  return (
    <div>
        <div className="flex flex-row justify-between items-center my-10 relative z-2">
            <Image src="/images/logo.png" alt="logo.png" height={60} width={60}></Image>
            <button className="bg-(--purple) h-8 w-35 rounded-2xl text-white">Login/Register</button>
        </div>
    </div>
  )
}
