"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react'

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Set launch date to 30 days from now
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 15)
    
    const interval = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)
      
      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
      
      if (difference <= 0) {
        clearInterval(interval)
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission logic here
    alert(`Thank you! We'll notify ${email} when we launch.`)
    setEmail("")
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#050A1C] to-[#0F1A3B] text-white px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Animated Stars */}
      <div className="stars absolute inset-0 overflow-hidden opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="star absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full text-center space-y-8 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_25px_rgba(59,130,246,0.2)]">
        {/* Logo or Brand Name */}
        <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          <span className="text-2xl font-bold">Hey</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="block">We're</span>
          <span className="block text-blue-400 mt-2">Coming Soon</span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-200 max-w-xl mx-auto">
          We're working hard to bring you something amazing. Stay tuned for updates on our launch.
        </p>
        
        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          <div className="bg-black/40 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="text-2xl md:text-4xl font-bold text-white">{days}</div>
            <div className="text-xs md:text-sm text-blue-300">Days</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="text-2xl md:text-4xl font-bold text-white">{hours}</div>
            <div className="text-xs md:text-sm text-blue-300">Hours</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="text-2xl md:text-4xl font-bold text-white">{minutes}</div>
            <div className="text-xs md:text-sm text-blue-300">Minutes</div>
          </div>
          <div className="bg-black/40 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <div className="text-2xl md:text-4xl font-bold text-white">{seconds}</div>
            <div className="text-xs md:text-sm text-blue-300">Seconds</div>
          </div>
        </div>
        
        {/* Notification Form */}
        <div className="max-w-md mx-auto w-full mt-8">
          <p className="text-sm text-blue-200 mb-4">Get notified when we launch:</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-black/30 border-blue-900/50 text-white placeholder:text-blue-300/50 focus:border-blue-400 focus:ring-blue-400/20"
            />
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
            >
              Notify Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900/30">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900/30">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900/30">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:info@example.com" className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-full hover:bg-blue-900/30">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 text-center text-blue-300/70 text-sm">
        &copy; {new Date().getFullYear()} The Entrepreneurship Club. All rights reserved.
      </div>
    </div>
  )
}
