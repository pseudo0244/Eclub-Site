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
    title: "Wolf of Wall Street",
    date: "November 18-19, 2022",
    location: "PES University EC Campus, MRD Auditorium",
    attendance: "550+ participants",
    description:
      "Wolf of Wall Street is an annual overnight stock market event organized by The Entrepreneurship Club of PES University, EC Campus. The event provided participants with a hands-on experience in trading and financial literacy by simulating real-time trades on the New York Stock Exchange using Investopedia. The event featured learning sessions, interactive games, and a competitive trading simulation, culminating in a thrilling finale with cash prizes for the top performers.",
    highlights: [
      "Insights on stock markets, investments, and financial wellness from industry experts Mr. Karthick CS and Mr. Kumar Ranjan.",
      "Participants traded in real-time using Investopedia, aiming to maximize profits.",
      "Interactive games including chess, carrom, and BINGO.",
      "A high-energy Bollywood dance performance by Terpsichore.",
      "Cash prizes worth ₹27,000 awarded to the top three teams."
    ],
    image: "/Events_past/wow.png",
    link: "/events/wolf-of-wall-street-2022",
  },
  {
    id: 2,
    title: "Brand Wars",
    date: "April 13, 2022",
    location: "PES University EC Campus, Seminar Hall 1",
    attendance: "50+ participants",
    description:
      "Brand Wars was a business-themed debate and marketing competition aimed at highlighting the importance and impact of marketing on a brand’s growth and recognition. The event sought to motivate students to think creatively and understand the role of marketing in determining a brand’s sustainability in a competitive industry.",
    highlights: [
      "Round 1 – Made its Mark: A quiz testing participants' knowledge of renowned brands, logos, and marketing campaigns.",
      "Round 2 – What if...?: Teams created innovative marketing campaigns for eccentric products.",
      "Round 3 – Pressing Matters: A debate simulating press conferences, where teams defended their brands' controversial marketing strategies.",
      "Cash prizes worth ₹3,000 awarded to the top three teams."
    ],
    image: "/Events_past/brandwars.png",
    link: "/events/brand-wars-2022",
  },
  {
    id: 3,
    title: "PIONEER",
    date: "June 23, 2020",
    location: "Virtual Event (Conducted over Discord)",
    attendance: "150+ participants",
    description:
      "PIONEER was a virtual one-day business crunch event aimed to stimulate entrepreneurial skills by challenging participants to revamp business models of existing companies to meet the needs of the post-COVID world.",
    highlights: [
      "Round 1: Teams revamped the Business Model Canvas (BMC) for companies like Ola, Nykaa, and MakeMyTrip within a tight deadline.",
      "Round 2: Top 10 teams pitched their revamped business models to a panel of judges.",
      "Prizes: Winning team awarded ₹5,000, and runners-up received ₹2,000.",
      "Judges praised the event for its organization and relevance."
    ],
    image: "/Events_past/pioneer.png",
    link: "/events/pioneer-2020",
  },
  {
    id: 4,
    title: "The Search",
    date: "January 24-25, 2021",
    location: "Virtual Event (Conducted over Discord and Google Meet)",
    attendance: "124 registrations, 73 submissions",
    description:
      "The Search was a two-day virtual business event organized to identify students with exceptional managerial skills and business acumen, testing participants across multiple business challenges.",
    highlights: [
      "Round 1 – Trivia: Participants' knowledge of brands and taglines was tested.",
      "Round 2 – On-the-Spot Marketing: Teams pitched quirky products to the jury under time constraints.",
      "Round 3 – Business Plan: Participants developed and submitted business plans for a product/service of their choice.",
      "Round 4 – Stress Interview: Finalists presented their business plans and faced a rigorous interview with the judge.",
      "Cash prizes worth ₹4,000 awarded to the winner and runner-up."
    ],
    image: "/Events_past/thesearch.png",
    link: "/events/the-search-2021",
  },
  {
    id: 5,
    title: "Break: A Combat of Intellect",
    date: "August 16, 2020",
    location: "Virtual Event (Conducted over Google Meet)",
    attendance: "20 teams, 35 individuals",
    description:
      "Break was PES University's first online debate competition, themed around business and entrepreneurship, featuring three debate rounds judged by industry professionals.",
    highlights: [
      "Three engaging debate rounds on contemporary business topics.",
      "Judges: Bhavana AS (Product Manager, BigBasket) and Dr. Biplab Sarkar (Associate Professor, PES University).",
      "Participants praised the event for its smooth execution and engaging format."
    ],
    image: "/Events_past/demo.jpg",
    link: "/events/break-2020",
  },
];


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

