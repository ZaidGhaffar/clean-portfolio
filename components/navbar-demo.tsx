import { Home, User, Briefcase, FileText } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#products", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: FileText },
  ]

  return <NavBar items={navItems} />
}
