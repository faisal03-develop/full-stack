import Image from "next/image"

export default function page() {
  return (
    <div className="flex flex-row mt-10 bg-(--gray) container mx-auto px-4 sm:px-6 lg:px-8 w-4/5 p-20 rounded-3xl items-center">
        <div className="relative ml-20">
            <div className="rounded-full bg-(--lightpurple) h-116 w-116"></div>
            <div className="rounded-xl bg-(--darkgray) w-105 h-105 absolute top-5 left-5">
            <Image src="/images/logo.png" alt="logo" height={230} width={230} className="absolute top-24 left-23"></Image>
            </div>
        </div>
        <div className="p-15 flex flex-col items-start ml-15 bg-white">
            <h1 className="text-4xl text-(--purple) font-bold">CureBridge</h1>
            <span className=" mb-15 ml-2 text-(--purple)">Log-In Page</span>
            <form className="" action="">
                <label className=" text-(--darkblue)" htmlFor="">UserName: </label>
                <br />
                <input className="mb-6  outline-none border-b-2 border-(--purple) w-96" type="text" placeholder="Username/Email" />
                <br />
                <label className=" text-(--darkblue)" htmlFor="">Password: </label>
                <br />
                <input className="mb-6  outline-none border-b-2 border-(--purple) w-96" type="password" placeholder="Password" />
                <br />
                <button  type="submit" className="bg-(--purple) h-10 w-30 rounded-2xl  mt-6 text-white">LogIn</button>
            </form>
        </div>
    </div>
  )
}
