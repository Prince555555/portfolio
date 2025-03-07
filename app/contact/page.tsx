"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I&apos;ll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:john.doe@example.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        john.doe@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">San Francisco, California</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Connect with me</h3>
                    <div className="flex gap-4">
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="font-medium mb-3">Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      I&apos;m currently available for freelance projects, contract work, and full-time positions.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Response time: Usually within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto max-w-5xl py-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about my services and work process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h3 className="font-bold">What services do you offer?</h3>
                      <p className="text-sm text-muted-foreground">
                        I specialize in Laravel development, including custom web applications, e-commerce solutions,
                        API development, and SaaS platforms. I also offer database design, performance optimization, and
                        DevOps services.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold">What is your typical project timeline?</h3>
                      <p className="text-sm text-muted-foreground">
                        Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks,
                        while a complex application could take 2-6 months. I&apos;ll provide a detailed timeline during our
                        initial consultation.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold">How do you handle project pricing?</h3>
                      <p className="text-sm text-muted-foreground">
                        I offer both fixed-price and hourly billing options. For well-defined projects, I prefer
                        fixed-price agreements. For ongoing work or projects with evolving requirements, hourly billing
                        may be more appropriate.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold">Do you provide ongoing maintenance?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, I offer maintenance packages for all completed projects. These include regular updates,
                        security patches, performance monitoring, and technical support. Custom maintenance plans are
                        available based on your needs.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold">Can you work with existing codebases?</h3>
                      <p className="text-sm text-muted-foreground">
                        Absolutely. I have extensive experience working with existing Laravel applications, performing
                        code audits, implementing new features, and optimizing performance. I can seamlessly integrate
                        with your current development workflow.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-bold">What is your development process?</h3>
                      <p className="text-sm text-muted-foreground">
                        I follow an agile development approach with regular client communication. My process includes
                        requirements gathering, planning, development sprints, testing, deployment, and post-launch
                        support. I use Git for version control and provide regular progress updates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  )
}

