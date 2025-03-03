# Use Node.js v20 as the base image
FROM node:20

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Set Puppeteer to skip Chrome download
ENV PUPPETEER_SKIP_DOWNLOAD=true

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Set environment variable
ENV NODE_ENV=Tronox
#ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# Expose the application port
EXPOSE 3001

# Start the Express.js server
CMD ["node", "server.js"]
