# Examzzz

This is the backend api for the Examzzz app. The app is meant to help teachers create exams for students to take. The app will allow teachers to create exams, add questions to the exams, and assign the exams to students.

## Development

- Clone the repo
- Run `npm install`
- Copy the `.env.example` file to `.env` and fill in the necessary values
- Run `npm run db:generate` to generate Prisma client
- Ensure you have a running Postgresql database `docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres:alpine`
- Run `npm run dev` to start the server
- Run `npm run build` to build the app (TypeScript build)
- Run `npm start` to start the app from the build
