import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Github, Linkedin, Mail, Server, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SkillCard } from "@/components/skill-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="inline-block font-bold">Coder ABC</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Laravel Developer & Web Artisan
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Building robust, scalable web applications with Laravel, PHP, and modern web technologies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button size="lg">Get in Touch</Button>
                  </Link>
                  <Link href="#projects">
                    <Button size="lg" variant="outline">
                      View Projects
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Developer portrait"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate Laravel developer with 5+ years of experience building web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tighter">My Journey</h3>
                  <p className="text-muted-foreground">
                    I started my development journey with PHP in 2015 and quickly fell in love with the Laravel
                    framework. Since then, I've worked on numerous projects ranging from small business websites to
                    complex enterprise applications.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    My expertise lies in building robust backend systems, RESTful APIs, and integrating with various
                    third-party services. I'm passionate about clean code, test-driven development, and following best
                    practices.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    When I'm not coding, you can find me contributing to open-source projects, writing technical
                    articles, or exploring new technologies to stay at the cutting edge of web development.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Badge>5+ Years Experience</Badge>
                    <Badge>Full-Stack Development</Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>API Development</Badge>
                    <Badge>Database Design</Badge>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>Test-Driven Development</Badge>
                    <Badge>CI/CD</Badge>
                  </div>
                </div>
                <div className="grid gap-2 mt-6">
                  <h3 className="text-xl font-bold">Education & Certifications</h3>
                  <div className="grid gap-4">
                    <div>
                      <h4 className="font-semibold">BSc in Computer Science</h4>
                      <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Laravel Certification</h4>
                      <p className="text-sm text-muted-foreground">Laravel Official, 2020</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">AWS Certified Developer</h4>
                      <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My technical toolkit and areas of expertise
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Laravel & PHP"
                description="Expert in Laravel framework, PHP 7/8, MVC architecture, Eloquent ORM, and Blade templating."
                icon={<Code className="h-10 w-10" />}
              />
              <SkillCard
                title="Database Management"
                description="Proficient with MySQL, PostgreSQL, database design, migrations, and query optimization."
                icon={<Database className="h-10 w-10" />}
              />
              <SkillCard
                title="API Development"
                description="RESTful API design, API authentication, rate limiting, and documentation with Swagger/OpenAPI."
                icon={<Server className="h-10 w-10" />}
              />
              <SkillCard
                title="Frontend Technologies"
                description="HTML5, CSS3, JavaScript, Vue.js, React, Tailwind CSS, and responsive design."
                icon={<Code className="h-10 w-10" />}
              />
              <SkillCard
                title="DevOps & Deployment"
                description="Docker, CI/CD pipelines, Git, GitHub Actions, AWS, Digital Ocean, and server management."
                icon={<Server className="h-10 w-10" />}
              />
              <SkillCard
                title="Testing & Quality"
                description="PHPUnit, feature testing, unit testing, test-driven development, and code quality tools."
                icon={<Code className="h-10 w-10" />}
              />
            </div>
            <div className="mx-auto max-w-5xl py-4">
              <h3 className="text-xl font-bold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Laravel</Badge>
                <Badge variant="outline">PHP</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">Redis</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Vue.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Alpine.js</Badge>
                <Badge variant="outline">Livewire</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">GitHub Actions</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Digital Ocean</Badge>
                <Badge variant="outline">Nginx</Badge>
                <Badge variant="outline">REST APIs</Badge>
                <Badge variant="outline">PHPUnit</Badge>
                <Badge variant="outline">Composer</Badge>
                <Badge variant="outline">npm</Badge>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A selection of my recent Laravel projects
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-featured e-commerce platform built with Laravel, including product management, cart functionality, payment integration, and order processing."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "MySQL", "Stripe", "Vue.js"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
              <ProjectCard
                title="CRM System"
                description="A customer relationship management system with user roles, lead tracking, task management, and reporting dashboards."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "Livewire", "Alpine.js", "PostgreSQL"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
              <ProjectCard
                title="API Service"
                description="A RESTful API service for a mobile application, featuring JWT authentication, rate limiting, and comprehensive documentation."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "API", "Swagger", "Redis"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
              <ProjectCard
                title="Content Management System"
                description="A custom CMS built for a media company, with content scheduling, user management, and analytics integration."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "MySQL", "React", "AWS S3"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
              <ProjectCard
                title="Booking System"
                description="An appointment booking system for a healthcare provider, featuring calendar integration, notifications, and payment processing."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "Vue.js", "Stripe", "Google Calendar API"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
              <ProjectCard
                title="SaaS Application"
                description="A multi-tenant SaaS application with subscription management, team collaboration features, and usage analytics."
                image="/placeholder.svg?height=300&width=400"
                tags={["Laravel", "Cashier", "Tailwind CSS", "PostgreSQL"]}
                demoUrl="https://example.com"
                repoUrl="https://github.com"
              />
            </div>
            <div className="flex justify-center">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-1">
                  <Github className="h-4 w-4" />
                  View More Projects on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels:</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:example@123.com" className="text-primary hover:underline">
                      example@123.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <a
                      href="https://github.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Twitter className="h-5 w-5" />
                    <a
                      href="https://twitter.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @example
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-2">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance projects, contract work, and full-time positions.
                  </p>
                  <p className="text-muted-foreground mt-2">Response time: Usually within 24 hours</p>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} example. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

