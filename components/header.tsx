import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          
          <h1 className="text-xl font-semibold text-gray-800">Company Navigator</h1>
        </div>
        <div className="relative w-64">
          <Input type="search" placeholder="Search resources..." className="pl-10" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
    </header>
  )
}

