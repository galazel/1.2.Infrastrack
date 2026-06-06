import Image from "../../../frontend/src/components/Image";
import {Outlet} from 'react-router-dom'

function AccountLayout() {
  return (
    <main className="h-screen grid grid-cols-[1fr_31%]">
      <section className="grid grid-rows-[10%_1fr] border-r-2 border-yellow-300 rounded-tr-2xl rounded-br-2xl">
        <div className="flex justify-start items-center h-full  ">
          <Image
            src="/infrastrack-logo.webp"
            alt="Description"
            className="w-[10%] "
          />
        </div>
        <div className="flex items-center justify-center relative h-full ">
          <Image
            src="/5.webp"
            alt="Description"
            className="size-[150px] rounded-4xl absolute left-100 top-20 rotate-[-25deg] "
          />
          <Image
            src="/1.webp"
            alt="Description"
            className="size-[300px] rounded-4xl top-50 absolute left-1/3 shadow-lg"
          />
          <Image
            src="/2.webp"
            alt="Description"
            className="w-[25%] rounded-4xl absolute left-1/2 top-10"
          />
          <Image
            src="/3.webp"
            alt="Description"
            className="w-[15%] rounded-4xl absolute left-50% bottom-50"
          />
          <Image
            src="/6.webp"
            alt="Description"
            className="w-[15%] rounded-4xl absolute right-45 bottom-70"
          />
          <Image
            src="/4.webp"
            alt="Description"
            className="w-50 h-50 rounded-full absolute right-100 bottom-50 border-4 border-yellow-400 shadow-lg"
          />
          <h1 className = 'absolute left-10 bottom-50 w-125 text-3xl font-extrabold'>
            AI Construction Progress Assistant — Simple, <span>Real-Time Updates</span> for
            Your Dream House
          </h1>
        </div>
      </section>
      <section className="p-5 flex items-center justify-center h-full">
        <Outlet />
      </section>
    </main>
  );
}

export default AccountLayout;
