import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, FileCode, Globe, Server, Settings } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My technical toolkit and areas of expertise in Laravel development and web technologies
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="backend" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="devops">DevOps & Tools</TabsTrigger>
                </TabsList>

                <TabsContent value="backend" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Code className="h-10 w-10" />
                        </div>
                        <CardTitle>Laravel & PHP</CardTitle>
                        <CardDescription>Expert-level proficiency</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Framework</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">PHP 7/8</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Eloquent ORM</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Blade Templating</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Database className="h-10 w-10" />
                        </div>
                        <CardTitle>Database Management</CardTitle>
                        <CardDescription>Advanced database skills</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">MySQL</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">PostgreSQL</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Database Design</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Query Optimization</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Server className="h-10 w-10" />
                        </div>
                        <CardTitle>API Development</CardTitle>
                        <CardDescription>RESTful API expertise</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">RESTful API Design</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">API Authentication</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Swagger/OpenAPI</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">API Versioning</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Settings className="h-10 w-10" />
                        </div>
                        <CardTitle>Laravel Packages</CardTitle>
                        <CardDescription>Expertise with Laravel ecosystem</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Sanctum</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Cashier</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Socialite</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Horizon</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Code className="h-10 w-10" />
                        </div>
                        <CardTitle>Testing & Quality</CardTitle>
                        <CardDescription>Test-driven development</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">PHPUnit</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Feature Testing</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">TDD Methodology</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Code Quality Tools</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Database className="h-10 w-10" />
                        </div>
                        <CardTitle>Caching & Performance</CardTitle>
                        <CardDescription>Application optimization</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Redis</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Memcached</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Query Optimization</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Application Profiling</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="frontend" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Globe className="h-10 w-10" />
                        </div>
                        <CardTitle>HTML & CSS</CardTitle>
                        <CardDescription>Frontend fundamentals</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">HTML5</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">CSS3</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Responsive Design</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Sass/SCSS</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <FileCode className="h-10 w-10" />
                        </div>
                        <CardTitle>JavaScript</CardTitle>
                        <CardDescription>Client-side scripting</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">JavaScript (ES6+)</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">jQuery</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">AJAX</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">JSON</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Code className="h-10 w-10" />
                        </div>
                        <CardTitle>Frontend Frameworks</CardTitle>
                        <CardDescription>Modern JS frameworks</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Vue.js</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">React</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Alpine.js</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Livewire</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Globe className="h-10 w-10" />
                        </div>
                        <CardTitle>CSS Frameworks</CardTitle>
                        <CardDescription>Responsive design tools</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Tailwind CSS</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Bootstrap</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Bulma</span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Material UI</span>
                              <span className="text-sm text-muted-foreground">70%</span>
                            </div>
                            <Progress value={70} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <FileCode className="h-10 w-10" />
                        </div>
                        <CardTitle>Build Tools</CardTitle>
                        <CardDescription>Frontend tooling</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Webpack</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Laravel Mix</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Vite</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">npm/Yarn</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="devops" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Server className="h-10 w-10" />
                        </div>
                        <CardTitle>Deployment & Hosting</CardTitle>
                        <CardDescription>Server management</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">AWS</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Digital Ocean</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Heroku</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Forge/Envoyer</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Settings className="h-10 w-10" />
                        </div>
                        <CardTitle>Containerization</CardTitle>
                        <CardDescription>Docker expertise</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Docker</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Docker Compose</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Kubernetes</span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Containerization Best Practices</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Code className="h-10 w-10" />
                        </div>
                        <CardTitle>CI/CD</CardTitle>
                        <CardDescription>Continuous integration</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">GitHub Actions</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">GitLab CI</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Jenkins</span>
                              <span className="text-sm text-muted-foreground">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Automated Testing</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Server className="h-10 w-10" />
                        </div>
                        <CardTitle>Server Administration</CardTitle>
                        <CardDescription>Linux server management</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Linux (Ubuntu/Debian)</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Nginx</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Apache</span>
                              <span className="text-sm text-muted-foreground">85%</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Server Security</span>
                              <span className="text-sm text-muted-foreground">80%</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <div className="mb-2 text-primary">
                          <Code className="h-10 w-10" />
                        </div>
                        <CardTitle>Version Control</CardTitle>
                        <CardDescription>Git expertise</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Git</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">GitHub</span>
                              <span className="text-sm text-muted-foreground">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">GitLab</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Git Workflows</span>
                              <span className="text-sm text-muted-foreground">90%</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mx-auto max-w-5xl py-8">
              <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Laravel</Badge>
                    <Badge variant="outline">PHP 7/8</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Redis</Badge>
                    <Badge variant="outline">Eloquent ORM</Badge>
                    <Badge variant="outline">RESTful APIs</Badge>
                    <Badge variant="outline">GraphQL</Badge>
                    <Badge variant="outline">PHPUnit</Badge>
                    <Badge variant="outline">Laravel Sanctum</Badge>
                    <Badge variant="outline">Laravel Cashier</Badge>
                    <Badge variant="outline">Laravel Socialite</Badge>
                    <Badge variant="outline">Laravel Horizon</Badge>
                    <Badge variant="outline">Laravel Nova</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML5</Badge>
                    <Badge variant="outline">CSS3</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Vue.js</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Alpine.js</Badge>
                    <Badge variant="outline">Livewire</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Bootstrap</Badge>
                    <Badge variant="outline">SASS/SCSS</Badge>
                    <Badge variant="outline">Webpack</Badge>
                    <Badge variant="outline">Vite</Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">GitHub</Badge>
                    <Badge variant="outline">GitLab</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">Kubernetes</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Digital Ocean</Badge>
                    <Badge variant="outline">Forge</Badge>
                    <Badge variant="outline">Envoyer</Badge>
                    <Badge variant="outline">Nginx</Badge>
                    <Badge variant="outline">Apache</Badge>
                    <Badge variant="outline">Linux</Badge>
                    <Badge variant="outline">GitHub Actions</Badge>
                    <Badge variant="outline">CI/CD</Badge>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Methodologies & Practices</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Test-Driven Development</Badge>
                    <Badge variant="outline">Agile/Scrum</Badge>
                    <Badge variant="outline">Object-Oriented Programming</Badge>
                    <Badge variant="outline">SOLID Principles</Badge>
                    <Badge variant="outline">Design Patterns</Badge>
                    <Badge variant="outline">RESTful API Design</Badge>
                    <Badge variant="outline">Microservices</Badge>
                    <Badge variant="outline">Code Reviews</Badge>
                    <Badge variant="outline">Continuous Integration</Badge>
                    <Badge variant="outline">Continuous Deployment</Badge>
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

