import Image from "next/image"

export default function hero() {
  return (
    <div className=" h-4/5 relative z-2 flex flex-row justify-between items-center">
        <div className="w-170">
            <p className="font-medium">Lorem ipsum dolor sit amet</p>
            <h1 className="text-4xl">Lorem met consectetur adipisicing</h1>
            <p className="font-light text-gray-600">Lorem ipsum dolor sit amet</p>
            <div>
                <div className="flex flex-row items-center gap-4">
                    <button className="bg-(--purple) h-10 w-25 rounded-2xl text-white">Button 1</button>
                    <button className="bg-white h-10 w-45 rounded-2xl text-(--purple)">Button 2</button>
                </div>
            </div>
        </div>
        <div className="relative">
            <div className="rounded-full bg-(--lightpurple) h-116 w-116 absolute"></div>
            <div className="rounded-xl bg-(--darkgray) w-105 h-105 relative top-5 left-5"></div>
            <Image src="/images/logo.png" alt="logo" height={230} width={230} className="z-3 absolute top-25 right-18"></Image>
        </div>
    </div>
  )
}
