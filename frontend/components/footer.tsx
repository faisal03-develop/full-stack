import Image from "next/image"


export default function footer() {
  return (
    <div>
    <div className="mt-20 bg-(--gray) py-20 px-15 flex flex-row justify-between">
      <div className="flex flex-row items-center w-160 gap-7">
        <Image src="/images/logo.png" alt="logo" height={100} width={140}></Image>
        <p className="text-(--darkblue)">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aspernatur fugit dolores ipsum quam laborum dolore, est explicabo doloribus nemo. Rem tenetur expedita, ad beatae maxime eligendi. Fugiat, ratione voluptatem.</p>
      </div>
      <div>
        <div className="flex flex-col items-start">
          <span className="text-2xl text-(--purple) font-bold">Contact Us</span>
          <div className="flex flex-row gap-5 my-4" >
          <Image src="/images/call.png" alt="freepik phone" height={30} width={30}></Image>
          <p>+92-312-3456789</p>
          </div>
          <div  className="flex flex-row gap-5 my-4" >
          <Image src="/images/email.png" alt="freepik email" height={30} width={30}></Image>
          <p>CureBridge@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-start">
          <span className="text-2xl text-(--purple) font-bold">Address</span>
          <div className="flex flex-row gap-5 my-4" >
          <Image src="/images/location.png" alt="freepik location" height={20} width={30}></Image>
          <p>CureBridge, Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
    {/* copy right */}
    <div>
      <span className="flex flex-row justify-center text-(--purple)">&copy; 2025 Copyright MediCare. All Rights Reserved.</span>
    </div>
    </div>
  )
}
