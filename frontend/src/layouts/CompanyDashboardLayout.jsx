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
  ProjectFilesStep,
} from "../pages/CreateProject"

// refs to child-step validate fns (set via static props in each step component)
import * as CreateProject from "../pages/CreateProject"

const PAGE_COUNT = 3

function CompanyDashboardLayout() {
  const [isGrid, setIsGrid] = useState(true)
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState(1)
  const [details, setDetails] = useState({
    customerDetails: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      address: "",
    },
    projectDetails: {
      projectName: "",
      projectType: "",
      projectAddress: "",
      numFloors: "",
      lotArea: "",
      floorArea: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      budget: "",
    },
    projectFiles : {

    }
  })
  const [submitError, setSubmitError] = useState(null)

  // Try to advance page; steps expose a static _validate fn
  function tryAdvance() {
    const validators = [
      CreateProject.CustomerDetails._validate,
      CreateProject.ProjectDetails._validate,
      null, // page 3 has no extra validation beyond Upload component
    ]
    const validate = validators[page - 1]
    if (validate && !validate()) return // child sets its own error state
    if (page < PAGE_COUNT) setPage((p) => p + 1)
  }

  function tryBack() {
    if (page > 1) setPage((p) => p - 1)
  }

  const handleSubmit = async () => {
    // Guard: ensure files exist if your Upload component stores them in details
    if (!details.files || details.files.length === 0) {
      setSubmitError(
        "Please upload at least one project file before submitting."
      )
      return
    }
    setSubmitError(null)

    try {
      // TODO: replace with real API call
      console.log("Submitting project:", details)
      setProjects((prev) => [...prev, details])
      setPage(1)
      setDetails({})
    } catch (err) {
      setSubmitError("Submission failed. Please try again.")
    }
  }

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
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
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
        <Drawer
          direction="right"
          onOpenChange={(open) => {
            if (!open) {
              // Reset form when drawer closes
              setPage(1)
              setDetails({})
              setSubmitError(null)
            }
          }}
        >
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
            <DrawerHeader className="grid grid-cols-[1fr_10%] place-content-between border-b">
              <div className="flex flex-row items-center gap-3 px-6 py-4">
                <DrawerClose asChild>
                  <button className="flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                  </button>
                </DrawerClose>
                <DrawerTitle>
                  Create project{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    ({page} / {PAGE_COUNT})
                  </span>
                </DrawerTitle>
              </div>

              {/* Page nav arrows — back arrow also validates */}
              <div className="grid grid-cols-2 place-content-center place-items-center">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className={`cursor-pointer text-3xl ${page === 1 ? "invisible" : ""}`}
                  onClick={tryBack}
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`cursor-pointer text-3xl ${page === PAGE_COUNT ? "invisible" : ""}`}
                  onClick={tryAdvance}
                />
              </div>
            </DrawerHeader>

            {/* BODY */}
            <div className="flex-1 overflow-auto px-6 py-6">
              {submitError && (
                <p className="mb-4 rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">
                  {submitError}
                </p>
              )}

              {page === 1 && (
                <CustomerDetails
                  setPage={setPage}
                  setDetails={setDetails}
                  details={details}
                />
              )}
              {page === 2 && (
                <ProjectDetails
                  setPage={setPage}
                  setDetails={setDetails}
                  details={details}
                />
              )}
              {page === 3 && (
                <ProjectFilesStep
                  setPage={setPage}
                  handleSubmit={handleSubmit}
                  setDetails={setDetails}
                  details={details}
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
                  {item.projectName ?? "Untitled"}
                </CardTitle>
                <CardDescription className="text-xs">
                  {item.projectDescription ?? ""}
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
