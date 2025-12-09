import Image from "next/image"


export default function footer() {
  return (
    <div className="mt-20 bg-(--gray) p-20">
      <div className="flex flex-row w-160 gap-7">
        <Image src="/images/logo.png" alt="logo" height={100} width={100}></Image>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aspernatur fugit dolores ipsum quam laborum dolore, est explicabo doloribus nemo. Rem tenetur expedita, ad beatae maxime eligendi. Fugiat, ratione voluptatem.</p>
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <Image src="/images/call.png" alt="freepik phone" height={30} width={30}></Image>
          <p>+92-312-3456789</p>
          <Image src="/images/email.png" alt="freepik email" height={30} width={30}></Image>
          <p>MediCare@gmail.com</p>
        </div>
      </div>
    </div>
  )
}
