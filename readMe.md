# Instructions on how to run the applications

Backend repo - https://github.com/Remmy-coder/snack-bcknd

## Running the Backend
### Requiremnts
- Docker
- Docker compose
- Node 22 (recommend nvm)
### Instructions
    1. Pull code from repo
    2. Create .env file at the root of the project. An env.example will provide a guide on the .env structure.
    3. run cmd - docker compose up -d
    4. Your Db should be running with the variables in the config.
    5. run cmd - npm install.
    6. run cmd - npm run migration:run.
    7. Entities should have been mapped to the Db.
    8. run cmd - npm run start.

## Running the Frontend
### Requiremnts
- Node 22
### Instructions
    1. Pull code from repo.
    2. Create .env file for api url. Assuming you're running the backend locally the url will be localhost. An example env will be provided.
    3. run cmd npm install
    4. run cmd npm run dev.
    5. Application should be running on port 3001.


