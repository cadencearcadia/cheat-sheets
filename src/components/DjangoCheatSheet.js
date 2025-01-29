import React from 'react';

function DjangoCheatSheet() {
  return (
    <div className="container">
      <h1>Django Cheat Sheet (macOS)</h1>
      <p>
        Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.
      </p>

      <h2>Installing Django on macOS</h2>
      <p>Install Django using pip inside a virtual environment:</p>
      <pre className="code-block">
<code>
{`# Install virtualenv (if not already installed)
pip install virtualenv

# Create and activate a virtual environment
python -m venv myenv
source myenv/bin/activate  # For macOS/Linux

# Install Django
pip install django

# Verify installation
django-admin --version`}
</code>
      </pre>

      <h2>Creating a Django Project</h2>
      <p>Start a new Django project:</p>
      <pre className="code-block">
<code>
{`django-admin startproject myproject
cd myproject`}
</code>
      </pre>

      <h2>Starting the Development Server</h2>
      <p>Run the Django development server:</p>
      <pre className="code-block">
<code>
{`python manage.py runserver`}
</code>
      </pre>
      <p>
        The server runs at <code>http://127.0.0.1:8000/</code>.
      </p>

      <h2>Creating a Django App</h2>
      <p>Django projects can contain multiple apps:</p>
      <pre className="code-block">
<code>
{`python manage.py startapp myapp`}
</code>
      </pre>

      <h2>Project Structure</h2>
      <pre className="code-block">
<code>
{`myproject/
├── manage.py        
├── myproject/       
│   ├── settings.py  
│   ├── urls.py      
│   ├── wsgi.py      
│   ├── asgi.py      
├── myapp/           
│   ├── migrations/  
│   ├── models.py    
│   ├── views.py     
│   ├── urls.py      
│   ├── templates/   
│   ├── static/      
`}
</code>
      </pre>

      <h2>Defining a Model (Database Table)</h2>
      <p>Define a model inside <code>myapp/models.py</code>:</p>
      <pre className="code-block">
<code>
{`from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title`}
</code>
      </pre>

      <h2>Applying Migrations</h2>
      <pre className="code-block">
<code>
{`python manage.py makemigrations
python manage.py migrate`}
</code>
      </pre>

      <h2>Creating an Admin User</h2>
      <pre className="code-block">
<code>
{`python manage.py createsuperuser`}
</code>
      </pre>
      <p>Then log in at <code>http://127.0.0.1:8000/admin/</code>.</p>

      <h2>Registering Models in Admin Panel</h2>
      <pre className="code-block">
<code>
{`from django.contrib import admin
from .models import BlogPost

admin.site.register(BlogPost)`}
</code>
      </pre>

      <h2>Creating a View</h2>
      <p>Define a view inside <code>myapp/views.py</code>:</p>
      <pre className="code-block">
<code>
{`from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")`}
</code>
      </pre>

      <h2>Adding a URL Pattern</h2>
      <pre className="code-block">
<code>
{`from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),
]`}
</code>
      </pre>

      <h2>Using Templates</h2>
      <p>Create a template file inside <code>myapp/templates/home.html</code>:</p>
      <pre className="code-block">
<code>
{`<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Welcome to Django</h1>
</body>
</html>`}
</code>
      </pre>

      <h2>Rendering a Template in Views</h2>
      <pre className="code-block">
<code>
{`from django.shortcuts import render

def home(request):
    return render(request, 'home.html')`}
</code>
      </pre>

      <h2>Running the Shell</h2>
      <pre className="code-block">
<code>
{`python manage.py shell`}
</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official Django documentation for more details:</p>
      <ul>
        <li>
          <a href="https://docs.djangoproject.com/en/stable/" target="_blank" rel="noopener noreferrer">
            Django Official Documentation
          </a>
        </li>
        <li>
          <a href="https://tutorial.djangogirls.org/en/" target="_blank" rel="noopener noreferrer">
            Django Girls Tutorial (Beginner-Friendly)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DjangoCheatSheet;
