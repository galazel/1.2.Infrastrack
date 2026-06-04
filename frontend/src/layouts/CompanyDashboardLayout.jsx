import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faGrip } from "@fortawesome/free-solid-svg-icons"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "@/components/Image"


function CompanyDashboardLayout() {
  return (
    <section className="grid h-screen w-screen grid-rows-[10%_6%_1fr] gap-2 bg-amber-600 overflow-auto p-5">
      <header className="flex justify-end bg-black">fsadf</header>
      <section className="grid grid-cols-[1fr_10%_2%] place-content-center place-items-center gap-2 bg-red-300">
        <h1 className="w-full bg-amber-100">All Projects</h1>
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <h1 className="w-full bg-amber-100">
          <FontAwesomeIcon icon={faGrip} />
        </h1>
      </section>
      <main className="grid grid-cols-5 grid-rows-5 bg-red-300">
        <div>fsda</div>
        <Card>
          <CardContent>
            <Image/>
          </CardContent>
          <CardFooter className='grid grid-rows-3'>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardFooter>
        </Card>
      </main>
    </section>
  )
}

export default CompanyDashboardLayout
