import Header from "@/components/header"
import Navigation from "@/components/navigation"
import QuickLinks from "@/components/quick-links"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
       
        <QuickLinks />
      </main>
      <Footer />
    </div>
  )
}

