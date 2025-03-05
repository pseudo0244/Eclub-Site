"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/header"
import { ArrowRight, ExternalLink } from "lucide-react"

interface TeamMember {
  name: string
  position: string
  image?: string
}

const teamMembers: TeamMember[] = [
  { name: "Riya Lall", position: "President", image: "/Team/riya.jpg" },
  { name: "Kartik B Patil", position: "Vice President", image: "/Team/kartik.jpg" },
  { name: "Kashvi Rathod", position: "Head of Events", image: "/Team/kashvi.jpg" },
  { name: "Ishaan", position: "Head of Events", image: "/Team/ishaan.jpeg" },
  { name: "Harshith J", position: "Head of Technology", image: "/Team/harshith.jpg" },
  { name: "Riona Pradhan", position: "Head of SMM", image: "/Team/riona.jpg" },
  { name: "Pratyush Sinha", position: "Head of Marketing", image: "/Team/pratyush.jpg" },
  { name: "Raghav Malani", position: "Head of Corporate Relations", image: "/Team/raghav.jpg" },
  { name: "Anshul", position: "Head of Operations", image: "/Team/anshul.jpg" },
]

// Gallery images - added more images
const galleryImages = [
  "/Gallery/1.jpg",
  "/Gallery/2.jpg",
  "/Gallery/3.jpg",
  "/Gallery/4.jpeg",
  "/Gallery/5.jpeg",
  "/Gallery/1.jpg", // Duplicated for demo
  "/Gallery/2.jpg", // Duplicated for demo
  "/Gallery/3.jpg", // Duplicated for demo
  "/Gallery/4.jpeg", // Duplicated for demo
]

export default function HomeAttachment() {
  return (
    <div className="min-h-screen bg-[#050A1C] text-white">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-16 md:mt-0">
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight relative z-10 text-white">
              <span className="block transform hover:scale-105 transition-transform">The</span>
              <span className="block transform hover:scale-105 transition-transform">
                <span className="text-blue-400">Entrepreneurship</span>
              </span>
              <span className="block transform hover:scale-105 transition-transform">Club</span>
            </h1>
            <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-blue-200 max-w-2xl mx-auto">
            Have an idea but unsure what to do next? Fill out the form to collaborate with us!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-64 bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
            >
              Collab Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-64 border-blue-400 text-blue-200 hover:bg-blue-900/30"
            >
              Events
            </Button>
          </div>
        </div>

        {/* Floating Elements - Hidden on small screens, visible on medium and up */}
        <Card className="hidden md:block absolute top-1/4 left-[5%] lg:left-[15%] bg-black/40 backdrop-blur-sm transform -rotate-12 hover:rotate-0 transition-transform border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <CardContent className="p-4 lg:p-6">
            <p className="text-base lg:text-lg font-semibold text-blue-200">5+</p>
            <p className="text-xs lg:text-sm text-blue-300/70">Startups Launched</p>
          </CardContent>
        </Card>
        <Card className="hidden md:block absolute bottom-1/4 right-[5%] lg:right-[15%] bg-blue-950/40 backdrop-blur-sm transform rotate-12 hover:rotate-0 transition-transform border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <CardContent className="p-4 lg:p-6">
            <p className="text-base lg:text-lg font-semibold text-blue-200">30+</p>
            <p className="text-xs lg:text-sm text-blue-300/70">Events Hosted</p>
          </CardContent>
        </Card>
        <Card className="hidden md:block absolute top-1/4 right-[10%] lg:right-[20%] bg-black/40 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <CardContent className="p-4 lg:p-6">
            <p className="text-base lg:text-lg font-semibold text-blue-200">50+</p>
            <p className="text-xs lg:text-sm text-blue-300/70">Active Members</p>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                <Image
                  src="/assets/hero_demo.webp"
                  alt="Students collaborating"
                  width={600}
                  height={600}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight text-white">
                E CLUB: <span className="text-blue-400">Fueling Entrepreneurship</span> at PESU
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-blue-200">
                <p>
                  We are more than just a club – we&apos;re a community of dreamers, innovators, and future leaders. Our
                  mission is to foster entrepreneurial spirit and provide the resources needed to turn ideas into
                  successful ventures.
                </p>
                <p>
                  Through mentorship, workshops, and networking events, we help students develop the skills and
                  connections they need to succeed in the startup ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8 md:mt-12">
                  <Card className="bg-black/40 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-200">30+</h3>
                      <p className="text-sm md:text-base text-blue-300/70">Events hosted</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-black/40 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-blue-200">50+</h3>
                      <p className="text-sm md:text-base text-blue-300/70">Active Members</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="coming-soon" className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#050A1C] to-[#0F1A3B]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            <span className="text-blue-400">Upcoming</span> Events
          </h2>
          <p className="text-blue-300/70 mt-2 md:mt-4 mb-8">Stay tuned for exciting updates!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/40 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Event"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Brand Blitz</h3>
                <p className="text-blue-200 mb-4">Coming Soon</p>
                <Button variant="outline" className="w-full border-blue-400 text-blue-200 hover:bg-blue-900/30 group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Event"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Wolf of Wall Street </h3>
                <p className="text-blue-200 mb-4">Coming Soon</p>
                <Button variant="outline" className="w-full border-blue-400 text-blue-200 hover:bg-blue-900/30 group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-900 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Event"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">E Summit 25</h3>
                <p className="text-blue-200 mb-4">Coming Soon</p>
                <Button variant="outline" className="w-full border-blue-400 text-blue-200 hover:bg-blue-900/30 group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*GALLERY SECTION*/}
      <section id="gallery" className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white">
            Our <span className="text-blue-400">Gallery</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300">
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#050A1C] to-[#0F1A3B]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
            Meet Our <span className="text-blue-400">Team</span>
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-black/30 rounded-xl border border-blue-900/30 hover:border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group"
              >
                <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <Image
                    src={member.image || "/default-avatar.jpg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg md:text-xl mt-4 text-white">{member.name}</h3>
                <p className="text-sm md:text-base text-blue-300/70">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-[#050A1C] border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">The Entrepreneurship Club</h3>
              <p className="text-blue-200 mb-4">Fostering innovation and entrepreneurship at PESU.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-200 hover:text-blue-100 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#coming-soon" className="text-blue-200 hover:text-blue-100 transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-blue-200 hover:text-blue-100 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-blue-200 hover:text-blue-100 transition-colors">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
              <p className="text-blue-200 mb-2">Email: info@eclub.com</p>
              <p className="text-blue-200 mb-4">Location: PESU Campus, Bangalore</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get in Touch</Button>
            </div>
          </div>

          <div className="border-t border-blue-900/30 mt-8 pt-8 text-center">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} The Entrepreneurship Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

