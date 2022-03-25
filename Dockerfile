FROM node:alpine
COPY /openapi /openapi
COPY dist/index.js /index.js
RUN ["chmod", "+x", "index.js"]
RUN ls
ENTRYPOINT ["node", "/index.js"]