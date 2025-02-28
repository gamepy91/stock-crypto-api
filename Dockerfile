# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "dev"]