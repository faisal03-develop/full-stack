import Image from "next/image"

interface SuccessProps {
  url: string;
  name: string;
  description: string;
}

export default function successcards({url, name, description}: SuccessProps) {
  return (
    <div>
        <div className="bg-(--lightpurple) w-68 rounded-2xl flex flex-col items-center p-5">
            <Image src={url} alt="patient1" className="rounded-md" height={200} width={200}></Image>
            <p className="text-3xl my-3 mt-5 text-white">{name}</p>
            <p className="text-center text-sm text-white font-light">{description}</p>
        </div>
    </div>
  )
}
