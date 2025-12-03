"use client"

import { Calendar, Zap, Clock, Users, BarChart3, MapPin } from "lucide-react"

const features = [
  {
    title: "Centralized Booking Management",
    description:
      "Effortlessly view and manage all past, current, and upcoming bookings from a unified, intuitive dashboard.",
    icon: Calendar,
  },
  {
    title: "Instant Changes & Cancellations",
    description:
      "Modify or cancel bookings in real time—updates sync instantly with transportation providers for a smooth workflow.",
    icon: Zap,
  },
  {
    title: "24/7 Platform Access",
    description: "Access the portal anytime, from any device. Support your clients whenever they need assistance.",
    icon: Clock,
  },
  {
    title: "Multi-Staff Access & Permissions",
    description:
      "Give team members their own logins with role-based permissions to streamline front-desk and agency operations.",
    icon: Users,
  },
  {
    title: "Invoices & Monthly Reports",
    description:
      "Download invoices, track billing history, and generate monthly reports to simplify accounting and reconciliation.",
    icon: BarChart3,
  },
  {
    title: "Real-Time Trip Availability",
    description:
      "View live schedules, routes, pricing, and capacity to make informed booking decisions with confidence.",
    icon: MapPin,
  },
]

export function FeatureSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-0 text-balance">Our Primary Features</h2>
          {/*<p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Streamline your booking operations with powerful tools designed to simplify management, reduce manual work,
            and enhance client satisfaction across every touchpoint.
          </p>*/}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-lg"
              >
                {/* Icon */}
                <div className="mb-2 p-4 rounded-full">
                  <Icon strokeWidth={2.2} size={35} className=" text-accent dark:text-blue-400"/>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
