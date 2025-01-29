import React from 'react';

function VimCheatSheet() {
  return (
    <div className="container">
      <h1>Vim Cheat Sheet (macOS)</h1>
      <p>
        Vim is a powerful, highly configurable text editor used in the command line. 
        It is an improved version of the classic <code>vi</code> editor.
      </p>

      <h2>Installing Vim on macOS</h2>
      <p>Check if Vim is installed:</p>
      <pre className="code-block">
<code>{`vim --version`}</code>
      </pre>

      <p>If Vim is not installed, install it via Homebrew:</p>
      <pre className="code-block">
<code>{`brew install vim`}</code>
      </pre>

      <h2>Starting and Exiting Vim</h2>
      <pre className="code-block">
<code>{`# Open Vim
vim filename    # Open a file in Vim

# Exit Vim
:q      # Quit if no changes
:q!     # Quit without saving changes
:wq     # Save and quit
ZZ      # Save and quit (alternative)
`}</code>
      </pre>

      <h2>Vim Modes</h2>
      <p>Vim has different modes for editing and navigation:</p>
      <ul>
        <li><strong>Normal Mode</strong> - Default mode for navigation and commands.</li>
        <li><strong>Insert Mode</strong> - Used for typing and editing text.</li>
        <li><strong>Visual Mode</strong> - Used for selecting and manipulating text.</li>
        <li><strong>Command Mode</strong> - Used for entering commands (e.g., saving and quitting).</li>
      </ul>

      <h2>Switching Modes</h2>
      <pre className="code-block">
<code>{`# Switch to Insert Mode
i       # Insert before cursor
I       # Insert at the beginning of the line
a       # Append after cursor
A       # Append at the end of the line
o       # Insert a new line below
O       # Insert a new line above

# Return to Normal Mode
ESC     # Exit insert or visual mode
`}</code>
      </pre>

      <h2>Navigation in Vim</h2>
      <p>Move around without using the mouse:</p>
      <pre className="code-block">
<code>{`h       # Move left
l       # Move right
j       # Move down
k       # Move up

0       # Move to the beginning of the line
^       # Move to the first non-blank character
$       # Move to the end of the line
w       # Jump to the start of the next word
b       # Jump back to the start of the previous word
e       # Jump to the end of the current word

gg      # Go to the beginning of the file
G       # Go to the end of the file
:n      # Go to line number n (e.g., :10 goes to line 10)
`}</code>
      </pre>

      <h2>Editing Text</h2>
      <pre className="code-block">
<code>{`x       # Delete character under cursor
dd      # Delete entire line
dw      # Delete word
D       # Delete from cursor to end of line
u       # Undo last change
CTRL + r # Redo last undone change
p       # Paste after cursor
P       # Paste before cursor
yy      # Copy (yank) a line
yw      # Copy (yank) a word
`}</code>
      </pre>

      <h2>Searching and Replacing</h2>
      <p>Find and replace text within a file:</p>
      <pre className="code-block">
<code>{`/pattern     # Search forward for 'pattern'
?pattern     # Search backward for 'pattern'
n            # Repeat last search forward
N            # Repeat last search backward

:%s/old/new/g   # Replace 'old' with 'new' in the entire file
:s/old/new/g    # Replace all occurrences in the current line
`}</code>
      </pre>

      <h2>Working with Multiple Files</h2>
      <pre className="code-block">
<code>{`:e filename   # Open another file
:split filename  # Open file in a horizontal split
:vsplit filename # Open file in a vertical split
CTRL + w + w    # Switch between splits
`}</code>
      </pre>

      <h2>Vim Configuration (~/.vimrc)</h2>
      <p>Customize Vim using the <code>~/.vimrc</code> configuration file:</p>
      <pre className="code-block">
<code>{`# Enable syntax highlighting
syntax on

# Set line numbers
set number

# Enable mouse support
set mouse=a

# Use spaces instead of tabs
set expandtab
set tabstop=4
set shiftwidth=4
`}</code>
      </pre>

      <h2>Learn More</h2>
      <p>Visit the official Vim documentation for more details:</p>
      <ul>
        <li>
          <a href="https://www.vim.org/docs.php" target="_blank" rel="noopener noreferrer">
            Vim Official Documentation
          </a>
        </li>
        <li>
          <a href="https://vim-adventures.com/" target="_blank" rel="noopener noreferrer">
            Vim Adventures (Interactive Learning)
          </a>
        </li>
      </ul>
    </div>
  );
}

export default VimCheatSheet;
