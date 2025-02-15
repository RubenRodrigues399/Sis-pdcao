import Footer from "@/components/Footer"
import NavBarIn from "@/components/NavBarIn"
import { ReactNode } from "react"

type PrivateLayoutProps = {
  children: ReactNode
}

export default function PrivateLayout({ children }: Readonly<PrivateLayoutProps>) {
  return (
    <>
      <NavBarIn />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}