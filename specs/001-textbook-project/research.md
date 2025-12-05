# Research Findings: Physical AI & Humanoid Robotics Textbook

**Feature Branch**: `001-textbook-project` | **Date**: 2025-12-05 | **Plan**: [specs/001-textbook-project/plan.md](specs/001-textbook-project/plan.md)

## Summary

This document consolidates research findings related to Docusaurus 3.x and Spec-Kit Plus, providing best practices for their integration and usage in the "Physical AI & Humanoid Robotics Textbook" project.

## Research Areas

### Docusaurus 3.x Best Practices

**Decision**: Adhere to official Docusaurus 3.x documentation for configuration, content management, and theme customization.

**Rationale**: Following official best practices ensures stability, maintainability, and access to community support. It also leverages Docusaurus's optimized build processes for performance and SEO.

**Alternatives Considered**: Custom static site generators (Rejected due to increased development effort, lack of community support, and missing built-in features like MDX support, versioning, and search).

Key areas to focus on:
- **Content Structure**: Utilize the `docs` folder for markdown/MDX files, organized by categories (modules) in `sidebars.js`.
- **Asset Management**: Place static assets in the `static` folder for efficient serving.
- **Configuration**: Centralize site metadata, plugins, and themes in `docusaurus.config.js`.
- **Theme Customization**: Override default themes using `src/theme` for consistent branding and dark mode implementation.
- **Build & Deployment**: Leverage Docusaurus's optimized build command and integrate with GitHub Actions for automated GitHub Pages deployment.

### Spec-Kit Plus Integration Best Practices

**Decision**: Integrate Spec-Kit Plus components as custom React components within Docusaurus MDX files and global theme components.

**Rationale**: This approach allows for leveraging the interactive capabilities of Spec-Kit Plus while maintaining Docusaurus's content workflow. Wrapping Spec-Kit Plus components into global Docusaurus-compatible React components simplifies usage across chapters and ensures consistency.

**Alternatives Considered**: Direct embedding of Spec-Kit Plus raw HTML/JS (Rejected due to potential conflicts with Docusaurus React environment, lack of reusability, and increased maintenance burden).

Key areas to focus on:
- **Component Wrapping**: Create React components in `src/components/` that wrap Spec-Kit Plus functionalities (e.g., `DifficultyBadge`, `Quiz`, `CodePlayground`, `Collapsible`, `DiagramWrapper`).
- **MDX Usage**: Import and use these wrapped components directly in `.mdx` chapter files.
- **Styling**: Ensure Spec-Kit Plus components integrate seamlessly with Tailwind CSS, leveraging existing utility classes or extending the theme where necessary.
- **Interactivity**: Verify that client-side JavaScript for interactive components functions correctly within the Docusaurus environment, especially in different themes (light/dark mode).
