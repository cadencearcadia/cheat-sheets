import React from 'react';

function NodeJSCheatSheet() {
    return (
        <div className="container">
            <h1>Node.js Cheat Sheet</h1>
            <p>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build
                server-side applications, scripts, and APIs using JavaScript.
            </p>

            <h2>Installing Node.js on macOS</h2>
            <pre className="code-block">
<code>
{`# Install Node.js via Homebrew
brew install node

# Verify installation
node -v
npm -v`}
</code>
            </pre>

            <h2>Creating a New Project</h2>
            <pre className="code-block">
<code>
{`# Initialize a new project
mkdir my-node-project
cd my-node-project
npm init -y

# Install dependencies (example)
npm install express`}
</code>
            </pre>

            <h2>Running a Simple Script</h2>
            <p>Create a file named <code>index.js</code> and run it using Node.js.</p>
            <pre className="code-block">
<code>
{`// index.js
console.log("Hello, Node.js!");

// Run the script
node index.js`}
</code>
            </pre>

            <h2>Working with Files</h2>
            <p>Node.js has a built-in <code>fs</code> module for working with the file system.</p>
            <pre className="code-block">
<code>
{`const fs = require('fs');

// Write to a file
fs.writeFileSync('example.txt', 'Hello, Node.js!');

// Read from a file
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// Append to a file
fs.appendFileSync('example.txt', '\\nAppended text');

// Delete a file
fs.unlinkSync('example.txt');
`}
</code>
            </pre>

            <h2>Creating an HTTP Server</h2>
            <p>Node.js provides the <code>http</code> module to create HTTP servers.</p>
            <pre className="code-block">
<code>
{`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
`}
</code>
            </pre>

            <h2>Using Express.js</h2>
            <p>Express is a minimal web framework for Node.js that simplifies creating APIs and web servers.</p>
            <pre className="code-block">
<code>
{`const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/', (req, res) => {
  res.send('Welcome to Express.js!');
});

// POST endpoint
app.post('/data', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received', data: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}/\`);
});
`}
</code>
            </pre>

            <h2>Using Modules</h2>
            <p>Node.js supports modularization using CommonJS modules (<code>require</code>) or ES Modules (<code>import/export</code>).</p>
            <pre className="code-block">
<code>
{`// math.js (module file)
function add(a, b) {
  return a + b;
}

module.exports = { add };

// index.js (main file)
const { add } = require('./math');
console.log(add(2, 3)); // 5
`}
</code>
            </pre>

            <h2>Reading Environment Variables</h2>
            <p>Environment variables are often used to store sensitive information like API keys.</p>
            <pre className="code-block">
<code>
{`// Using process.env
console.log('Environment:', process.env.NODE_ENV);

// Example with dotenv
require('dotenv').config();

console.log('API Key:', process.env.API_KEY);

// .env file example
// API_KEY=yourapikey
`}
</code>
            </pre>

            <h2>Event Loop and Asynchronous Programming</h2>
            <p>Node.js is single-threaded and uses an event loop to handle asynchronous tasks.</p>
            <pre className="code-block">
<code>
{`console.log('Start');

// Simulate async behavior with setTimeout
setTimeout(() => {
  console.log('Inside setTimeout');
}, 0);

console.log('End');
// Output:
// Start
// End
// Inside setTimeout
`}
</code>
            </pre>

            <h2>Making HTTP Requests</h2>
            <p>Use the <code>axios</code> library or Node.js's built-in <code>https</code> module for HTTP requests.</p>
            <pre className="code-block">
<code>
{`// Using axios
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// Using https module
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (err) => {
  console.error(err);
});
`}
</code>
            </pre>

            <h2>Debugging</h2>
            <p>Node.js has built-in debugging tools. You can also use Chrome DevTools or VS Code for debugging.</p>
            <pre className="code-block">
<code>
{`# Start the Node.js debugger
node inspect index.js

# Use Chrome DevTools
node --inspect index.js
`}
</code>
            </pre>

            <h2>Final Thoughts</h2>
            <p>
                Node.js is highly versatile and can be used to build web servers, APIs, and even desktop applications
                (via Electron). By mastering its asynchronous programming model, file system handling, and modularization,
                you can efficiently build robust back-end applications.
            </p>
            <h2>Learn More</h2>
            <p>Visit the official Node.js documentation for detailed information:</p>
            <ul>
                <li>
                    <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
                        Node.js Documentation
                    </a>
                </li>
                <li>
                    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                        Express.js Documentation
                    </a>
                </li>
                <li>
                    <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                        npm Documentation
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NodeJSCheatSheet;
