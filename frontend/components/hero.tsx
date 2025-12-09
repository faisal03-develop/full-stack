import Image from "next/image"

export default function hero() {
  return (
    <div className=" h-130 relative z-2 flex flex-row justify-between items-center text-(--darkblue)">
        <div className="w-170">
            <p className="font-medium w-130">Your health deserves timely attention.Connect with trusted doctors whenever you need care.</p>
            <h1 className="text-6xl font-bold mb-4 mt-2">Your Treatment Journey Begins Here</h1>
            <p className="font-light w-130 text-gray-600">Create your patient profile, meet qualified doctors, and follow a treatment plan built just for you.</p>
            <div>
                <div className="flex flex-row items-center gap-4 my-4">
                    <button className="bg-(--purple) h-10 w-30 rounded-2xl text-white">Get Started</button>
                    <button className="bg-white h-10 w-45 rounded-2xl text-(--purple)">Treatment Plans</button>
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
