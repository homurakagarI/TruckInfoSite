import { z } from 'zod';

// Simple schema validation (simplified version of your TypeScript schema)
const insertContactInquirySchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  vehicleType: z.string().optional(),
  message: z.string().optional()
});

// Simple in-memory storage for demo (you'd use a database in production)
const contactInquiries = [];

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = {
        ...validatedData,
        company: validatedData.company || null,
        phone: validatedData.phone || null,
        vehicleType: validatedData.vehicleType || null,
        message: validatedData.message || null,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date()
      };
      
      contactInquiries.push(inquiry);
      
      return res.status(200).json({ 
        message: "Contact inquiry submitted successfully", 
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error('Contact form error:', error);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const sortedInquiries = contactInquiries.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return res.status(200).json(sortedInquiries);
    } catch (error) {
      console.error('Get inquiries error:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
