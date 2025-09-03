import { type VercelRequest, type VercelResponse } from '@vercel/node';
import { insertContactInquirySchema } from '../shared/schema';
import { z } from 'zod';

// Simple in-memory storage for demo (you'd use a database in production)
const contactInquiries: any[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
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
        company: validatedData.company ?? null,
        phone: validatedData.phone ?? null,
        vehicleType: validatedData.vehicleType ?? null,
        message: validatedData.message ?? null,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date()
      };
      
      contactInquiries.push(inquiry);
      
      return res.json({ 
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
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const sortedInquiries = contactInquiries.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return res.json(sortedInquiries);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
