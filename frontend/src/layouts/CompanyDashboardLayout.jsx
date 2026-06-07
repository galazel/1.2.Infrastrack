import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faGrip,
  faBars,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"

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
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from "@/components/ui/button"
import {
  CustomerDetails,
  ProjectDetails,
  ProjectFiles,
} from "../pages/CreateProject"

function CompanyDashboardLayout() {
  const [isGrid, setIsGrid] = useState(true)
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState(1)
  const [details, setDetails] = useState({
    userDetails : {},
    projectDetals : {},
    projectFiles : {},
})

  const handleSubmit = async () => {}

  return (
    <section className="relative grid h-screen w-screen grid-rows-[5%_6%_1fr] gap-2 overflow-hidden p-5">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b-2">
        <p className="logo">INFRASTRACK</p>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge className="bg-green-600 dark:bg-green-800" />
        </Avatar>
      </header>

      {/* TOP BAR */}
      <section className="grid grid-cols-[1fr_10%_2%] place-content-center place-items-center gap-2">
        <h3 className="w-full">All Projects</h3>

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

        <h1 className="w-full">
          {isGrid ? (
            <FontAwesomeIcon
              icon={faGrip}
              className="cursor-pointer text-3xl"
              onClick={() => setIsGrid(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-3xl"
              onClick={() => setIsGrid(true)}
            />
          )}
        </h1>
      </section>

      {/* MAIN */}
      <main
        className={`relative gap-4 overflow-auto ${
          isGrid ? "grid auto-rows-[280px] grid-cols-5" : "flex flex-col"
        }`}
      >
        {/* ADD PROJECT */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button
              className={`group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-muted-foreground/30 bg-transparent transition-all duration-200 hover:border-primary/60 hover:bg-primary/5 ${
                isGrid ? "h-full w-full" : "min-h-[280px] w-full"
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-muted-foreground/40 text-3xl font-light text-muted-foreground/50 transition-all duration-200 group-hover:border-primary/60 group-hover:text-primary">
                +
              </span>

              <span className="text-xs font-medium text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary">
                New Project
              </span>
            </button>
          </DrawerTrigger>

          {/* DRAWER */}
          <DrawerContent
            style={{ width: "50vw", maxWidth: "none" }}
            className="fixed inset-y-0 right-0 h-screen rounded-l-xl border-l bg-background p-0"
          >
            {/* HEADER */}
            <DrawerHeader className="grid grid-cols-[1fr_10%] place-content-between border-1">
              <div className="flex flex-row items-center gap-3 px-6 py-4">
                <DrawerClose asChild>
                  <button className="flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                  </button>
                </DrawerClose>
                <DrawerTitle>Create project</DrawerTitle>
              </div>
              <div className="grid grid-cols-2 place-content-center place-items-center">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className={`text-3xl ${page == 1 ? "invisible" : ""}`}
                  onClick={() =>
                    setPage((prev) => {
                      if (prev > 0) return (prev = prev - 1)
                      if (prev == 1) return prev
                    })
                  }
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-3xl"
                  onClick={() =>
                    setPage((prev) => {
                      if (prev < 3) return (prev = prev + 1)
                      if (prev == 3) return prev
                    })
                  }
                />
              </div>
            </DrawerHeader>

            {/* BODY */}
            <div className="flex-1 overflow-auto px-6 py-6">
              {page == 1 && (
                <CustomerDetails setPage={setPage} setDetails={setDetails} />
              )}
              {page == 2 && (
                <ProjectDetails setPage={setPage} setDetails={setDetails} />
              )}
              {page == 3 && (
                <ProjectFiles
                  setPage={setPage}
                  handleSubmit={handleSubmit}
                  setDetails={setDetails}
                />
              )}
            </div>


          </DrawerContent>
        </Drawer>

        {/* EMPTY STATE */}
        {projects.length === 0 && (
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/50">
            No projects yet. Create one to get started.
          </p>
        )}

        {/* PROJECT CARDS */}
        {projects.map((item, index) => (
          <div key={index} className={isGrid ? "col-span-1" : "w-full"}>
            <Card className="h-full min-h-[280px] w-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-sm">
                  {item.name ?? "Untitled"}
                </CardTitle>

                <CardDescription className="text-xs">
                  {item.description ?? ""}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1" />
            </Card>
          </div>
        ))}
      </main>
    </section>
  )
}

export default CompanyDashboardLayout
