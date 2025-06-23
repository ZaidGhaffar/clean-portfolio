import { Card, CardContent } from "@/components/ui/card"
import { Brain, Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-indigo-500" />,
    title: "Build & Train AI Models",
    description:
      "I can Build, Train, Fine-tune & further enhance these AI/ML Models according to your specific requirements.",
  },
  {
    icon: <Zap className="h-10 w-10 text-indigo-500" />,
    title: "Monitoring & Enhancing Performance",
    description: "Continuous monitoring and optimization of AI models to ensure they perform at their best, adapting to changing data and requirements.",
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Building API & Connecting to the Frontend",
    description:
      "I can design & build Frontend & robust APIs that connect your AI models to frontend applications, enabling real-time data processing and interaction.",
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-500" />,
    title: "Deploy & Secure AI Solutions",
    description: "Deploy AI solutions seamlessly into your existing infrastructure, ensuring they are secure, scalable, and compliant with industry standards.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About MY Experience</h2>
          <p className="text-xl text-muted-foreground">
            I’m an AI Engineer with 1 years of experience in,building and scaling enterprise software and machine learning systems. I have extensive experience 
in Building, Monitoring, deploying & Scaling ML Models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
            <p className="text-muted-foreground mb-6">
              Over the last few years, I’ve worked across fast-moving startups and R&D teams, deploying production-grade AI solutions that drive real results.
              AI Engineer – WintaX Technologies Developed real-time phone-calling conversational bot at WintaX Technologies, using Gemini and a proprietary conversational model, Reduced response time by 40% and improved customer satisfaction by 75%.
            </p>
            <p className="text-muted-foreground">
              Machine Learning Intern – Rockville Technologies Built a customs compliance engine using 7 LangChain agents & real-time regulation tracking — reduced shipment delays by 53%
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Not a Lab Project. A Living System</h3>
            <p className="text-muted-foreground mb-6">
              My work isn’t stuck in Jupyter notebooks. It lives in warehouses, hospitals, customer support centers — places where outcomes matter.
            I engineer AI that adapts, evolves, and responds in the wild. If it can’t run at scale or drive value, I don’t ship it.
              This isn’t research. It’s reality.
              value.
            </p>
            <p className="text-muted-foreground">
               I’ve shipped replaces chaos with clarity.
              I don’t just talk about AI — I deploy it, scale it, and make it work where it matters.I don’t fine-tune models because it's trendy — I do it because 92% precision beats buzzwords every time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
