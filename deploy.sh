#!/bin/bash
# deployment script
echo "Starting deployment..."
echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Starting application..."
npm run start:prod
