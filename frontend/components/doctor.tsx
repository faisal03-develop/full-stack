import Image from "next/image"


export default function doctor() {
  return (
    <div>
        <div className="bg-(--lightpurple2) mt-20 flex flex-row gap-10">
            <Image src="/images/doctorteam.png" alt="doc" height={300} width={300} className="m-16"></Image>
            <div className="w-200 my-4 mr-12">
                <p className="font-light text-(--darkblue) mt-8 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptas! Velit voluptates earum dolorem dicta similique, pr</p>
                <p className="text-4xl text-(--darkblue) mb-6">LOREM IPSUM IS A DUMMY TEXT</p>
                <p className="text-(--purple) font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam deserunt eveniet quaerat reiciendis iste provident ratione? Assumenda, doloremque. Quis incidunt enim voluptatum impedit animi? Tenetur fugiat voluptates aperiam alias explicabo.</p>
                <div className="flex flex-row gap-4 mt-10 items-center">
                    <input type="text" placeholder="Hello" className="bg-purple-100 p-5 rounded-2xl h-10 w-70" />
                    <input type="text" placeholder="Hello 2" className="bg-purple-100 rounded-2xl h-10 w-70 p-5" />
                    <button className="bg-(--purple) h-10 w-30 rounded-2xl text-white ml-6">Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}
