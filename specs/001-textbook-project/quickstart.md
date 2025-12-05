# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `001-textbook-project` | **Date**: 2025-12-05 | **Plan**: [specs/001-textbook-project/plan.md](specs/001-textbook-project/plan.md)

## Summary

This guide provides a quick overview of how to set up, develop, and deploy the "Physical AI & Humanoid Robotics Textbook" website locally.

## Getting Started

Follow these steps to get the Docusaurus project running on your local machine.

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone [repository-url]
cd physical-ai-humanoid-textbook # or your renamed repository
```

### 2. Install Dependencies

Navigate to the project root and install the necessary Node.js dependencies:

```bash
npm install
# or yarn install
```

This will install Docusaurus, Spec-Kit Plus, Tailwind CSS, and other project dependencies.

### 3. Start Local Development Server

Once dependencies are installed, you can start the local development server:

```bash
npm start
# or yarn start
```

This command starts a development server and opens a new browser window. Most changes are reflected live without having to restart the server.

### 4. Build for Production

To build the project for production, run:

```bash
npm run build
# or yarn build
```

This command generates static content into the `build` directory, which can then be served by any static content hosting service, such as GitHub Pages.

## Content Development

- **Chapters**: Located in the `docs/` directory as `.mdx` files. Organize them into subdirectories for modules.
- **Sidebars**: Configure chapter navigation in `sidebars.js`.
- **Interactive Components**: Use custom React components in `src/components` to embed Spec-Kit Plus features into your `.mdx` files.
- **Styling**: Utilize Tailwind CSS classes directly in your MDX/React components.

## Deployment

The project is configured for deployment to GitHub Pages. Ensure your `docusaurus.config.js` is correctly set up with your GitHub repository details. Pushing to the `main` branch will trigger a GitHub Actions workflow for automatic deployment.
