import React from 'react';

function ReactCheatSheet() {
  return (
    <div className="container">
      <h1>React Cheat Sheet</h1>
      <p>
        React is a JavaScript library for building user interfaces. It is component-based,
        declarative, and has a rich ecosystem. By focusing on small, reusable components,
        React helps you build complex UIs with simpler, more maintainable code.
      </p>

      <h2>Creating a React App (macOS)</h2>
      <pre className="code-block">
<code>
{`# 1. Install Node.js (if not already) via Homebrew
brew install node

# 2. Create a new React app
npx create-react-app my-app
cd my-app

# 3. Start the development server
npm start
`}
</code>
      </pre>
      <p>
        This will spin up the React development server and open your app at
        <code> http://localhost:3000</code>.
      </p>

      <h2>Components & Props</h2>
      <pre className="code-block">
<code>
{`// A functional component that accepts props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage in a parent component or App.js
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;
`}
</code>
      </pre>
      <p>
        In React, <strong>props</strong> are how you pass data from a parent component to
        a child component. They are read-only, meaning child components shouldn’t modify them.
      </p>

      <h2>State & Hooks (useState)</h2>
      <pre className="code-block">
<code>
{`import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable: count
  // setCount is used to update that variable
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
`}
</code>
      </pre>
      <p>
        The <code>useState</code> hook lets you add state to functional components.
        React will re-render the component whenever you call <code>setCount</code>.
      </p>

      <h2>useEffect Hook (Side Effects)</h2>
      <pre className="code-block">
<code>
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Runs after the component mounts
    const timerId = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Timer: {time}s</div>;
}
`}
</code>
      </pre>
      <p>
        The <code>useEffect</code> hook handles side effects like data fetching or
        subscriptions. The optional cleanup function runs before the component unmounts
        or whenever dependencies change (depending on your dependency array).
      </p>

      <h2>useContext Hook</h2>
      <pre className="code-block">
<code>
{`import React, { useContext, createContext } from 'react';

const ThemeContext = createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}>
    Current theme: {theme}
  </button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
`}
</code>
      </pre>

      <h2>useRef Hook</h2>
      <pre className="code-block">
<code>
{`import React, { useRef, useEffect } from 'react';

function InputFocus() {
  const inputEl = useRef(null);

  useEffect(() => {
    // Focus the input on mount
    inputEl.current.focus();
  }, []);

  return <input ref={inputEl} type="text" placeholder="Focus on mount" />;
}
`}
</code>
      </pre>

      <h2>useMemo Hook</h2>
      <pre className="code-block">
<code>
{`import React, { useState, useMemo } from 'react';

function ExpensiveCalculation(num) {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += i % 10;
  }
  return num + total;
}

function Calculator() {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(10);

  const result = useMemo(() => {
    return ExpensiveCalculation(count);
  }, [count]);

  return (
    <div>
      <p>Expensive result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherValue(otherValue + 1)}>Increment Other</button>
    </div>
  );
}
`}
</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official React documentation for detailed information:</p>
      <ul>
        <li>
          <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            React Official Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ReactCheatSheet;
