import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "1-800-TRUCKPRO",
    color: "bg-primary",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sales@truckpro.com",
    color: "bg-accent",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "1234 Industrial Blvd, TruckCity, TC 12345",
    color: "bg-secondary",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Fri: 7AM-7PM | Sat: 8AM-5PM",
    color: "bg-primary",
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      vehicleType: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-contact-title">
              <span className="text-gradient">Enterprise</span> Consultation
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="text-contact-subtitle">
              Connect with our enterprise solutions specialists to discover how our fleet management platform 
              can optimize your operations, reduce costs, and enhance performance across your commercial vehicle fleet.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                  data-testid={`contact-info-${info.title.toLowerCase()}`}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground" data-testid={`text-contact-${info.title.toLowerCase()}-label`}>
                      {info.title}
                    </div>
                    <div className="text-muted-foreground" data-testid={`text-contact-${info.title.toLowerCase()}-value`}>
                      {info.value}
                    </div>
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
              <img
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Professional truck service and maintenance facility"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
                data-testid="img-contact-facility"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl premium-shadow p-8 border border-border/50"
            data-testid="form-contact-container"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-form-title">
              Enterprise Solution Inquiry
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-first-name">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} data-testid="input-first-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-last-name">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} data-testid="input-last-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-company">Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Inc." {...field} value={field.value ?? ""} data-testid="input-company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-email">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-phone">Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...field}
                          value={field.value ?? ""}
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-vehicle-type">Vehicle Type Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
                        <FormControl>
                          <SelectTrigger data-testid="select-vehicle-type">
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="heavy-duty" data-testid="option-heavy-duty">Heavy Duty Trucks</SelectItem>
                          <SelectItem value="medium-duty" data-testid="option-medium-duty">Medium Duty Trucks</SelectItem>
                          <SelectItem value="light-commercial" data-testid="option-light-commercial">Light Commercial Vehicles</SelectItem>
                          <SelectItem value="fleet-management" data-testid="option-fleet-management">Fleet Management</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your specific needs..."
                          className="resize-none"
                          rows={4}
                          {...field}
                          value={field.value ?? ""}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  data-testid="button-submit-contact"
                >
                  {submitContactMutation.isPending ? "Processing..." : "Request Enterprise Consultation"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
