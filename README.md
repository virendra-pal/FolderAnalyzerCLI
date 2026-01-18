# Folder Analyzer CLI Tool

## Author
**Virendra Kumar Pal**

## Problem Statement

While working on multiple projects, it is often difficult to quickly know:

- How many files a folder contains,

- How many subdirectories exist,

- And the total disk space used.

Checking this manually via file explorer is slow and repetitive.

## Solution

A lightweight command-line utility that recursively analyzes a given folder and prints:

- Total file count,

- Total folder count,

- Total size in MB.

## Requirements

- Node.js (no external libraries)

## Project Structure
```
FolderAnalyzerCLI/
├── fileInfo.js
└── README.md
```


## How to Run
```
node fileInfo.js <folder_path>
```


Example:

```
node fileinfo.js ./projects
```

## Sample Output
```
Folder Analysis Result
----------------------
>Total files   : 128
>Total folders : 14
>Total size    : 23.47 MB
```

## Design Decisions

- Command-line interface: Fast, scriptable, and commonly used by developers.

- Recursive traversal: Ensures all nested directories are analyzed.

- Standard libraries only: Uses fs and path for portability and simplicity.

- Explicit error handling: Handles invalid paths and filesystem errors gracefully.

- Readable structure: Clear function separation and descriptive variable names.
