# YUBRA™

> Effortlessly search for your next rental property.

Property Pulse is a dynamic web application designed to simplify your property rental search.

The `_theme_files` folder contains pure HTML templates styled with Tailwind CSS.

[👉 Click Here For Deployed Version](https://property-pulse-lyart-six.vercel.app/)

## Features

Explore the powerful features available in Property Pulse:

- [x] Google authentication & NextAuth integration
- [x] User authorization and route-based access control
- [x] User dashboard with profile and listings management
- [x] Full CRUD operations for property listings
- [x] Multiple image uploads for property listings
- [x] Searchable property database
- [x] In-app messaging system with unread notifications
- [x] Photoswipe gallery for image viewing
- [x] Mapbox for interactive maps
- [x] Real-time toast notifications
- [x] Bookmarking/saving properties
- [x] Property sharing on social media
- [x] Loading spinners and indicators
- [x] Responsive design built with Tailwind CSS
- [x] Custom 404 error page
- [x] Utilization of Next.js server actions

## Technologies Used

This application is built with a stack of modern technologies:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Photoswipe](https://photoswipe.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [React Map GL](https://visgl.github.io/react-map-gl/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Share](https://www.npmjs.com/package/react-share)

## Getting Started

### Requirements

To run this project locally, you’ll need:

- Node.js version 18 or newer
- A MongoDB Atlas account with a cluster set up. [Get started here](https://www.mongodb.com/).
- A Cloudinary account. [Sign up here](https://cloudinary.com/).
- Google Cloud credentials. [Get started here](https://console.cloud.google.com/).
- A Mapbox account. [Sign up here](https://www.mapbox.com/).

### Configuring Environment Variables

Rename the `env.example` file to `.env` and provide the following details:

- MongoDB connection string (find it in your MongoDB Atlas dashboard) for `MONGODB_URI`.
- Google Client ID and Secret for `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Set a unique value for `NEXTAUTH_SECRET` (you can generate one using this command: `openssl rand -base64 32`).
- Cloudinary credentials: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
- Mapbox API token for `NEXT_PUBLIC_MAPBOX_TOKEN`.
- Google Geocoding API key for `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY`.

### Installing Dependencies

Install the necessary packages with:

```bash
npm install
```

### Running the Development Server

Launch the development server with:

```bash
npm run dev
```

Visit http://localhost:3000 in your browser to explore the app.
