# 1. Use Node.js image
FROM node:20-alpine

# 2. Create app directory
WORKDIR /app

# 3. Copy package files
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy source files
COPY . .

# 6. Build frontend app
RUN npm run build

# 7. Expose port and startup
EXPOSE 3000
CMD ["npm", "run", "start"]
