# Snack Application Setup Guide

## Project Overview
This guide provides comprehensive instructions for setting up and running the Snack application backend and frontend.

## Backend Repository
Repository: https://github.com/Remmy-coder/snack-bcknd

## Prerequisites

### Backend Requirements
- [Docker](https://www.docker.com/get-started)
- Docker Compose
- Node.js 22 
  - Recommended: [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)

### Frontend Requirements
- Node.js 22

## Backend Setup

### Detailed Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Remmy-coder/snack-bcknd.git
   cd snack-bcknd
   ```

2. **Environment Configuration**
   - Create a `.env` file in the project root directory
   - Use `env.example` as a template
   - Ensure all required environment variables are properly configured

3. **Start Docker Containers**
   ```bash
   docker compose up -d
   ```
   - This command initializes the database and required services
   - Verify containers are running with `docker ps`

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Run Database Migrations**
   ```bash
   npm run migration:run
   ```
   - Maps application entities to the database
   - Ensures database schema is up to date

6. **Start Backend Server**
   ```bash
   npm run start
   ```

## Frontend Setup

### Detailed Installation Steps

1. **Clone Frontend Repository**
   ```bash
   git clone [frontend-repository-url]
   cd [frontend-directory]
   ```

2. **Environment Configuration**
   - Create `.env` file
   - Set API URL (for local development: `localhost`)
   - Refer to provided example `.env`

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Application will run on port 3001

## Troubleshooting

### Common Issues
- Verify Docker is running
- Check Node.js version (should be 22)
- Confirm all environment variables are set
- Ensure no port conflicts

### Debugging Tips
- Check Docker logs: `docker compose logs`
- Verify npm installation: `npm list`
- Review `.env` file configuration

## Development Recommendations
- Always use the specified Node.js version
- Keep Docker and dependencies updated
- Refer to `env.example` for required environment variables

## Additional Resources
- [Docker Documentation](https://docs.docker.com/)
- [Node.js Documentation](https://nodejs.org/docs)

## Contribution
Please follow best practices:
- Use meaningful commit messages
- Keep code clean and well-documented
- Run migrations after significant changes

## License
[Include specific license information]

---

**Note:** Ensure you have the latest version of the required tools before beginning setup.
