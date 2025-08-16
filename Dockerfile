# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory for build
WORKDIR /app

# Copy package files
COPY package*.json ./

#install dependencies
RUN npm ci

# Copy rest of the application
COPY . .


# Stage 2: Runtime
FROM node:18-alpine

# Set working directory for runtime
WORKDIR /app

# Copy app from builder
COPY --from=builder /app .

# Expose application
EXPOSE 8000

# Environment variable for MongoDB URL (can be overridden at runtime)
ENV MONGO_URI mongodb://mongodb:27017/shopmart

# Start your app
CMD ["node", "index.js"]
