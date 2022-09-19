FROM node:16.17.0-alpine
WORKDIR /tablo
ENV PATH="./node_modules/.bin:$PATH"
#The COPY instruction copies new files or directories from <src> and adds them to the filesystem of the container at the path <dest>
#here current dir to WORKDIR
COPY . .
RUN npm run build



