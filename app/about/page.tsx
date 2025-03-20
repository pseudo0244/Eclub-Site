"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header"
import { ArrowRight, CheckCircle } from "lucide-react"
import Footer from "@/components/ui/footer"

// Type definitions
interface TimelineEvent {
  year: string
  title: string
  description: string
  image: string
}

interface TimelineItemProps {
  event: TimelineEvent
  index: number
  isLast: boolean
}

// Timeline data
const timelineEvents: TimelineEvent[] = [
  {
    year: "2018",
    title: "Club Foundation",
    description:
      "The Entrepreneurship Club was founded with a vision to foster innovation and entrepreneurial spirit among students at PESU.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2019",
    title: "First E-Summit",
    description:
      "Successfully organized our first E-Summit with over 500 participants, featuring workshops, panel discussions, and a startup expo.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    year: "2020",
    title: "Virtual Transition",
    description:
      "Adapted to the pandemic by transitioning to virtual events, reaching a wider audience and hosting international speakers.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Our values data
const ourValues = [
  {
    title: "Innovation",
    description: "We encourage creative thinking and novel approaches to solving problems.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and collective intelligence.",
  },
  {
    title: "Resilience",
    description: "We embrace failures as learning opportunities and persist through challenges.",
  },
  {
    title: "Impact",
    description: "We strive to create meaningful change in our community and beyond.",
  },
]

// Timeline Item component with animation
const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, isLast }) => {
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && <div className="absolute left-[19px] top-7 w-1 bg-blue-600/50 h-full z-0"></div>}

      <div className="grid md:grid-cols-[40px_1fr] gap-4 md:gap-8 mb-12 relative z-10">
        {/* Year bubble */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            {index + 1}
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
            <div className="bg-black/40 border border-blue-900/50 rounded-xl p-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <div className="text-blue-400 font-bold mb-1">{event.year}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
              <p className="text-blue-200">{event.description}</p>
            </div>
          </div>
          <div className={`order-1 ${isEven ? "md:order-1" : "md:order-2"}`}>
            <div className="overflow-hidden rounded-xl border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#050A1C] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Our <span className="text-blue-400">Journey</span> of Innovation
              </h1>
              <p className="text-lg text-blue-200 mb-8">
                Discover the story behind The Entrepreneurship Club, our mission, values, and the impact we've made in
                fostering the next generation of entrepreneurs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300">
                  <Link href="/archive">
                    Our Archive
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950/50">
                  <Link href="#timeline">Our Timeline</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <Image
                  src="/assets/comingsoon.webp"
                  alt="Team collaboration"
                  width={600}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#050A1C] to-[#0F1A3B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                  <Image
                    src="/assets/comingsoon.webp"
                    alt="Our mission"
                    width={600}
                    height={600}
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Our <span className="text-blue-400">Mission</span>
              </h2>
              <div className="space-y-6 text-blue-200">
                <p>
                  At The Entrepreneurship Club, our mission is to cultivate an environment where innovation thrives and
                  entrepreneurial mindsets are developed. We aim to bridge the gap between academic learning and
                  real-world business challenges.
                </p>
                <p>
                  We provide students with the tools, resources, and connections they need to transform their ideas into
                  viable businesses. Through workshops, mentorship programs, networking events, and startup
                  competitions, we create opportunities for hands-on learning and growth.
                </p>
                <p>
                  Our goal is to inspire and empower the next generation of entrepreneurs who will drive economic growth
                  and create positive social impact through their ventures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Our <span className="text-blue-400">Values</span>
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              These core principles guide our approach and define our community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ourValues.map((value, index) => (
              <div
                key={index}
                className="bg-black/40 border border-blue-900/50 rounded-xl p-6 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                <CheckCircle className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-blue-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#050A1C] to-[#0F1A3B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Our <span className="text-blue-400">Timeline</span>
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Tracing our journey from inception to where we stand today
            </p>
          </div>

          <div className="ml-4 md:ml-0">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} isLast={index === timelineEvents.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black/40 border border-blue-900/50 rounded-xl p-8 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
              <div className="text-white font-medium">Events Hosted</div>
            </div>
            <div className="bg-black/40 border border-blue-900/50 rounded-xl p-8 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-white font-medium">Startups Launched</div>
            </div>
            <div className="bg-black/40 border border-blue-900/50 rounded-xl p-8 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white font-medium">Active Members</div>
            </div>
            <div className="bg-black/40 border border-blue-900/50 rounded-xl p-8 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-white font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/40 border border-blue-900/50 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Join Our <span className="text-blue-400">Community</span>
            </h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Be part of a vibrant community of innovators, dreamers, and doers. Whether you have a business idea or
              just want to learn more about entrepreneurship, we welcome you to join us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
              >
                <Link href="/join">
                  Become a Member
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-400 hover:bg-blue-950/50"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

