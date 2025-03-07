import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A showcase of my Laravel development work and projects
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                  <TabsTrigger value="api">API Services</TabsTrigger>
                  <TabsTrigger value="saas">SaaS</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="E-commerce Platform"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>E-commerce Platform</CardTitle>
                        <CardDescription>
                          A full-featured e-commerce platform built with Laravel, including product management, cart
                          functionality, payment integration, and order processing.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>Stripe</Badge>
                          <Badge>Vue.js</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="CRM System"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>CRM System</CardTitle>
                        <CardDescription>
                          A customer relationship management system with user roles, lead tracking, task management, and
                          reporting dashboards.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>Livewire</Badge>
                          <Badge>Alpine.js</Badge>
                          <Badge>PostgreSQL</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="API Service"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>API Service</CardTitle>
                        <CardDescription>
                          A RESTful API service for a mobile application, featuring JWT authentication, rate limiting,
                          and comprehensive documentation.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>API</Badge>
                          <Badge>Swagger</Badge>
                          <Badge>Redis</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Content Management System"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Content Management System</CardTitle>
                        <CardDescription>
                          A custom CMS built for a media company, with content scheduling, user management, and
                          analytics integration.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>React</Badge>
                          <Badge>AWS S3</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Booking System"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Booking System</CardTitle>
                        <CardDescription>
                          An appointment booking system for a healthcare provider, featuring calendar integration,
                          notifications, and payment processing.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>Vue.js</Badge>
                          <Badge>Stripe</Badge>
                          <Badge>Google Calendar API</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="SaaS Application"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>SaaS Application</CardTitle>
                        <CardDescription>
                          A multi-tenant SaaS application with subscription management, team collaboration features, and
                          usage analytics.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>Cashier</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>PostgreSQL</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="ecommerce" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="E-commerce Platform"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>E-commerce Platform</CardTitle>
                        <CardDescription>
                          A full-featured e-commerce platform built with Laravel, including product management, cart
                          functionality, payment integration, and order processing.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>Stripe</Badge>
                          <Badge>Vue.js</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Fashion Marketplace"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Fashion Marketplace</CardTitle>
                        <CardDescription>
                          A multi-vendor marketplace for fashion products with vendor management, commission system, and
                          advanced filtering.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>React</Badge>
                          <Badge>PayPal</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="api" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="API Service"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>API Service</CardTitle>
                        <CardDescription>
                          A RESTful API service for a mobile application, featuring JWT authentication, rate limiting,
                          and comprehensive documentation.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>API</Badge>
                          <Badge>Swagger</Badge>
                          <Badge>Redis</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Payment Gateway API"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Payment Gateway API</CardTitle>
                        <CardDescription>
                          A secure payment processing API that integrates with multiple payment providers and offers a
                          unified interface.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>API</Badge>
                          <Badge>Stripe</Badge>
                          <Badge>PayPal</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="saas" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="SaaS Application"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>SaaS Application</CardTitle>
                        <CardDescription>
                          A multi-tenant SaaS application with subscription management, team collaboration features, and
                          usage analytics.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>Cashier</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>PostgreSQL</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>

                    <Card className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt="Project Management Tool"
                          width={400}
                          height={300}
                          className="h-full w-full object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>Project Management Tool</CardTitle>
                        <CardDescription>
                          A collaborative project management platform with task tracking, time management, and reporting
                          features.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Laravel</Badge>
                          <Badge>Vue.js</Badge>
                          <Badge>MySQL</Badge>
                          <Badge>WebSockets</Badge>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mx-auto max-w-5xl py-8">
              <h2 className="text-2xl font-bold mb-6">Project Case Studies</h2>

              <div className="space-y-12">
                <div className="grid gap-6 lg:grid-cols-2 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="E-commerce Platform Case Study"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">E-commerce Platform</h3>
                    <p className="text-muted-foreground">
                      This e-commerce platform was built for a retail client looking to expand their online presence.
                      The project involved creating a complete shopping experience with product management, inventory
                      tracking, and secure payment processing.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Integrating multiple payment gateways</li>
                        <li>Implementing real-time inventory management</li>
                        <li>Optimizing performance for large product catalogs</li>
                        <li>Creating a responsive design for all devices</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Solutions:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Used Laravel Cashier for payment processing</li>
                        <li>Implemented Redis for caching and real-time inventory updates</li>
                        <li>Optimized database queries and added indexing</li>
                        <li>Built responsive UI with Vue.js and Tailwind CSS</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Results:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>50% increase in online sales within 3 months</li>
                        <li>Reduced page load times by 40%</li>
                        <li>Improved inventory accuracy to 99.9%</li>
                        <li>Seamless shopping experience across all devices</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="https://example.com/case-study" target="_blank" rel="noopener noreferrer">
                        <Button className="gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Full Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">SaaS Application</h3>
                      <p className="text-muted-foreground">
                        This SaaS application was developed for a startup offering project management tools to remote
                        teams. The project required building a scalable, multi-tenant architecture with subscription
                        management.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Challenges:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Creating a secure multi-tenant architecture</li>
                          <li>Implementing subscription billing with multiple tiers</li>
                          <li>Building real-time collaboration features</li>
                          <li>Ensuring data isolation between tenants</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Solutions:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Designed a database schema with tenant isolation</li>
                          <li>Integrated Laravel Cashier for subscription management</li>
                          <li>Used Laravel Echo and WebSockets for real-time features</li>
                          <li>Implemented comprehensive access control</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Results:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          <li>Successfully launched with 500+ initial users</li>
                          <li>Achieved 99.9% uptime since launch</li>
                          <li>Scaled to handle 10,000+ concurrent users</li>
                          <li>Positive user feedback on collaboration features</li>
                        </ul>
                      </div>
                      <div className="pt-4">
                        <Link href="https://example.com/case-study" target="_blank" rel="noopener noreferrer">
                          <Button className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            View Full Case Study
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="SaaS Application Case Study"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

