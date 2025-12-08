import Image from "next/image"

export default function header() {
  return (
    <div>
        <div>
            <Image src="/icons/logo.png" alt="logo.png" height={20} width={20}></Image>
        </div>
    </div>
  )
}
