"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const navItems = [
  {
    title: "Departments",
    items: [
      { name: "HR", url: "https://hr.company.com" },
      { name: "Finance", url: "https://finance.company.com" },
      { name: "Marketing", url: "https://marketing.company.com" },
      { name: "IT", url: "https://it.company.com" },
      { name: "Sales", url: "https://sales.company.com" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Email", url: "https://mail.company.com" },
      { name: "CRM", url: "https://crm.company.com" },
      { name: "Project Management", url: "https://projects.company.com" },
      { name: "Time Tracking", url: "https://time.company.com" },
      { name: "Knowledge Base", url: "https://kb.company.com" },
    ],
  },
  {
    title: "External Sites",
    items: [
      { name: "Baidu", url: "https://www.baidu.com" },
      { name: "Google", url: "https://www.google.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com" },
    ],
  },
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {navItems.map((category) => (
          <li key={category.title} className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
              onClick={() => setActiveDropdown(activeDropdown === category.title ? null : category.title)}
            >
              <span>{category.title}</span>
              <ChevronDown size={16} />
            </button>
            {activeDropdown === category.title && (
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

