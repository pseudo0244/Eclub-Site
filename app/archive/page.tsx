import Image from "next/image"
import Link from "next/link"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, ExternalLink, ArrowRight } from "lucide-react"

// Sample past events data - replace with your actual data
const pastEvents = [
  {
    id: 1,
    title: "E-Summit 2023",
    date: "March 15-16, 2023",
    location: "PESU Main Campus",
    attendance: "500+ participants",
    description:
      "Our flagship event brought together entrepreneurs, investors, and students for two days of inspiring talks, workshops, and networking. Featured keynote speakers included founders from successful startups and venture capitalists sharing insights on the startup ecosystem.",
    highlights: [
      "Startup pitch competition with prizes worth ₹5 Lakhs",
      "Panel discussions on emerging technologies",
      "Networking sessions with industry leaders",
      "Hands-on workshops on business model canvas",
    ],
    image: "/Events_past/esummit.png",
    link: "/events/e-summit-2023",
  },
  {
    id: 2,
    title: "Wolf of Wall Street 2023",
    date: "November 10, 2023",
    location: "PESU EC Campus",
    attendance: "300+ participants",
    description:
      "A high-energy stock market simulation event where participants traded virtual stocks in a realistic market environment. Students learned about market dynamics, investment strategies, and financial decision-making through practical experience.",
    highlights: [
      "Real-time trading simulation",
      "Market crash and boom scenarios",
      "Expert sessions on investment strategies",
      "Prizes for top-performing traders",
    ],
    image: "/Events_past/wow.png",
    link: "/events/wolf-wall-street-2023",
  },
  {
    id: 3,
    title: "Brand Blitz 2023",
    date: "September 5, 2023",
    location: "Virtual Event",
    attendance: "250+ participants",
    description:
      "A marketing competition that challenged participants to develop comprehensive branding strategies for fictional products. Teams worked on creating brand identities, marketing campaigns, and go-to-market strategies.",
    highlights: [
      "Brand identity development workshop",
      "Digital marketing masterclass",
      "Pitch presentations to marketing professionals",
      "Feedback sessions with industry experts",
    ],
    image: "/Events_past/brand.png",
    link: "/events/brand-blitz-2023",
  },
  {
    id: 4,
    title: "Startup Weekend",
    date: "July 22-24, 2023",
    location: "PESU Innovation Center",
    attendance: "150+ participants",
    description:
      "An intensive 54-hour event where participants formed teams, validated ideas, built prototypes, and pitched their startups. Mentors from various industries provided guidance throughout the weekend to help refine business models and product concepts.",
    highlights: [
      "Idea validation techniques",
      "Rapid prototyping sessions",
      "Business model development",
      "Final pitch to investor panel",
    ],
    image: "/placeholder.svg?height=400&width=600",
    link: "/events/startup-weekend-2023",
  },
  {
    id: 5,
    title: "Tech Entrepreneurship Workshop",
    date: "April 8, 2023",
    location: "PESU RR Campus",
    attendance: "200+ participants",
    description:
      "A collaborative workshop focused on the intersection of technology and entrepreneurship. Participants learned how to identify tech-enabled business opportunities and develop solutions using the latest technologies.",
    highlights: [
      "AI and ML in business applications",
      "Building MVPs with limited resources",
      "Technical co-founder relationships",
      "Case studies of successful tech startups",
    ],
    image: "/placeholder.svg?height=400&width=600",
    link: "/events/tech-entrepreneurship-2023",
  },
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-[#050A1C] text-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Event <span className="text-blue-400">Archive</span>
            </h1>
            <p>Explore our past events and the impact they&apos;ve made on our entrepreneurial community</p>

          </div>
        </section>

        {/* Archive Content */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16 md:space-y-24">
              {pastEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Decorative Elements */}
                  <div
                    className={`absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-blue-600 
                    ${index % 2 === 0 ? "-top-10 -right-10" : "-bottom-10 -left-10"}`}
                  ></div>

                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}
                  >
                    <div className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{event.title}</h2>

                        <div className="flex flex-wrap gap-4 text-sm text-blue-300">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{event.attendance}</span>
                          </div>
                        </div>

                        <p className="text-blue-200">{event.description}</p>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-white">Event Highlights:</h3>
                          <ul className="space-y-1 text-blue-200">
                            {event.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-400 text-lg leading-tight">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
                          >
                            <Link href={event.link}>
                              View Event Details
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <div className="relative rounded-xl overflow-hidden border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/40 border border-blue-900/50 rounded-2xl p-8 md:p-12 shadow-[0_0_25px_rgba(59,130,246,0.3)] text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to attend our <span className="text-blue-400">upcoming events</span>?
              </h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Stay updated with our latest events and opportunities. Join our community to get early access and
                exclusive invitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300"
                >
                  <Link href="/events">
                    Upcoming Events
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-400 hover:bg-blue-950/50"
                >
                  <Link href="/join">Join Our Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

