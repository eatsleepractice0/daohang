import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Calendar, FileText, HelpCircle, Coffee, Users } from "lucide-react"

const quickLinks = [
  {
    title: "MES",
    icon: Mail,
    href: "https://172.27.1.79:3100/#",
    description: "MES",
  },
  {
    title: "海康AGV",
    icon: Calendar,
    href: "https://172.27.1.83/",
    description: "View and manage your schedule",
  },

]

export default function QuickLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quickLinks.map((link) => (
        <Card key={link.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{link.title}</CardTitle>
            <link.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Access {link.title}
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

