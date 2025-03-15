FROM node:22.14-alpine
WORKDIR /app

COPY .next/standalone ./
COPY .next/static ./.next/static
COPY public ./public
COPY dist-server ./

ENV NODE_ENV=production

EXPOSE 3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "index.js"]
