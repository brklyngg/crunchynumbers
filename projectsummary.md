# Project Summary: Crunchy Numbers

This project is a personal portfolio website for Gary Gurevich, a Finance + Ops leader, inventor, and idealist. The website is named "Crunchy Numbers" and serves as a place for him to share his projects.

## Tech Stack

The project is a modern web application built with the following technologies:

*   **Framework**: [Next.js](https://nextjs.org/) (v15) with Turbopack
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **UI Library**: [React](https://react.dev/) (v19)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Linting**: [ESLint](https://eslint.org/)

## Project Structure

The website is structured using the Next.js App Router. Key directories include:

*   `app/`: Contains the pages of the website, including the main page, about page, and individual project pages.
*   `public/`: Stores static assets like images and SVGs for project logos.
*   `next.config.ts`: Next.js configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.

## Pages and Content

*   **Home Page (`app/page.tsx`)**: Displays a grid of projects. Some projects are live and link to external sites, while others are marked as "in development".
*   **About Page (`app/about/page.tsx`)**: A brief bio of Gary Gurevich, his philosophy on building projects, and links to his Twitter/X and GitHub profiles.
*   **Project Pages (`app/projects/...`)**: Individual pages for each project, providing more details.

## Projects

The portfolio showcases a variety of projects, including:

*   **Scenic Route**: Scenic motorcycle routes via Google Maps.
*   **Just the Tip**: A simple tip calculator.
*   **Hot Sput Summer**: A website for the "Sputnik Summer Picnic Tour 2025".
*   **Friendly GL Agent**: A tool for Google Sheets and QuickBooks.
*   **Monocle**: A night-vision monocle for new dads.
*   **Old People Safety Lamp**: A smart home safety solution for seniors.
*   **"Truthiness" Evaluator**: A tool that uses multiple AIs to debate claims.

## Deployment

The project is configured for deployment on [Netlify](https://www.netlify.com/), as indicated by the `netlify.toml` file. It also has a GitHub Actions workflow for deployment.
