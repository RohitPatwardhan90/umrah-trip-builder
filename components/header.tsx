import Image from "next/image"
import { Globe, DollarSign, User } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <Image src="/images/nusuk-umrah-logo.png" alt="Nusuk Umrah" width={120} height={40} className="h-8 w-auto" />
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
            Packages
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
            Help & Support
          </a>
          <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary">
            <Globe className="size-4" />
            Language
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary">
            <DollarSign className="size-4" />
            Currency
          </button>
          <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary">
            <User className="size-4" />
            Login
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
