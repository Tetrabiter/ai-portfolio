import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
}

export default function Testimonial({ quote, author }: TestimonialProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-lg italic">"{quote}"</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-gray-500">- {author}</p>
      </CardFooter>
    </Card>
  )
}

