# Tic Tac Toe Electron Application

This project is an Electron application for the classic Tic Tac Toe game. It combines web technologies with the Electron framework to create a desktop application.

## Project Structure

```
tic-tac-toe-electron
├── src
│   ├── main.ts          # Main process of the Electron application
│   ├── renderer.ts      # Renderer process managing the UI
│   ├── index.html       # Entry point for the renderer process
│   ├── styles
│   │   └── styles.css   # CSS styles for the application
│   └── assets           # Directory for additional assets
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd tic-tac-toe-electron
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage

Once the application is running, you can play Tic Tac Toe against another player. The game board will be displayed in the application window, and players can take turns to place their marks.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.