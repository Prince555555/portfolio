import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Laravel developer with a passion for building elegant, efficient web applications
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-xl w-full max-w-md">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Developer portrait"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">John Doe</h2>
                  <p className="text-xl text-muted-foreground">Senior Laravel Developer</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>5+ Years Experience</Badge>
                    <Badge>Full-Stack</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I&apos;m a passionate Laravel developer with over 5 years of experience building robust web applications.
                  My journey in web development began with PHP in 2015, and I quickly fell in love with the Laravel
                  framework for its elegant syntax and powerful features.
                </p>
                <p className="text-muted-foreground">
                  Throughout my career, I&apos;ve worked on a diverse range of projects, from e-commerce platforms and
                  content management systems to complex API services and SaaS applications. I pride myself on writing
                  clean, maintainable code and following industry best practices.
                </p>
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
            </div>

            <div className="mx-auto max-w-5xl space-y-8 py-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Professional Journey</h2>
                <p className="text-muted-foreground">
                  My professional journey has been focused on mastering Laravel and the broader PHP ecosystem. I&apos;ve
                  worked with companies of all sizes, from startups to enterprise organizations, helping them build
                  scalable web applications that solve real business problems.
                </p>
                <p className="text-muted-foreground">
                  I believe in continuous learning and staying up-to-date with the latest developments in the Laravel
                  ecosystem. I regularly contribute to open-source projects and attend tech conferences to expand my
                  knowledge and connect with other developers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Senior Laravel Developer</h3>
                          <Badge>2021 - Present</Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">TechCorp Solutions</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Lead developer for multiple Laravel-based SaaS applications</li>
                          <li>Implemented CI/CD pipelines and testing strategies</li>
                          <li>Mentored junior developers and conducted code reviews</li>
                          <li>Optimized database performance and application architecture</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Laravel Developer</h3>
                          <Badge>2018 - 2021</Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">WebDev Agency</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Developed custom e-commerce solutions using Laravel and Vue.js</li>
                          <li>Created RESTful APIs for mobile applications</li>
                          <li>Implemented payment gateway integrations</li>
                          <li>Worked directly with clients to gather requirements</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-xl">Junior PHP Developer</h3>
                          <Badge>2015 - 2018</Badge>
                        </div>
                        <p className="text-muted-foreground font-medium">StartUp Inc.</p>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Built and maintained PHP applications</li>
                          <li>Migrated legacy applications to Laravel</li>
                          <li>Implemented responsive frontend designs</li>
                          <li>Collaborated with the design team to create user interfaces</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Education and Certifications</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">BSc in Computer Science</h3>
                        <p className="text-muted-foreground">University of Technology, 2015-2019</p>
                        <p className="text-muted-foreground">
                          Focused on web development, databases, and software engineering principles.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">Laravel Certification</h3>
                        <p className="text-muted-foreground">Laravel Official, 2020</p>
                        <p className="text-muted-foreground">
                          Certified Laravel developer with expertise in all aspects of the framework.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">AWS Certified Developer</h3>
                        <p className="text-muted-foreground">Amazon Web Services, 2021</p>
                        <p className="text-muted-foreground">
                          Specialized in deploying and managing Laravel applications on AWS.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-xl">Docker & Kubernetes Certification</h3>
                        <p className="text-muted-foreground">Cloud Native Computing Foundation, 2022</p>
                        <p className="text-muted-foreground">
                          Expertise in containerizing Laravel applications and orchestrating with Kubernetes.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Personal Interests</h2>
                <p className="text-muted-foreground">
                  Outside of coding, I enjoy hiking, photography, and playing chess. I&apos;m also an avid reader of
                  technical books and blogs, constantly looking to expand my knowledge and skills.
                </p>
                <p className="text-muted-foreground">
                  I&apos;m passionate about mentoring new developers and contributing to the Laravel community. I regularly
                  attend local meetups and occasionally speak at tech conferences about Laravel best practices and
                  advanced techniques.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

