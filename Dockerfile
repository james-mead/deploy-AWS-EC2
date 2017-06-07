# Use node 4.4.5 LTS
FROM node:4.4.5

# Define environment variables
ENV AWS_REGION ap-southeast-2

# Copy source code
COPY src/ /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 3000

# Launch application
CMD ["npm","start"]
