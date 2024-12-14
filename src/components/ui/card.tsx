import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
    />
  )
}

Card.Content = function CardContent({ className, ...props }: CardProps) {
  return <div className={`p-6 ${className || ''}`} {...props} />
}