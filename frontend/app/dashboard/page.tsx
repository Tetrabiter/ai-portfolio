"use client"

import type React from "react"

import { useState } from "react"
import {
  FiHome,
  FiPieChart,
  FiSettings,
  FiBell,
  FiLogOut,
  FiMessageSquare,
  FiUser,
  FiMenu,
  FiUpload,
  FiSend,
} from "react-icons/fi"
import Link from "next/link"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedModel, setSelectedModel] = useState("GPT-3.5")
  const [inputMessage, setInputMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
    { role: "user", content: "Can you explain what AI is?" },
    {
      role: "assistant",
      content:
        "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various technologies and approaches aimed at creating smart machines capable of performing tasks that typically require human intelligence.",
    },
  ])

  const aiModels = ["GPT-3.5", "GPT-4", "DALL-E", "Whisper"]
  const recentChats = ["Project Brainstorming", "Code Review", "Data Analysis", "Creative Writing"]
  const quickPrompts = [
    "Explain a complex topic",
    "Generate code for...",
    "Analyze this data set",
    "Write a creative story about...",
  ]

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { role: "user", content: inputMessage }])
      setInputMessage("")
      // Here you would typically call your AI service to get a response
      // For now, we'll just simulate a response after a short delay
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { role: "assistant", content: "This is a simulated response from the AI." },
        ])
      }, 1000)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 font-['Montserrat',sans-serif]">
      {/* Sidebar */}
      <aside
        className={`bg-black text-white w-72 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <nav className="space-y-6 overflow-y-auto h-full pb-20">
          {/* New Chat Button */}
          <div className="px-4">
            <button className="w-full flex items-center justify-center space-x-2 p-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition duration-300">
              <FiMessageSquare className="h-5 w-5" />
              <span className="font-bold">New Chat</span>
            </button>
          </div>

          {/* AI Model Selection */}
          <div className="px-4">
            <label className="block text-sm font-bold mb-2">Select AI Model</label>
            <select
              className="w-full p-2 bg-black border border-white rounded text-white"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              {aiModels.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          {/* Recent Chats */}
          <div className="px-4">
            <h3 className="font-bold mb-2">Recent Chats</h3>
            <ul className="space-y-2">
              {recentChats.map((chat, index) => (
                <li key={index}>
                  <Link href="#" className="block p-2 hover:bg-white hover:text-black rounded transition duration-150">
                    {chat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Prompts */}
          <div className="px-4">
            <h3 className="font-bold mb-2">Quick Prompts</h3>
            <ul className="space-y-2">
              {quickPrompts.map((prompt, index) => (
                <li key={index}>
                  <button className="w-full text-left p-2 hover:bg-white hover:text-black rounded transition duration-150">
                    {prompt}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-2 px-4">
            {[
              { icon: FiHome, label: "Dashboard" },
              { icon: FiPieChart, label: "Analytics" },
              { icon: FiSettings, label: "Settings" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center space-x-2 p-2 hover:bg-white hover:text-black rounded transition duration-150"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="absolute bottom-20 left-0 right-0 px-4">
          <div className="flex items-center space-x-2 p-2 bg-black rounded">
            <div className="bg-black p-1">
              <FiUser className="h-6 w-6" />
            </div>
            <span className="font-bold">John Doe</span>
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button className="flex items-center justify-center space-x-2 w-full p-2 bg-red-600 hover:bg-red-700 rounded text-white transition duration-150">
            <FiLogOut className="h-5 w-5" />
            <span className="font-bold">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md md:hidden">
                <FiMenu className="h-6 w-6" />
              </button>
              <h2 className="text-xl font-bold ml-2">CareerScribe</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 bg-black text-white rounded-full hover:bg-opacity-75 duration-300">
                <FiUpload className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full bg-black text-white hover:bg-opacity-75 duration-300">
                <FiBell className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Chat Interface */}
        <main className="flex-1 overflow-hidden flex flex-col bg-gray-50">
          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${message.role === "user" ? "bg-black text-white" : "bg-white border border-gray-300"} `}
                >
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white rounded-full py-2 px-3 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-200 duration-300"
              >
                <FiSend className="h-5 w-5" />
              </button>
            </form>
          </div>
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

