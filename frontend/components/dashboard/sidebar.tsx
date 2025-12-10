import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-48 bg-(--darkgray) h-screen fixed p-4 flex flex-col">
      <div className="mb-8 flex flex-row items-center">
        <Image src="/images/logo.png" width={40} height={40} alt="CureBridge"></Image>
        <h1 className="text-(--purple) text-xl font-bold">CureBridge</h1>
      </div>
      
      <nav className="flex flex-col gap-2">
        <button className="bg-(--purple) text-white px-4 py-3 rounded-lg text-left flex items-center gap-2">
           Dashboard
        </button>
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <button className="text-(--gray) px-4 py-3 rounded-lg text-left flex items-center gap-2 bg-(--purple)">
           Support
        </button>
        <button className="text-(--gray) px-4 py-3 rounded-lg text-left flex items-center gap-2 bg-(--purple)">
          Profile
        </button>
        <button className="text-(--gray) px-4 py-3 rounded-lg text-left flex items-center gap-2 bg-(--purple)">
          Logout
        </button>
      </div>
    </div>
  );
}
