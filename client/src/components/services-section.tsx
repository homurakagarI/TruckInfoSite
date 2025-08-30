import { motion } from "framer-motion";
import { Truck, Route, Handshake, Wrench, GraduationCap, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fleet Management",
    description: "Complete fleet management solutions including maintenance scheduling, route optimization, and performance monitoring.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Route,
    title: "Logistics Solutions",
    description: "End-to-end logistics planning and execution with real-time tracking and delivery optimization.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Handshake,
    title: "Commercial Sales",
    description: "New and certified pre-owned commercial vehicles with financing options and warranty coverage.",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "Professional maintenance and repair services with certified technicians and genuine parts.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: GraduationCap,
    title: "Driver Training",
    description: "Comprehensive driver training programs for safety, efficiency, and regulatory compliance.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock emergency support and roadside assistance to keep your fleet moving.",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive trucking solutions designed to meet your business needs with unmatched reliability and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className={`h-8 w-8 ${service.textColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
              <button
                onClick={scrollToContact}
                className="text-primary font-semibold hover:text-primary/80 transition-colors group"
                data-testid={`button-service-learn-more-${index}`}
              >
                Learn More{" "}
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
