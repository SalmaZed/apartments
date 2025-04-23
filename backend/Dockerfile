# 1. Use Node.js image
FROM node:20-alpine

# 2. Create app directory
WORKDIR /app

# 3. Copy package files
COPY package.json package-lock.json  ./

# 4. Install dependencies
RUN npm install

# 5. Copy source files
COPY . .

# 6. Generate Prisma client
RUN npm run prisma:generate 

# 7. Build Typescript
RUN npm run build

# 8. Expose port and start app
EXPOSE 3001
CMD ["npm", "run", "start"]
