# Getting started

## Run locally
1. Install NPM package manager and Node.js
2. Create a local environment with conda and install Python and Flask
3. Install your own backend library in editable mode with pip from source: ```pip install -e .```
3. Run ```npm install``` from app directory to install all dependencies
3. Run ```python3 ./api/api.py``` from app directory to run the server in one terminal
4. Run ```npm start``` from app directory to run the client in another terminal
5. Visit ```http://localhost:3000/``` to view the app

You can now make changes to the source code and the server and client will automatically reload.

## Run locally with Docker
1. Install docker
2. Run ```docker-compose up``` from source to run the server and client
3. Visit ```http://localhost:3000/``` to view the app

## Deploy
1. Ask IT to expose a por: in this example we use port 1234, and give them a name for the service (e.g. ```<my_app>.bioinformatics.nl```)
2. Run ```docker-compose -f docker-compose.yml up -d --build```
3. Visit ```http://<my_app>.bioinformatics.nl/``` to view the app
