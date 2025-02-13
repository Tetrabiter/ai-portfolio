import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, MessageSquare, Download } from "lucide-react"
import FeatureCard from "@/components/FeatureCard"
import Testimonial from "@/components/Testimonial"
import PricingCard from "@/components/PricingCard"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <FileText className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AI Portfolio Builder</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Your Professional Portfolio in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload your resume, chat with AI, and get a personalized portfolio tailored to your career.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/upload">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<FileText className="h-10 w-10" />}
                title="Smart Resume Analysis"
                description="Our AI analyzes your resume to extract key information and skills."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10" />}
                title="Interactive AI Chat"
                description="Refine your portfolio through a personalized chat with our AI assistant."
              />
              <FeatureCard
                icon={<Download className="h-10 w-10" />}
                title="Multiple Export Formats"
                description="Download your portfolio in PDF, Markdown, or HTML formats."
              />
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Testimonial
                quote="AI Portfolio Builder helped me create a stunning portfolio in no time. It's a game-changer!"
                author="Sarah J., UX Designer"
              />
              <Testimonial
                quote="The AI-powered chat asked insightful questions that made my portfolio truly stand out."
                author="Michael T., Software Engineer"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PricingCard
                title="Basic"
                price="Free"
                features={["1 portfolio generation", "Basic templates", "PDF export"]}
              />
              <PricingCard
                title="Pro"
                price="$9.99/mo"
                features={["Unlimited portfolios", "Premium templates", "All export formats", "Priority AI chat"]}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={["Custom AI training", "Dedicated support", "API access", "Custom integrations"]}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AI Portfolio Builder. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

