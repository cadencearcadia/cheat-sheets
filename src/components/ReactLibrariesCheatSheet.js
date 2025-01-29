import React from 'react';

function ReactLibrariesCheatSheet() {
  return (
    <div className="container">
      <h1>React Libraries Cheat Sheet</h1>
      <p>
        React has a vast ecosystem of libraries that extend its functionality. Below are some of the most used React libraries, 
        including <strong>state management, routing, forms, UI components, CMS integration, date/time utilities, animations, and more</strong>.
      </p>

      {/* React Router */}
      <h2>React Router (Navigation & Routing)</h2>
      <p>React Router enables client-side navigation in React applications.</p>
      <pre className="code-block">
<code>{`npm install react-router-dom`}</code>
      </pre>

      {/* Redux Toolkit */}
      <h2>Redux Toolkit (State Management)</h2>
      <p>Redux Toolkit simplifies global state management in React applications.</p>
      <pre className="code-block">
<code>{`npm install @reduxjs/toolkit react-redux`}</code>
      </pre>

      {/* React Query */}
      <h2>React Query (Data Fetching & Caching)</h2>
      <p>React Query simplifies API data fetching and caching.</p>
      <pre className="code-block">
<code>{`npm install @tanstack/react-query`}</code>
      </pre>

      {/* Date and Time Libraries */}
      <h2>Date and Time Libraries</h2>

      <h3>1. date-fns (Lightweight Date Handling)</h3>
      <p>`date-fns` provides simple utilities for working with dates.</p>
      <pre className="code-block">
<code>{`npm install date-fns`}</code>
      </pre>

      <h3>2. Moment.js (Full-featured Date Library)</h3>
      <p>Moment.js is a popular library for date formatting and manipulation.</p>
      <pre className="code-block">
<code>{`npm install moment`}</code>
      </pre>

      <h3>3. Day.js (Lightweight Alternative to Moment.js)</h3>
      <p>Day.js is a modern, lightweight alternative to Moment.js.</p>
      <pre className="code-block">
<code>{`npm install dayjs`}</code>
      </pre>

      {/* CMS Integration */}
      <h2>Content Management System (CMS) Libraries</h2>

      <h3>1. GraphQL & Apollo Client (For Headless CMS like Strapi, Sanity, and Contentful)</h3>
      <p>Apollo Client is used with GraphQL to fetch CMS data efficiently.</p>
      <pre className="code-block">
<code>{`npm install @apollo/client graphql`}</code>
      </pre>

      <h3>2. Strapi CMS Integration</h3>
      <p>Strapi is a headless CMS that allows React apps to pull dynamic content.</p>

      {/* Form Handling */}
      <h2>Form Handling & Validation</h2>

      <h3>1. Formik (Form Management)</h3>
      <p>Formik simplifies handling forms and validation in React.</p>
      <pre className="code-block">
<code>{`npm install formik`}</code>
      </pre>

      {/* UI Component Libraries */}
      <h2>UI Component Libraries</h2>

      <h3>1. Material-UI (MUI)</h3>
      <p>MUI provides a modern UI framework with ready-to-use components.</p>
      <pre className="code-block">
<code>{`npm install @mui/material @emotion/react @emotion/styled`}</code>
      </pre>

      <h3>2. Styled Components (CSS-in-JS)</h3>
      <p>Styled Components allow writing CSS directly in JavaScript files.</p>
      <pre className="code-block">
<code>{`npm install styled-components`}</code>
      </pre>

      {/* Animations */}
      <h2>Animations</h2>

      <h3>1. Framer Motion (Modern Animations)</h3>
      <p>Framer Motion provides a simple and powerful way to animate React components.</p>
      <pre className="code-block">
<code>{`npm install framer-motion`}</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official documentation for these libraries:</p>
      <ul>
        <li><a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">React Router</a></li>
        <li><a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">Redux Toolkit</a></li>
        <li><a href="https://tanstack.com/query/latest/docs/react" target="_blank" rel="noopener noreferrer">React Query</a></li>
        <li><a href="https://date-fns.org/" target="_blank" rel="noopener noreferrer">date-fns</a></li>
        <li><a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">Moment.js</a></li>
        <li><a href="https://day.js.org/" target="_blank" rel="noopener noreferrer">Day.js</a></li>
        <li><a href="https://formik.org/" target="_blank" rel="noopener noreferrer">Formik</a></li>
        <li><a href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a></li>
        <li><a href="https://styled-components.com/docs" target="_blank" rel="noopener noreferrer">Styled Components</a></li>
        <li><a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a></li>
        <li><a href="https://www.apollographql.com/docs/" target="_blank" rel="noopener noreferrer">Apollo Client</a></li>
      </ul>
    </div>
  );
}

export default ReactLibrariesCheatSheet;
