# Audiophile 

This is a Next.js-based e-commerce application for high-quality audio products. It provides a seamless shopping experience for browsing and purchasing headphones, speakers, and earphones.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Backend & Database:** [Convex](https://www.convex.dev/)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Form Management:** [React Hook Form](https://react-hook-form.com/)
*   **Schema Validation:** [Yup](https://github.com/jquense/yup)
*   **Emailing:** [Nodemailer](https://nodemailer.com/)

## Features

*   **Product Catalog:** Browse products by category (headphones, speakers, earphones).
*   **Product Details:** View detailed information, images, and pricing for each product.
*   **Shopping Cart:** Add and manage products in a persistent shopping cart.
*   **Checkout:** A comprehensive checkout process with form validation.
*   **Order Confirmation:** A summary of the order details after a successful checkout.
*   **Email Notifications:** Automated email confirmations for new orders.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or later)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/audiophile.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables by creating a `.env.local` file in the root of the project and adding the following:
    ```
    NEXT_PUBLIC_CONVEX_URL="YOUR_CONVEX_URL"
    EMAIL_HOST="YOUR_EMAIL_HOST"
    EMAIL_PORT="YOUR_EMAIL_PORT"
    EMAIL_USER="YOUR_EMAIL_USER"
    EMAIL_PASS="YOUR_EMAIL_PASS"
    ```

### Running the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `dev`: Runs the application in development mode.
*   `build`: Creates a production build of the application.
*   `start`: Starts a production server.
*   `lint`: Lints the codebase using ESLint.

## Project Structure

```
.
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable React components
├── convex/           # Convex backend functions and schema
├── public/           # Static assets
├── store/            # Zustand state management store
├── lib/              # Utility functions
├── ...
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.