'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from '@/components/ui/header'

interface TeamMember {
  name: string;
  position: string;
  image?: string;
}
  
const teamMembers: TeamMember[] = [
  { name: "Kaashvi R", position: "President", image: "/Team/Kaashvi.png" },
  { name: "Neha Nair", position: "Vice President", image: "/Team/Neha Nair_VP.jpg" },
  { name: "Devansh V", position: "Head of Events", image: "/Team/Devansh_Events.jpg" },
  { name: "Shrikrishna Pandit", position: "Head of Events", image: "/Team/Shrikrishna.jpg" },
  { name: "Prathamesh Devadiga", position: "Head of Technology", image: "/Team/Prathamesh.jpg" },
  { name: "Kamya Jha", position: "Head of SMM", image: "/Team/Kamya.jpg" },
  { name: "Shreya S", position: "Head of Corporate Relations", image: "/Team/Shreya S CR.jpg" },
  { name: "Saabith Salem", position: "Head of Corporate Relations", image: "/Team/SaabithSaleem_CR.jpg" },
  { name: "Amogh K", position: "Head of Operations", image: "/Team/amogh_ops_head.jpg" },
  { name: "Parikshil Sharma", position: "Head of Operations", image: "/Team/Parikshilsharma.jpg" },
];

export default function HomeAttachment() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     <Header/>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))_0.1,transparent_2px)] bg-[length:24px_24px]"></div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative z-10">
              <span className="block transform hover:scale-105 transition-transform">The</span>
              <span className="block transform hover:scale-105 transition-transform">Entrepreneurship</span>
              <span className="block transform hover:scale-105 transition-transform">Club</span>
            </h1>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Have an idea but unsure what to do next? Fill out the form to collaborate with us!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-64">Collab Now</Button>
            <Button size="lg" variant="outline" className="w-64">Events</Button>
          </div>
        </div>

        {/* Floating Elements */}
        <Card className="absolute top-1/4 left-[15%] bg-background/10 backdrop-blur-sm transform -rotate-12 hover:rotate-0 transition-transform">
          <CardContent className="p-6">
            <p className="text-lg font-semibold">5+</p>
            <p className="text-sm text-muted-foreground">Startups Launched</p>
          </CardContent>
        </Card>
        <Card className="absolute bottom-1/4 right-[15%] bg-primary/10 backdrop-blur-sm transform rotate-12 hover:rotate-0 transition-transform">
          <CardContent className="p-6">
            <p className="text-lg font-semibold">30+</p>
            <p className="text-sm text-muted-foreground">Events Hosted</p>
          </CardContent>
        </Card>
        <Card className="absolute top-1/4 right-[20%] bg-background/10 backdrop-blur-sm transform rotate-6 hover:rotate-0 transition-transform">
          <CardContent className="p-6">
            <p className="text-lg font-semibold">50+</p>
            <p className="text-sm text-muted-foreground">Active Members</p>
          </CardContent>
        </Card>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary))_0.1,transparent_2px)] bg-[length:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/assets/hero_demo.webp"
                  alt="Students collaborating"
                  width={600}
                  height={600}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-8 leading-tight">
                E CLUB: Fueling Entrepreneurship at PESU
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  We are more than just a club – we&apos;re a community of dreamers, innovators, and future leaders. Our mission is to foster entrepreneurial spirit and provide the resources needed to turn ideas into successful ventures.
                </p>
                <p>
                  Through mentorship, workshops, and networking events, we help students develop the skills and connections they need to succeed in the startup ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">30+</h3>
                      <p className="text-muted-foreground">Events hosted</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2">50+</h3>
                      <p className="text-muted-foreground">Active Members</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="coming-soon" className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Events</h2>
          <p className="text-muted-foreground mt-4">Stay tuned for exciting updates!</p>
        </div>
      </section>

      {/*GALLERY SECTION*/}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="overflow-hidden hover:scale-105 transition-transform rounded-lg shadow-md">
              <Image
                src="/Gallery/1.jpg"
                alt="Gallery image 1"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden hover:scale-105 transition-transform rounded-lg shadow-md">
              <Image
                src="/Gallery/2.jpg"
                alt="Gallery image 2"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden hover:scale-105 transition-transform rounded-lg shadow-md">
              <Image
                src="/Gallery/3.jpg"
                alt="Gallery image 3"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden hover:scale-105 transition-transform rounded-lg shadow-md">
              <Image
                src="/Gallery/4.jpeg"
                alt="Gallery image 4"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden hover:scale-105 transition-transform rounded-lg shadow-md">
              <Image
                src="/Gallery/5.jpeg"
                alt="Gallery image 4"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <Image
                    src={member.image || "/default-avatar.jpg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
