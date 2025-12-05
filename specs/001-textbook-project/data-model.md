# Data Model: Physical AI & Humanoid Robotics Textbook Content

**Feature Branch**: `001-textbook-project` | **Date**: 2025-12-05 | **Plan**: [specs/001-textbook-project/plan.md](specs/001-textbook-project/plan.md)

## Summary

This data model describes the structure and relationships of the textbook content and related interactive elements within the Docusaurus-based website. It focuses on the organization of modules, chapters, and the attributes associated with them.

## Key Entities

### Module

- **Description**: A high-level organizational unit for the textbook content, representing a major section of the book (e.g., "Foundations of Physical AI").
- **Attributes**:
    - `id`: Unique identifier (e.g., `module1`, `module2`).
    - `title`: Display title of the module.
    - `order`: Numerical order for display in the navigation.
    - `difficulty_range`: Overall difficulty range (e.g., "Beginner", "Beginner → Intermediate").
- **Relationships**:
    - Contains multiple `Chapter` entities.

### Chapter

- **Description**: An individual unit of learning within a `Module`, typically corresponding to a single `.mdx` file.
- **Attributes**:
    - `id`: Unique identifier (e.g., `chapter1-1`, `chapter2-5`).
    - `title`: Display title of the chapter.
    - `file_path`: Relative path to the `.mdx` file (e.g., `docs/module1/chapter1.mdx`).
    - `difficulty`: Specific difficulty level (🟢 Beginner, 🟡 Intermediate, 🔴 Professional).
    - `sidebar_label`: Label for navigation sidebar.
    - `order`: Numerical order for display within its `Module`.
    - `hide_table_of_contents`: Boolean to control TOC visibility.
    - `content`: The MDX content, including text, code, and embedded interactive components.
- **Relationships**:
    - Belongs to one `Module`.
    - Contains multiple `InteractiveComponent` instances.

### InteractiveComponent

- **Description**: An instance of a reusable interactive element from Spec-Kit Plus embedded within a `Chapter`.
- **Attributes**:
    - `type`: Type of component (e.g., `CodePlayground`, `Quiz`, `Collapsible`, `Diagram`).
    - `instance_data`: Configuration or content specific to this instance (e.g., code for a playground, questions for a quiz).
- **Relationships**:
    - Embedded within one `Chapter`.

### UserProgress (Bonus Feature)

- **Description**: Represents a user's progress through chapters, stored client-side.
- **Attributes**:
    - `user_id`: Unique identifier for the user (could be anonymized or session-based).
    - `completed_chapters`: Array of `Chapter` `id`s that the user has completed.
    - `quiz_scores`: Map of `Quiz` `id`s to scores.
    - `last_accessed_chapter`: `Chapter` `id` of the last chapter viewed.
- **Storage**: `localStorage` (client-side).
- **Relationships**:
    - N/A (client-side data, no direct server-side relationships for this static site).
