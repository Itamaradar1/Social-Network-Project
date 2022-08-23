FROM continuumio/miniconda3:latest
# stating from an already exsisting env fro docker hub

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

RUN mkdir -p /backend
RUN mkdir -p /frontend
RUN mkdir -p /scripts
RUN mkdir -p /static-files


# creating a folder in our image
COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod +x ./scripts*


RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
# runnin our env from our application inside our image


ENV PATH /opt/conda/envs/motion_project_backend/bin:$PATH
RUN echo "source activate motion_project_backend" >~/.bashrc
# this allows the image to always activate our env inside the image
# everytime we run the image

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
COPY ./frontend/package-lock.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build



WORKDIR /backend

# this sets up our executable folder
