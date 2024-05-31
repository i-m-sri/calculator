# Use the official Node.js image as the base image
FROM node:14-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy project files to the working directory
COPY . .

# Install a simple HTTP server to serve static files
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Command to run the HTTP server
CMD ["http-server", "-p", "8080"]
