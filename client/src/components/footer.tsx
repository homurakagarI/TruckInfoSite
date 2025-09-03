import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Fleet Management",
  "Logistics Solutions", 
  "Commercial Sales",
  "Maintenance & Repair",
  "Driver Training",
];

const fleetTypes = [
  "Heavy Duty Trucks",
  "Medium Duty Trucks",
  "Light Commercial",
  "Used Vehicles",
  "Financing Options",
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="footer-company-info"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient" data-testid="text-footer-company-name">
              TruckPro Industries
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed" data-testid="text-footer-company-description">
              Premier enterprise fleet management solutions trusted by Fortune 500 companies. 
              ISO 9001:2015 certified with 15+ years of industry excellence.
            </p>
            <div className="mb-4 text-sm text-primary-foreground/80">
              <div className="font-semibold mb-1">Certifications & Compliance:</div>
              <div>ISO 9001:2015 • FMCSA Approved • DOT Certified • EPA Compliant</div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-social-facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-social-twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-social-linkedin">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-social-youtube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="footer-services"
          >
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-services-title">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Fleet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="footer-fleet"
          >
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-fleet-title">Fleet</h4>
            <ul className="space-y-2">
              {fleetTypes.map((fleet, index) => (
                <li key={fleet}>
                  <button
                    onClick={() => scrollToSection("fleet")}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                    data-testid={`link-footer-fleet-${index}`}
                  >
                    {fleet}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="footer-contact"
          >
            <h4 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 flex items-center" data-testid="text-footer-phone">
                <Phone className="h-4 w-4 mr-2" />
                1-800-TRUCKPRO
              </li>
              <li className="text-primary-foreground/80 flex items-center" data-testid="text-footer-email">
                <Mail className="h-4 w-4 mr-2" />
                sales@truckpro.com
              </li>
              <li className="text-primary-foreground/80" data-testid="text-footer-address">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <div>
                    <div>1234 Industrial Blvd</div>
                    <div>TruckCity, TC 12345</div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="section-divider my-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-primary-foreground/80 text-sm" data-testid="text-footer-copyright">
            © 2024 TruckPro Industries. All rights reserved. | ISO 9001:2015 Certified
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="link-footer-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="link-footer-terms">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm" data-testid="link-footer-cookies">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
