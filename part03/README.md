# Part 2 - Render Deployment & Environment Variables

This part covers how to deploy a Node.js / Express backend on Render and how to use environment variables with `.env`.

## What I Learned

- Deploying a Node.js backend on Render
- Using environment variables
- Why `.env` files should not be uploaded to GitHub
- Setting environment variables in production

---

## What is .env ?

`.env` is a file used to store sensitive configuration values such as:

- API keys
- database credentials
- secret tokens
- private configuration

Example:

PORT=3000
DB_PASSWORD=mysecretpassword
API_KEY=123456

These values are accessed in Node.js using:

process.env.PORT

---

## Why .env is Not Uploaded to GitHub

`.env` files are ignored because they may contain sensitive data such as:

- database passwords
- private API keys
- authentication secrets

To prevent leaks, `.env` is added to `.gitignore`.

Example:

node_modules
.env

---
