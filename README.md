# React Jobs - Job Board Application

A modern, responsive job board application built with React, focusing on open Software Devbeloper positions. This application allows employers to post job listings and developers to browse and apply for positions. The application uses a mock API powered by JSON Server to simulate a backend, making it ideal for demonstration and training purposes.

## 🚀 Features

- **Browse Job Listings**: View all available React developer positions
- **Job Details**: View comprehensive information about each job
- **Post New Jobs**: Employers can create and publish new job listings
- **Edit Jobs**: Update job details and requirements
- **Delete Jobs**: Remove listings that are no longer available
- **Responsive Design**: Optimized for both mobile and desktop viewing

## 🔧 Technologies Used

- **React**: UI library for building user interfaces
- **React Router**: For navigation and routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JSON Server**: Mock API backend for job data storage and retrieval
- **React Icons**: For beautiful, consistent icons
- **React Toastify**: For displaying notifications
- **React Spinners**: For loading indicators

## 🛠️ Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Meera27/react-jobs.git
   cd react-jobs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON server** (mock backend)
   ```bash
   npm run server
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the application in your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
react-jobs/
├── public/
├── src/
│   ├── assets/            # Static assets like images
│   ├── components/        # Reusable UI components
│   │   ├── Card.jsx
│   │   ├── Hero.jsx
│   │   ├── Homecards.jsx
│   │   ├── JobListing.jsx
│   │   ├── JobListings.jsx
│   │   ├── Navbar.jsx
│   │   ├── Spinner.jsx
│   │   └── ViewAllJobs.jsx
│   ├── layouts/           # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/             # Page components
│   │   ├── AddJobPage.jsx
│   │   ├── EditJobPage.jsx
│   │   ├── HomePage.tsx
│   │   ├── JobPage.jsx
│   │   ├── JobsPage.jsx
│   │   └── NotfoundPage.jsx
│   ├── jobs.json          # Mock database for jobs
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies and scripts
```

## 📱 Application Flow

1. **Home Page**: Introduction to the platform with quick access to job listings and job posting
2. **Jobs Page**: Browse all available jobs with filtering options
3. **Job Details**: View comprehensive information about a specific job
4. **Add Job**: Form for employers to create new job listings
5. **Edit Job**: Update existing job information
6. **Error Pages**: Custom 404 page for invalid routes

## 🌐 API Routes

The application uses JSON Server for the backend, with the following API endpoints:

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs?_limit=3` - Get limited jobs (for homepage)
- `GET /api/jobs/:id` - Get a specific job by ID
- `POST /api/jobs` - Create a new job
- `PUT /api/jobs/:id` - Update a job
- `DELETE /api/jobs/:id` - Delete a job

## 📊 Data Model

Each job has the following structure:

```javascript
{
  "id": "string",
  "title": "string",
  "type": "string", // Full-Time, Part-Time, Remote, Internship
  "location": "string",
  "description": "string",
  "salary": "string",
  "company": {
    "name": "string",
    "description": "string",
    "contactEmail": "string",
    "contactPhone": "string"
  }
}
```

## 📝 Key Implementation Details

- **Data Loading Strategy**: Uses React Router's data loading API with loaders
- **Form Handling**: Controlled components for form inputs with validation
- **State Management**: Uses React's useState and useEffect hooks
- **Notifications**: Implements toast notifications for user feedback
- **Loading States**: Displays loading spinners during data fetching operations

## 🔄 React Router Integration

The application leverages React Router v7's advanced features:

- **Data Loading**: Uses the `loader` function to pre-fetch data before rendering
- **Form Actions**: Handles form submissions with built-in action functions
- **Navigation**: Programmatic navigation with `useNavigate`
- **URL Parameters**: Access to dynamic parts of URLs via `useParams`

## 🧪 Future Improvements

- Add user authentication
- Implement job search and filtering
- Add job application functionality
- Create user profiles for job seekers and employers
- Integrate with real backend services

## 👥 Contributors

- Meera - [GitHub Profile](https://github.com/Meera27)
