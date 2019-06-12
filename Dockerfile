# Load the alpine base image
FROM alpine:3.7

# Install depedencies
RUN apk update && apk add -U nodejs nodejs-npm
RUN node --version
RUN npm --version

# Create the working directory
RUN mkdir -p /var/www/api

# Copy project files into the working directory
COPY . /var/www/api

# Run npm install to download all the project dependencies
RUN cd /var/www/api



# Set the working directory to the created directory
WORKDIR /var/www/api

RUN npm install --silent
RUN npm run prestart

# Expose a port and start the server (you may need to change the name here to match your server file)
EXPOSE 1235
CMD ["node", "dist/app.js"]
