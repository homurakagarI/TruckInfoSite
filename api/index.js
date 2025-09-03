// This is a serverless function to handle the main API routes
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check endpoint
  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: "API is running",
      timestamp: new Date().toISOString()
    });
  }

  return res.status(404).json({ message: 'Not found' });
}
