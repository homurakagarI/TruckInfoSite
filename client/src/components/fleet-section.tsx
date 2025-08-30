import { motion } from "framer-motion";

const fleetData = [
  {
    title: "Heavy Duty Trucks",
    description: "Built for the toughest jobs with superior power, reliability, and fuel efficiency.",
    price: "Starting at $85,000",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Heavy duty commercial truck",
  },
  {
    title: "Medium Duty Trucks",
    description: "Perfect balance of capability and maneuverability for urban and regional delivery.",
    price: "Starting at $55,000",
    image: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Medium duty delivery truck",
  },
  {
    title: "Light Commercial",
    description: "Efficient and versatile vehicles ideal for small business and local delivery needs.",
    price: "Starting at $35,000",
    image: "https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Light commercial delivery van",
  },
];

const stats = [
  { value: "500+", label: "Vehicles Sold" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "99.8%", label: "Fleet Uptime" },
];

export default function FleetSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-fleet-title">
            Our Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-fleet-subtitle">
            Modern, reliable commercial vehicles built for performance, efficiency, and durability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fleetData.map((vehicle, index) => (
            <motion.div
              key={vehicle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-testid={`card-vehicle-${vehicle.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img
                src={vehicle.image}
                alt={vehicle.alt}
                className="w-full h-64 object-cover"
                data-testid={`img-vehicle-${index}`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3" data-testid={`text-vehicle-title-${index}`}>
                  {vehicle.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-vehicle-description-${index}`}>
                  {vehicle.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold" data-testid={`text-vehicle-price-${index}`}>
                    {vehicle.price}
                  </span>
                  <button
                    onClick={scrollToContact}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    data-testid={`button-vehicle-learn-more-${index}`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fleet Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-8 md:p-12 text-center"
          data-testid="section-fleet-stats"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8" data-testid="text-stats-title">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="text-4xl md:text-5xl font-black text-accent mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-primary-foreground font-medium" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
