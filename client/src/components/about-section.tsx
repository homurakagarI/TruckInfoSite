import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Industry-Leading Reliability",
    description: "Our vehicles consistently achieve 99.8% uptime, minimizing your operational disruptions.",
  },
  {
    title: "Comprehensive Support",
    description: "24/7 emergency support and nationwide service network to keep you moving.",
  },
  {
    title: "Environmental Responsibility",
    description: "Advanced fuel efficiency and emission reduction technologies in every vehicle.",
  },
];

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-about-title">
              Industry Leadership Through{" "}
              <span className="text-gradient">Proven Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description">
              Since 2009, TruckPro Industries has established itself as the premier provider of commercial vehicle solutions, 
              serving over 200 Fortune 500 companies across North America. Our commitment to operational excellence 
              and innovative fleet management technologies has made us the trusted partner for industry leaders.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button
                onClick={scrollToContact}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg inline-block"
                data-testid="button-about-partner"
              >
                Partner With Us
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=900"
              alt="Modern truck manufacturing facility with quality control"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-about-facility"
            />

            {/* Overlay stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-card rounded-xl premium-shadow p-6 border border-border"
              data-testid="card-certification"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1" data-testid="text-certification-iso">
                  ISO 9001:2015
                </div>
                <div className="text-muted-foreground text-sm font-semibold" data-testid="text-certification-label">
                  Quality Management
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
