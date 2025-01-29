import React from 'react';

function GitCheatSheet() {
  return (
    <div className="container">
      <h1>Git Cheat Sheet (macOS)</h1>
      <p>
        Git is a distributed version control system used to track changes in source code during software development.
      </p>

      <h2>Installing Git on macOS</h2>
      <p>Check if Git is installed:</p>
      <pre className="code-block">
<code>
{`git --version`}
</code>
      </pre>
      <p>If Git is not installed, install it via Homebrew:</p>
      <pre className="code-block">
<code>
{`brew install git`}
</code>
      </pre>

      <h2>Setting Up Git</h2>
      <p>Configure your name and email for commits:</p>
      <pre className="code-block">
<code>
{`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}
</code>
      </pre>

      <h2>Initializing a Git Repository</h2>
      <p>To start tracking a project with Git, initialize a new repository:</p>
      <pre className="code-block">
<code>
{`git init`}
</code>
      </pre>

      <h2>Cloning an Existing Repository</h2>
      <p>Clone a remote repository to your local machine:</p>
      <pre className="code-block">
<code>
{`git clone https://github.com/user/repository.git`}
</code>
      </pre>

      <h2>Checking Repository Status</h2>
      <p>View the current state of your working directory and staging area:</p>
      <pre className="code-block">
<code>
{`git status`}
</code>
      </pre>

      <h2>Staging and Committing Changes</h2>
      <p>Stage and commit files to the repository:</p>
      <pre className="code-block">
<code>
{`# Stage a single file
git add filename

# Stage all changes
git add .

# Commit changes with a message
git commit -m "Your commit message"`}
</code>
      </pre>

      <h2>Pushing Changes to a Remote Repository</h2>
      <p>After committing, push your changes to a remote repository:</p>
      <pre className="code-block">
<code>
{`git push origin main`}
</code>
      </pre>

      <h2>Pulling Changes from a Remote Repository</h2>
      <p>Fetch and merge changes from the remote repository:</p>
      <pre className="code-block">
<code>
{`git pull origin main`}
</code>
      </pre>

      <h2>Branching and Merging</h2>
      <p>Use branches to manage different versions of your code:</p>
      <pre className="code-block">
<code>
{`# Create a new branch
git branch feature-branch

# Switch to the new branch
git checkout feature-branch

# OR: Create and switch to a new branch in one command
git checkout -b feature-branch

# Merge feature branch into main
git checkout main
git merge feature-branch

# Delete the branch after merging
git branch -d feature-branch`}
</code>
      </pre>

      <h2>Undoing Changes</h2>
      <p>Discard unstaged changes:</p>
      <pre className="code-block">
<code>
{`git checkout -- filename`}
</code>
      </pre>
      <p>Unstage a file:</p>
      <pre className="code-block">
<code>
{`git reset HEAD filename`}
</code>
      </pre>
      <p>Reset the last commit (soft reset keeps changes, hard reset discards them):</p>
      <pre className="code-block">
<code>
{`# Soft reset (keeps changes)
git reset --soft HEAD~1

# Hard reset (discards changes)
git reset --hard HEAD~1`}
</code>
      </pre>

      <h2>Viewing Commit History</h2>
      <p>Check commit logs:</p>
      <pre className="code-block">
<code>
{`git log`}
</code>
      </pre>

      <h2>Stashing Changes</h2>
      <p>Temporarily save uncommitted changes:</p>
      <pre className="code-block">
<code>
{`git stash`}
</code>
      </pre>
      <p>Apply stashed changes:</p>
      <pre className="code-block">
<code>
{`git stash pop`}
</code>
      </pre>

      <h2>Deleting a Remote Branch</h2>
      <p>To delete a branch on the remote repository:</p>
      <pre className="code-block">
<code>
{`git push origin --delete branch-name`}
</code>
      </pre>

      <h2>Working with Tags</h2>
      <p>Tags are used to mark specific points in Git history (e.g., releases).</p>
      <pre className="code-block">
<code>
{`# Create a tag
git tag v1.0.0

# Push tags to remote
git push origin v1.0.0

# List tags
git tag`}
</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official Git documentation for more details:</p>
      <ul>
        <li>
          <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
            Git Official Documentation
          </a>
        </li>
        <li>
          <a href="https://github.com/git-guides" target="_blank" rel="noopener noreferrer">
            GitHub Git Guides
          </a>
        </li>
      </ul>
    </div>
  );
}

export default GitCheatSheet;
