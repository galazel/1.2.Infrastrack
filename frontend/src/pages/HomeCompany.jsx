import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faGrip, faBars, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Card } from "@/components/ui/card"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  CustomerDetails,
  ProjectDetails,
  ProjectFilesStep,
} from "../pages/CreateProject"

import * as CreateProject from "../pages/CreateProject"

const PAGE_COUNT = 3

const EMPTY_DETAILS = {
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
  projectFiles: {
    coverImage: null,
    sections: {
      "Room Layouts": [],
      "Floor Plans": [],
      Blueprints: [],
    },
  },
}

function HomeCompany() {
  const [isGrid, setIsGrid] = useState(true)
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState(1)
  const [details, setDetails] = useState(EMPTY_DETAILS)
  const [submitError, setSubmitError] = useState(null)
  const closeDrawerRef = useRef()
  const navigate = useNavigate()

  function tryAdvance() {
    const validators = [
      CreateProject.CustomerDetails._validate,
      CreateProject.ProjectDetails._validate,
      null,
    ]
    const validate = validators[page - 1]
    if (validate && !validate()) return
    if (page < PAGE_COUNT) setPage((p) => p + 1)
  }

  function tryBack() {
    if (page > 1) setPage((p) => p - 1)
  }

  const handleSubmit = async () => {
    const hasFiles =
      details.projectFiles?.coverImage ||
      Object.values(details.projectFiles?.sections ?? {}).some((arr) => arr.length > 0)

    if (!hasFiles) {
      setSubmitError("Please upload at least one project file before submitting.")
      return
    }
    setSubmitError(null)

    try {
      console.log("Submitting project:", details)
      setProjects((prev) => [...prev, details])
      setPage(1)
      setDetails(EMPTY_DETAILS)
      closeDrawerRef.current?.click()
    } catch (err) {
      setSubmitError("Submission failed. Please try again.")
    }
  }

  function resetForm() {
    setPage(1)
    setDetails(EMPTY_DETAILS)
    setSubmitError(null)
  }

  return (
    <>
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
        <Drawer direction="right" onOpenChange={(open) => { if (!open) resetForm() }}>
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

          <DrawerContent
            style={{ width: "50vw", maxWidth: "none" }}
            className="fixed inset-y-0 right-0 h-screen rounded-l-xl border-l bg-background p-0"
          >
            <DrawerHeader className="grid grid-cols-[1fr_10%] place-content-between border-b">
              <div className="flex flex-row items-center gap-3 px-6 py-4">
                <DrawerClose asChild>
                  <button
                    ref={closeDrawerRef}
                    className="flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
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

            <div className="flex-1 overflow-auto px-6 py-6">
              {submitError && (
                <p className="mb-4 rounded-md bg-destructive/10 px-4 py-2 text-sm text-destructive">
                  {submitError}
                </p>
              )}
              {page === 1 && (
                <CustomerDetails setPage={setPage} setDetails={setDetails} details={details} />
              )}
              {page === 2 && (
                <ProjectDetails setPage={setPage} setDetails={setDetails} details={details} />
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
        {projects.map((item, index) => {
          const firstImage =
            item.projectFiles?.coverImage ??
            Object.values(item.projectFiles?.sections ?? {}).flat().find(Boolean) ??
            null

          return (
            <div key={index} className={isGrid ? "col-span-1" : "w-full"}>
              <Card
                className="relative h-full min-h-[280px] w-full cursor-pointer overflow-hidden transition-shadow hover:shadow-md"
                onClick={() => navigate(`${index}`, { state: { projectDetails: item } })}
              >
                {firstImage ? (
                  <img
                    src={firstImage.preview}
                    alt={firstImage.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <span className="text-xs text-muted-foreground">No image</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                  <p className="text-sm font-semibold text-white">
                    {item.projectDetails?.projectName ?? "Untitled"}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs text-white/70">
                    {item.projectDetails?.projectDescription ?? ""}
                  </p>
                  {item.projectDetails?.startDate && (
                    <p className="mt-1 text-xs text-white/50">
                      Starts {new Date(item.projectDetails.startDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </Card>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default HomeCompany