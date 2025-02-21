"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaChevronDown, FaCheck, FaRocket, FaUserTie, FaClock, FaPlay, FaPause } from "react-icons/fa"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center'
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-white text-black border border-black hover:bg-gray-100'
  }
  const sizeStyles = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl font-bold">CareerScribe</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="outline">Contact</Button>
          </motion.div>
        </nav>
      </header>

      <main>
        <Hero isVisible={isVisible} />
        <ProductOverview isVisible={isVisible} />
        <Demo isVisible={isVisible} />
        <Benefits isVisible={isVisible} />
        <SocialProof isVisible={isVisible} />
        <Plans isVisible={isVisible} />
      </main>

      <footer className="container mx-auto py-6 text-center text-gray-500">
        <p>&copy; 2025 HR LLM Assistant. All rights reserved.</p>
      </footer>
    </div>
  )
}

function Hero({ isVisible }: { isVisible: boolean }) {
  return (
    <section className="container mx-auto py-20 text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Tired of Sifting Through Endless Resumes?
      </motion.h2>
      <motion.p
        className="text-xl mb-8 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let AI Revolutionize Your HR Process and Find the Perfect Candidates Faster
      </motion.p>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href={"/dashboard"}>
          <Button
            className=""
            size="lg"
          >
            Get Started
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

function ProductOverview({ isVisible }: { isVisible: boolean }) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">What is HR LLM Assistant?</h3>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-lg mb-4">
              HR LLM Assistant is an AI-powered tool that revolutionizes the way HR professionals handle resumes and
              create portfolios. Our advanced language model understands the nuances of job descriptions and candidate
              qualifications, making the hiring process faster and more efficient.
            </p>
            <p className="text-lg">
              Whether you're an HR manager drowning in applications or a job seeker looking to stand out, our AI
              assistant is here to help. It can quickly analyze resumes, highlight key qualifications, and even assist
              in creating compelling portfolios that showcase candidates' strengths.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Key Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> AI-powered resume analysis
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Intelligent portfolio creation
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Customizable screening criteria
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Integration with popular ATS
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> 24/7 AI support for HR queries
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Demo({ isVisible }: { isVisible: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    const video = document.getElementById("demo-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
    }
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">See HR LLM Assistant in Action</h3>
        <motion.div
          className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <video
            id="demo-video"
            className="w-full rounded-lg"
            poster="/placeholder.svg?height=400&width=800"
            loop
            muted
          >
            <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="bg-white bg-opacity-75 hover:bg-opacity-100 transition-all"
              onClick={togglePlay}
            >
              {isPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
              <span>{isPlaying ? "Pause" : "Play"} Demo</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Benefits({ isVisible }: { isVisible: boolean }) {
  const benefits = [
    {
      icon: <FaRocket className="w-12 h-12 text-blue-500" />,
      title: "Increased Efficiency",
      description:
        "Reduce time spent on resume screening by up to 75%, allowing you to focus on the most promising candidates.",
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
      title: "Better Candidate Matches",
      description:
        "Our AI understands the nuances of job requirements and candidate qualifications, leading to more accurate matches.",
    },
    {
      icon: <FaClock className="w-12 h-12 text-blue-500" />,
      title: "Time-Saving Portfolio Creation",
      description:
        "Help candidates create stunning portfolios in minutes, not hours, showcasing their best work effortlessly.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose HR LLM Assistant?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="h-20 flex items-center justify-center mb-4">{benefit.icon}</div>
              <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof({ isVisible }: { isVisible: boolean }) {
  const testimonials = [
    { name: "John Doe", role: "HR Manager", text: "This tool has streamlined our hiring process significantly!" },
    { name: "Jane Smith", role: "Recruiter", text: "The quality of resumes we receive has improved dramatically." },
    {
      name: "Mike Johnson",
      role: "Job Seeker",
      text: "I landed my dream job thanks to the portfolio created by this AI!",
    },
    {
      name: "Emily Brown",
      role: "Career Coach",
      text: "An invaluable tool for my clients. It's revolutionizing career development!",
    },
    {
      name: "Alex Lee",
      role: "Startup Founder",
      text: "As a small business owner, this AI has made hiring top talent much easier.",
    },
    {
      name: "Sarah Connor",
      role: "IT Professional",
      text: "The AI's understanding of tech roles is impressive. Great for IT resumes!",
    },
    {
      name: "David Miller",
      role: "Recent Graduate",
      text: "Helped me create a standout portfolio with limited work experience.",
    },
    {
      name: "Lisa Taylor",
      role: "HR Director",
      text: "The time saved on resume screening is phenomenal. Highly recommended!",
    },
  ]

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">What Our Users Say</h3>
        <div className="hidden md:block">
          <motion.div
            className="flex space-x-8"
            animate={{ x: [0, -3000] }}
            transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="md:hidden grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Plans({ isVisible }: { isVisible: boolean }) {
  const plans = [
    { name: "Basic", price: "$9.99/mo", features: ["Resume Builder", "Basic Portfolio", "24/7 AI Support"] },
    {
      name: "Pro",
      price: "$19.99/mo",
      features: ["Advanced Resume Builder", "Custom Portfolio", "Priority AI Support", "Interview Preparation"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Full HR Suite Integration",
        "Dedicated Account Manager",
        "Custom AI Model Training",
        "Analytics Dashboard",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2 flex items-center">
                    <FaCheck className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-auto">
                Select Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

