import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import Image from "@/components/Image"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function SetupAccount() {
  const navigate = useNavigate()

  const images = [
    {
      image: "/client.png",
      alt: "Client",
      link: "/register/client",
      description:
        "Create your account to track your construction project progress, view updates, and chat with your contractor in real time.",
    },
    {
      image: "/company.png",
      alt: "Company",
      link: "/register/company",
      description:
        "Create a company account to manage construction projects, upload progress updates, and keep clients informed in real time.",
    },
  ]
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-5">
      <h2>Setup Account</h2>
      <div className="flex h-50 w-full items-center justify-center gap-5">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                navigate(item.link, {
                  state: { description: item.description },
                })
              }
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="h-full cursor-pointer rounded-full transition-transform hover:scale-105"
                  ></Image>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{item.alt}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SetupAccount
