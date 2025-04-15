# fetaMusic

A modern music discovery application built with React and Vite that leverages the Spotify API to search for and play music previews.

## 📋 Features

- **Music Search**: Search for tracks using keywords
- **Track Information**: View track details including artists and release dates
- **Audio Previews**: Play 30-second song previews directly in the browser
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Technologies

- **React**: Frontend UI library
- **Vite**: Build tool and development server
- **Bootstrap**: Responsive styling framework
- **Spotify API**: Music data source (via nocodeapi.com)

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fetaMusic.git
   cd fetaMusic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Create a .env file in the project root:
   ```
   VITE_SPOTIFY_API_KEY="https://v1.nocodeapi.com/yourusername/spotify/yourkey/search?q=keyword&type=track"
   ```
   
   You'll need to:
   - Sign up at [nocodeapi.com](https://nocodeapi.com)
   - Connect your Spotify account
   - Get your API endpoint URL

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🎮 How to Use

1. Enter a keyword in the search box at the top
2. Click the "Search" button
3. Browse through the results
4. Click the audio player to listen to a preview of any track

## 📷 Screenshots

*[Add screenshots of your application here]*

## 🛠️ Project Structure

```
fetaMusic/
├── src/
│   ├── App.jsx       # Main application component
│   ├── App.css       # Application styles
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── public/           # Static assets
├── .env              # Environment variables (not committed)
└── index.html        # HTML template
```

## 📝 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🔮 Future Enhancements

- User authentication
- Create and save playlists
- Full track playback (requires Spotify Premium)
- Advanced search filters
- Related artist suggestions

---

*Note: This project uses the Spotify API but is not affiliated with or endorsed by Spotify.*

Similar code found with 2 license types