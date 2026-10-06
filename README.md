# Open Library Explorer

A web application built with Next.js that allows users to search and explore books using the Open Library public API.

## Features

- Search books by title or author
- Display search results in a responsive 3-column grid layout
- Show book details including full title, authors, publication year, description, ISBN, and cover images
- Loading and error handling states for better user experience
- Pagination with "Load More" functionality to handle large result sets
- Responsive design optimized for desktop, tablet, and mobile devices
- Accessible UI with semantic HTML and ARIA attributes
- Clean, modular code structure following React and Next.js best practices

## Technologies Used

- Next.js 15 (App Router, Turbopack) and React 19
- Tailwind CSS 4 and PrimeFlex for styling
- Fetch API with the [Open Library API](https://openlibrary.org/developers/api)
- Jest 30 and React Testing Library for unit tests
- ESLint

## Getting Started

### Prerequisites

- Node.js 18.18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rachedchakchouk/open-library-explorer.git
cd open-library-explorer
```

2. Install dependencies and start the dev server:

```bash
npm install
npm run dev        # http://localhost:3000
```

3. Run the tests and the linter:

```bash
npm test
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── page.js               # search page (results grid + "Load More")
│   ├── book/[...id]/page.js  # book detail page
│   └── layout.js
├── components/
│   ├── SearchBar.jsx
│   ├── BookCard.jsx
│   └── BookDetail.jsx
└── test/
    └── HomePage.test.jsx
```

## Author

**Rached Chakchouk** — Full Stack Software Engineer (Java / Spring Boot / Angular)
[LinkedIn](https://www.linkedin.com/in/rached-chakchouk) · [Portfolio](https://rached-chakchouk.netlify.app)
