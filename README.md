# AI Content Frontend

This is the frontend of the AI Content project, built with **Next.js** and styled with **Tailwind CSS**. The app interacts with a Flask-based backend to retrieve AI-generated content and displays a content history.

## Live Demo

[Live Frontend URL](https://ai-content-frontend.vercel.app/) <!-- Replace with actual URL -->

## Features

- Display AI-generated content
- Refresh content with a single click
- View history of generated content
- Responsive design with Tailwind CSS

## Technologies

- **Next.js** - React-based framework
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend API deployed and accessible

### Installation

1. Clone the repository:
```bash
git clone https://github.com/REFATBHUYAN/ai-content-frontend
cd ai-content-frontend
```
2. Install dependencies:

```bash
Copy code
npm install
```
3. Create a .env.local file:

```bash
NEXT_PUBLIC_API_BASE_URL=https://ai-content-backend.onrender.com
```
4. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view in the browser.