import React from 'react';

function PythonCheatSheet() {
  return (
    <div className="container">
      <h1>Python Cheat Sheet</h1>
      <p>
        Python is a popular, easy-to-read programming language used in web development,
        data analysis, artificial intelligence, automation, and much more. It emphasizes
        readability and has a huge ecosystem of libraries and frameworks.
      </p>

      <h2>Basic Syntax</h2>
      <pre className="code-block">
<code>
{`# Variables
name = "Alice"
age = 25

# Print
print(f"My name is {name} and I'm {age} years old.")

# If / Else
if age > 18:
    print("Adult")
else:
    print("Minor")

# For loop
for i in range(5):
    print(i)
`}
</code>
      </pre>

      <h2>Virtual Environments</h2>
      <pre className="code-block">
<code>
{`# Create a virtual environment
python -m venv venv

# Activate it (macOS)
source venv/bin/activate

# Install packages
pip install requests

# List installed packages
pip freeze

# Export to a requirements file
pip freeze > requirements.txt

# Deactivate environment
deactivate
`}
</code>
      </pre>

      <h2>Generating PDFs with ReportLab</h2>
      <p>
        We showed examples of creating PDFs in Python using the <code>reportlab</code> library. 
        See the scripts in our conversation for more advanced formatting. For a quick reminder:
      </p>
      <pre className="code-block">
<code>
{`# Install reportlab
pip install reportlab

# A simple ReportLab script
from reportlab.pdfgen import canvas

c = canvas.Canvas("example.pdf")
c.drawString(100, 750, "Hello, PDF!")
c.save()
`}
</code>
      </pre>

      <h2>Functions & Classes</h2>
      <pre className="code-block">
<code>
{`# A simple function
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # "Hello, Alice!"

# A basic class example
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print(f"{self.name} says woof!")

my_dog = Dog("Fido")
my_dog.bark()  # "Fido says woof!"
`}
</code>
      </pre>

      <h2>Common Data Structures</h2>
      <pre className="code-block">
<code>
{`# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
print(fruits)  # ["apple", "banana", "cherry", "date"]

# Dictionaries
person = {
    "name": "Alice",
    "age": 25
}
person["email"] = "alice@example.com"
print(person)  # {"name": "Alice", "age": 25, "email": "alice@example.com"}

# Tuples
coords = (10, 20)
x, y = coords
print(x, y)  # 10 20
`}
</code>
      </pre>

      <h2>Working with Files</h2>
      <pre className="code-block">
<code>
{`# Reading a file
with open("example.txt", "r") as f:
    data = f.read()
    print(data)

# Writing to a file
with open("output.txt", "w") as f:
    f.write("Hello, world!")
`}
</code>
      </pre>

      <h2>Third-Party Libraries</h2>
      <p>
        Python has a massive ecosystem of libraries. For instance:
      </p>
      <ul>
        <li><b>Requests</b> for HTTP requests</li>
        <li><b>Pandas</b> for data analysis</li>
        <li><b>NumPy</b> for numerical computing</li>
        <li><b>Matplotlib</b> for plotting</li>
      </ul>
      <pre className="code-block">
<code>
{`import requests

response = requests.get("https://api.github.com")
if response.status_code == 200:
    print("Success:", response.json())
else:
    print("Request failed with status:", response.status_code)
`}
</code>
      </pre>

      <h2>Example Project Structure</h2>
      <pre className="code-block">
<code>
{`my_project/
├── venv/
├── requirements.txt
├── main.py
└── utils.py
`}
</code>
      </pre>
      <p>
        Above is a typical layout:
        <br />
        - <code>venv/</code>: virtual environment folder
        <br />
        - <code>requirements.txt</code>: pinned dependencies
        <br />
        - <code>main.py</code>: main script or entry point
        <br />
        - <code>utils.py</code>: helper functions
      </p>

      <h2>Learn More</h2>
      <p>Visit the official Python documentation for detailed information:</p>
      <ul>
        <li>
          <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">
            Python Official Documentation
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PythonCheatSheet;
