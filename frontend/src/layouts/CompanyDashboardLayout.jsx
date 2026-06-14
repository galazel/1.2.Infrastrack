import React from "react"
import { Outlet } from "react-router-dom"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar"

function CompanyDashboardLayout() {
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

      <Outlet />
    </section>
  )
}

export default CompanyDashboardLayout