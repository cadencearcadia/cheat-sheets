import React from 'react';

function NextJSCheatSheet() {
    return (
        <div className="container">
            <h1>Next.js Cheat Sheet</h1>
            <p>
                Next.js is a <strong>React framework</strong> for <strong>server-side rendering (SSR), static site generation (SSG), API routes, and SEO-friendly applications</strong>.
                It extends React's capabilities by offering routing, data fetching methods, and optimizations.
            </p>

            <h2>Installation & Setup (macOS)</h2>
            <p>Install <strong>Node.js</strong> if not already installed:</p>
            <pre className="code-block">
<code>
{`brew install node`}
</code>
            </pre>

            <p>Then create a new Next.js project:</p>
            <pre className="code-block">
<code>
{`npx create-next-app@latest my-next-app
cd my-next-app
npm run dev`}
</code>
            </pre>
            <p>
                The development server starts at <code>http://localhost:3000</code>.
            </p>

            <h2>File Structure</h2>
            <pre className="code-block">
<code>
{`my-next-app/
├── pages/             # Next.js page-based routing
│   ├── index.js       # Home page
│   ├── about.js       # Example of another page
│   ├── api/           # API routes live here
│   │   ├── hello.js   # Example API endpoint
├── components/        # Reusable components
├── public/            # Static assets
├── styles/            # Global and module CSS
├── next.config.js     # Configuration file
`}
</code>
            </pre>

            <h2>Basic Page Routing</h2>
            <p>Next.js uses <strong>file-based routing</strong> inside the <code>pages/</code> directory.</p>
            <pre className="code-block">
<code>
{`// pages/index.js (Home Page)
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

// pages/about.js (Another Page)
export default function About() {
  return <h1>About Page</h1>;
}`}
</code>
            </pre>

            <h2>Navigation with Next.js</h2>
            <p>Use the <strong>Link component</strong> from <code>next/link</code> for client-side navigation.</p>
            <pre className="code-block">
<code>
{`import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}`}
</code>
            </pre>

            <h2>Fetching Data in Next.js</h2>

            <h3>1. Static Generation (<code>getStaticProps</code>)</h3>
            <p>Used for <strong>pre-rendering pages at build time</strong>.</p>
            <pre className="code-block">
<code>
{`export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
</code>
            </pre>

            <h3>2. Server-Side Rendering (<code>getServerSideProps</code>)</h3>
            <p>Runs <strong>on every request</strong> (good for real-time data).</p>
            <pre className="code-block">
<code>
{`export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return { props: { users } };
}

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
</code>
            </pre>

            <h3>3. Client-Side Fetching (<code>useEffect</code> with <code>fetch</code>)</h3>
            <p>Good for fetching data <strong>after the page loads</strong>.</p>
            <pre className="code-block">
<code>
{`import { useState, useEffect } from 'react';

export default function ClientFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}
</code>
            </pre>

            <h2>API Routes (Backend in Next.js)</h2>
            <p>
                Next.js allows you to create <strong>serverless API routes</strong> inside the <code>pages/api/</code> directory.
            </p>
            <pre className="code-block">
<code>
{`// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Next.js API!" });
}`}
</code>
            </pre>

            <h2>Deployment</h2>
            <p>To <strong>build</strong> and <strong>export</strong> your Next.js app for deployment:</p>
            <pre className="code-block">
<code>
{`# Build for production
npm run build

# Start the production server
npm start`}
</code>
            </pre>
            <p>
                Next.js also works seamlessly with <strong>Vercel</strong>, which provides <strong>automatic deployment</strong> and <strong>serverless functions</strong>.
            </p>

            <h2>Learn More</h2>
            <p>
                Visit the official Next.js documentation for detailed information:
            </p>
            <ul>
                <li>
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                        Next.js Official Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NextJSCheatSheet;
