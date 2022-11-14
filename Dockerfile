FROM mcr.microsoft.com/playwright:v1.27.0-focal

# Set working directory
WORKDIR /appnew

COPY package.json /appnew

RUN npm install

COPY . /appnew

# EXPOSE 80

# CMD ["npm","run","test:chrome"]