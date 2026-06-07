import { Outlet } from "react-router-dom"
import Image from "@/components/Image"
import infrastrack from "../assets/infrastrack-logo.webp"
import five from "../assets/5.webp"
import four from "../assets/4.webp"
import three from "../assets/3.webp"
import two from "../assets/2.webp"
import one from "../assets/1.webp"
import six from "../assets/6.webp"

function AccountLayout() {
  return (
    <main className="grid h-screen grid-cols-[1fr_31%]">
      <section className="grid grid-rows-[10%_1fr] rounded-tr-2xl rounded-br-2xl border-r-2 border-yellow-300">
        <div className="flex h-full items-center justify-start">
          <Image src={infrastrack} alt="Infrastrack logo" className="w-[10%]" />
        </div>
        <div className="relative flex h-full items-center justify-center">
          <Image
            src={five}
            alt="Construction image 5"
            className="absolute top-20 left-100 size-[150px] rotate-[-25deg] rounded-4xl"
          />
          <Image
            src={one}
            alt="Construction image 1"
            className="absolute top-50 left-1/3 size-[300px] rounded-4xl shadow-lg"
          />
          <Image
            src={two}
            alt="Construction image 2"
            className="absolute top-10 left-1/2 w-[25%] rounded-4xl"
          />
          <Image
            src={three}
            alt="Construction image 3"
            className="left-50% absolute bottom-50 w-[15%] rounded-4xl"
          />
          <Image
            src={six}
            alt="Construction image 6"
            className="absolute right-45 bottom-70 w-[15%] rounded-4xl"
          />
          <Image
            src={four}
            alt="Construction image 4"
            className="absolute right-100 bottom-50 h-50 w-50 rounded-full border-4 border-yellow-400 shadow-lg"
          />
          <h1 className="absolute bottom-50 left-10 w-125 text-3xl font-extrabold">
            AI Construction Progress Assistant — Simple,{" "}
            <span>Real-Time Updates</span> for Your Dream House
          </h1>
        </div>
      </section>
      <section className="flex h-full items-center justify-center p-5">
        <Outlet />
      </section>
    </main>
  )
}

export default AccountLayout
