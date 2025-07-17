#Use Node.js base image
FROM node:17-alpine

#Set working directory
#WORKDIR /app
WORKDIR .

#Copy package files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy rest of your application
COPY . .

#Expose application
EXPOSE 8000

# Environment variable for MongoDB URL (can be overridden at runtime)
ENV MONGO_URL mongodb://host:27017/yourdatabasename

# Start your app
CMD ["node", "index.js"]
