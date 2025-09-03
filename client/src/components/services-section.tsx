import { motion } from "framer-motion";
import { Truck, Route, Handshake, Wrench, GraduationCap, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Enterprise Fleet Management",
    description: "Advanced fleet management platform with real-time telematics, predictive maintenance scheduling, route optimization algorithms, and comprehensive performance analytics. Reduce operational costs by up to 25%.",
    color: "professional-gradient",
    textColor: "text-primary-foreground",
  },
  {
    icon: Route,
    title: "Supply Chain Logistics",
    description: "End-to-end supply chain solutions featuring AI-driven route planning, real-time cargo tracking, warehouse optimization, and integrated delivery management systems for Fortune 500 operations.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Handshake,
    title: "Commercial Vehicle Sales",
    description: "Comprehensive commercial vehicle procurement with flexible financing, leasing options, extended warranties, and white-glove delivery services. Over 500 vehicles delivered annually to enterprise clients.",
    color: "bg-secondary",
    textColor: "text-secondary-foreground",
  },
  {
    icon: Wrench,
    title: "Certified Maintenance Services",
    description: "ISO 9001:2015 certified maintenance facilities with ASE-certified technicians, genuine OEM parts, and 99.8% uptime guarantee. Preventive maintenance programs reduce breakdowns by 40%.",
    color: "professional-gradient",
    textColor: "text-primary-foreground",
  },
  {
    icon: GraduationCap,
    title: "Professional Driver Training",
    description: "FMCSA-approved driver training programs featuring defensive driving, fuel efficiency optimization, DOT compliance, and safety certification. Reduce insurance premiums by up to 15%.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    icon: Clock,
    title: "24/7 Enterprise Support",
    description: "Dedicated enterprise support with guaranteed 30-minute response time, nationwide roadside assistance network, emergency dispatch, and priority service scheduling for mission-critical operations.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-services-title">
            <span className="text-gradient">Enterprise-Grade</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive commercial vehicle solutions engineered for Fortune 500 operations. 
            Proven to reduce operational costs, enhance fleet efficiency, and maximize uptime for enterprise clients.
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
              className="bg-card rounded-xl premium-shadow p-8 hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/20"
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
