import NotificationBar from "@/components/notification-bar"
import { Users, Zap, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Our advanced algorithms deliver intelligent solutions with precision that traditional methods can't achieve.",
      icon: Users,
    },
    {
      title: "Faster Development",
      description: "Reduce your development time by up to 50% with our streamlined AI workflows and automation.",
      icon: Zap,
    },
    {
      title: "Quality Assurance",
      description: "Access cutting-edge technology that matches your technical requirements and business goals.",
      icon: Shield,
    },
  ]

  return (
    <section id="home" className="relative bg-white rounded-t-[40px] mt-[-60px] px-6 py-16">
      {/* Black notification bar */}
      <NotificationBar />

      {/* Content for the white section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Where Technology Meets Excellence</h2>

        
      </div>
    </section>
  )
}
