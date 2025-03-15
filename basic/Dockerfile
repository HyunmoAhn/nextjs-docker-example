FROM node:22.14-alpine
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY .next ./.next
COPY public ./public
COPY next.config.ts ./

ENV NODE_ENV=production

EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
CMD ["npm", "run", "start"]
