# Crunchy Numbers

Niche tools for finance & operations leaders.

## Overview

Crunchy Numbers is a platform that provides specialized tools for finance and operations professionals. The platform is designed to simplify complex financial workflows and help leaders make better decisions.

Currently, the platform features:

- **Friendly GL Agent**: Connect to your accounting system to analyze general ledger data.

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 10.x or later

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/crunchy-numbers.git
   cd crunchy-numbers
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured to deploy to Netlify. When you push to the main branch, it will automatically deploy to [crunchy.tools](https://crunchy.tools).

## Project Structure

```
/ (root)
├── app/ (Next.js app directory)
│   ├── friendly-gl-agent/ (Friendly GL Agent pages)
│   │   ├── launch/ (Launch page)
│   │   ├── disconnect/ (Disconnect page)
│   │   └── terms/ (Terms page)
│   └── privacy-policy/ (Privacy policy page)
├── public/ (Static assets)
│   └── calculator.svg (Logo/illustration)
└── tailwind.config.ts (Tailwind CSS configuration)
```

## Environment Variables

For production, you'll need to set the following environment variables in your Netlify deployment:

- `NEXT_PUBLIC_API_URL` - Backend API URL (if applicable)
- Additional keys for Intuit/QuickBooks integration (when implemented)

## License

This project is proprietary and confidential.

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).
