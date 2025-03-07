import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SkillCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function SkillCard({ title, description, icon }: SkillCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

