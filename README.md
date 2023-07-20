# My Super Awesome API <a target="_blank" href="https://kounter.tk"><img align="right" src="https://t.ly/pukV" /></a>

> **Warning**  
> This app is used for demonstration purposes only.

This is the backend repository for _my super awesome app_. It's built using NodeJS and ExpressJS. I mainly created it to demonestrate a full-stack app deployment. Here's the tutorial [link](https://blog.kero.cf/free-deployment-for-your-full-stack-web-application).

<sup>Frontend repo 👉 [kerolloz/my-super-awesome-app](https://github.com/kerolloz/my-super-awesome-app)</sup>

## Usage

You need a `.env` file with the following variables defined.
You can use the `.env.example` file as a template.

```bash
PORT=5000
MONGODB_URI=mongodb://localhost/your-database-name
JWT_SECRET_KEY=very-secret-key
SENDGRID_API_KEY=123
SENDGRID_FROM_EMAIL=your-email
FRONTEND_BASE_URI=http://localhost:3000
IMGBB_KEY=abc123
```

```bash
npm i            # install required dependencies
npm run dev      # start development server
npm run build    # build for production
```

## Docker

Before building the image, you need to create a `.env` file with the same variables as above.

```bash
docker build -t my-super-awesome-api .
docker run -p 5000:5000 my-super-awesome-api
```
