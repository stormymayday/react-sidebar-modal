# React Sidebar & Modal

## 📝 Project Overview

This is a mini React JS application demonstrating the implementation of a sidebar and modal components using Next.js, TypeScript, and React Context API.

## 🚀 Features

-   **Animated Sidebar**

    -   Smooth sliding animation
    -   Responsive design

-   **Interactive Modal**

    -   Easy open/close functionality
    -   Centered content display

-   **State Management**
    -   Global state using React Context API
    -   Centralized control of sidebar and modal states
    -   Type-safe state management with TypeScript

## 🧩 Key Components

### Sidebar

-   Slides in from the left side of the screen
-   Contains navigation and social media links

### Modal

-   Fullscreen overlay
-   Centered content container
-   Easy to open and close
-   Customizable content area

### Context Management

-   `AppContext` provides global state
-   Manages sidebar and modal visibility
-   Uses TypeScript for type-safe state

## 🎨 Styling Approach

-   Uses CSS Variables for theming
-   Responsive design
-   Animations and transitions
-   Consistent color scheme
-   Flexbox and Grid layouts

## 🔍 State Management Flow

1. `AppProvider` initializes global state
2. `useAppContext` hook allows components to:
    - Read current sidebar/modal state
    - Update sidebar/modal state
3. Components like Sidebar and Modal consume the context
