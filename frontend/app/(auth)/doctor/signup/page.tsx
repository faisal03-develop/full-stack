import Image from "next/image"
import Link from "next/link"

export default function page() {
  return (
    <div className="bg-(--gray) w-4/5 container mx-auto px-4 sm:px-6 lg:px-8 mt-5 rounded-2xl">
        <div className="flex flex-row gap-5 justify-center items-center ">
            <Image src="/images/bluelogo.png" alt="log" width={100} height={100}></Image>
            <div className="my-20">
            <h1 className="text-(--darkblue) text-5xl font-bold ">CureBridge</h1>
                <span className="font-light text-(--darkblue)">Doctor SignUp</span>
            </div>
        </div>
        <div className="px-20">
            <form action="" >
                <div className="flex flex-row justify-between items-center">
                <div>

                <label className="text-(--darkblue)" htmlFor="">Name</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="text" name="" id="" placeholder="Name"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Age</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="number" placeholder="Age"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Gender</label>
                <br />
                <select className="bg-white outline-none p-1 mb-3" name="" id="">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                </select>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Blood Group</label>
                <br />
                <select className="bg-white outline-none p-1 mb-3" name="" id="">
                    <option value="">A+</option>
                    <option value="">A-</option>
                    <option value="">B+</option>
                    <option value="">B-</option>
                    <option value="">O+</option>
                    <option value="">O-</option>
                    <option value="">AB+</option>
                    <option value="">AB-</option>
                </select>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Phone Number</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="text" name="" id="" placeholder="Phone Number"/>
                <br /> 
                <label className="text-(--darkblue)" htmlFor="">Experience</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="number" name="" id="" placeholder="Experience"/>
                <br />
             
                </div>
                
                <div>
                    
                <label className="text-(--darkblue)" htmlFor="">Qualifications</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="text" name="" id="" placeholder="Qualifications"/>
                <br />  
                <label className="text-(--darkblue)" htmlFor="">UserName</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="text" name="" id="" placeholder="UserName"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Address</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="text" name="" id="" placeholder="Address"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Email</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="email" name="" id="" placeholder="Email Address"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Password</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="password" name="" id="" placeholder="Password"/>
                <br />
                <label className="text-(--darkblue)" htmlFor="">Confirm Password</label>
                <br />
                <input className="w-96 bg-white outline-none p-1 mb-4" type="password" name="" id="" placeholder="Confirm Password"/>
                </div>
                </div>
                    <Link href="http://localhost:3000/login">
                <span className="underline cursor-pointer text-(--darkblue)">Already have a account, LogIn?</span>
                    </Link>
                <div className="flex flex-row justify-center">
                <button className="bg-(--darkblue) h-10 w-100 rounded-2xl text-white my-10">Sign-Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}
