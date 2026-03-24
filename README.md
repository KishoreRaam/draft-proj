# Green Graph Generator 🌱

A Node.js script that generates a GitHub contribution graph with random commits throughout the past year, creating a "green graph" visualization on your GitHub profile.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Git** (with GitHub account configured)

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/AMOHAMMEDIMRAN/greenGraph.git
cd greenGraph
```

### Step 2: Remove the Original Git History

Delete the `.git` folder to remove the original repository's history:

**On Windows (Command Prompt):**

```bash
rmdir /s /q .git
```

**On Windows (PowerShell):**

```bash
Remove-Item -Recurse -Force .git
```

**On macOS/Linux:**

```bash
rm -rf .git
```

### Step 3: Install Dependencies

Install the required npm packages:

```bash
npm install
```

This will install:

- `jsonfile` - For writing JSON data
- `moment` - For date manipulation
- `simple-git` - For Git operations
- `random` - For generating random numbers

### Step 4: Create a New GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click on the **+** icon and select **New repository**
3. Enter a repository name (e.g., `greenGraph`)
4. Add a description (optional)
5. Choose **Public** or **Private**
6. Click **Create repository**

### Step 5: Initialize Git & Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 6: Configure Git (First Time Only)

If you haven't configured Git, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## 📊 Running the Script

Execute the script to generate commits:

```bash
node index.js
```

The script will:

1. Create 100 commits with random dates throughout the past year
2. Commit data to `data.json`
3. Automatically push all commits to your GitHub repository
4. Display each commit date in the console

## 🎨 View Your Green Graph

After the script completes and all commits are pushed:

1. Go to your GitHub profile: `https://github.com/YOUR_USERNAME`
2. Look at your contribution graph
3. You'll see the green squares representing the generated commits

## 📝 Customization

To change the number of commits, edit `index.js`:

```javascript
makeCommits(100); // Change 100 to your desired number
```

## 🔧 How It Works

- **moment.js**: Generates random dates within the past year
- **random.js**: Creates random week (0-54) and day (0-6) values
- **simple-git**: Adds commits to Git with the specified dates
- **jsonfile**: Writes commit data to `data.json`

## ⚠️ Important Notes

- Ensure your Git credentials are properly configured
- The script requires push access to your GitHub repository
- Each commit is created with a backdated timestamp
- All commits are pushed automatically during execution

## 📦 Project Structure

```
├── README.md          # This file
├── package.json       # Project metadata and dependencies
├── index.js          # Main script file
└── data.json         # Commit data storage
```

## 🤝 Contributing

Feel free to fork this repository and submit pull requests with improvements.

## 📄 License

ISC License

## 🙏 Credits

Based on the [greenGraph](https://github.com/AMOHAMMEDIMRAN/greenGraph.git) project

---

**Happy Green Graphing! 🌿**
