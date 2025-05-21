text
# Notes App

This project is a full-stack Notes application built with [Create React App](https://github.com/facebook/create-react-app) for the frontend and Node.js/Express/MongoDB for the backend.

Users can create, view, and share notes securely. Authentication is handled via JWT, and the UI is clean and responsive.

---

## Getting Started

### 1. Clone the Repository

git clone https://github.com/uUtkarsh3vedi/Notes-Application.git
cd Notes-Application

text

### 2. Install Dependencies

#### Backend

cd backend
npm install

text

#### Frontend

cd ../frontend
npm install

text

### 3. Set Up Environment Variables

#### Backend (`backend/.env`)

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

text

#### Frontend

Update `BASE_URL` in your API files if needed (default: `http://localhost:8000/api`).

### 4. Run the Application

#### Backend

cd backend
npm start

text

#### Frontend

cd frontend
npm start

text

---

## Available Scripts (Frontend)

In the `frontend` directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

---

## Features

- User authentication (JWT)
- Create, view, and delete notes
- Share notes with other users
- View notes shared with you
- Responsive design

---

## Folder Structure

Notes-Application/
backend/
models/
routes/
controllers/
middleware/
.env
server.js
frontend/
src/
components/
context/
api/
styles/
public/
package.json
README.md

text

---

## Usage

1. **Register/Login:** Create an account or log in.
2. **Create Notes:** Add new notes from the dashboard.
3. **Share Notes:** Share notes with other users by entering their user ID.
4. **View Notes:** See your notes and notes shared with you.
5. **Logout:** Securely log out.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## License

[MIT](LICENSE)

---

**Happy coding! 🚀**