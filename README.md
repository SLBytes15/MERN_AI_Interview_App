# 🤖 MERN AI Interview App

An intelligent AI-powered interview preparation platform built with the MERN stack (MongoDB, Express, React, Node.js). This application helps users practice and prepare for technical interviews with AI-driven feedback and real-time analysis.

## ✨ Features

- **AI-Powered Interviews**: Get realistic interview questions and AI-generated feedback
- **Dashboard**: View your interview history and performance metrics
- **Admin Panel**: Manage interview questions and user data
- **Sidebar Navigation**: Easy navigation between different sections
- **Interview History**: Track all your past interviews and progress
- **Real-time Feedback**: Instant AI analysis of your interview responses
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 18+** - UI library
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling for components
- **Modern JavaScript (ES6+)** - Latest JavaScript features

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **AI Integration** - AI-powered interview generation and feedback

## 📁 Project Structure

```
mern_ai/
├── src/
│   ├── component/
│   │   ├── Admin/          # Admin dashboard components
│   │   ├── Dashboard/      # Main dashboard
│   │   ├── History/        # Interview history view
│   │   └── SideBar/        # Navigation sidebar
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── assets/             # Static assets
├── public/                 # Static files
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SLBytes15/MERN_AI_Interview_App.git
   cd mern_ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_API_URL=http://localhost:5000
   VITE_AI_API_KEY=your_ai_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📖 Usage

### Access the Application
- Open your browser and navigate to `http://localhost:5173`
- Use the sidebar to navigate between different sections
- Start a new interview from the Dashboard
- View your performance history in the History section
- Admin users can manage questions in the Admin panel

## 🔗 Key Components

- **Dashboard**: Main hub for starting interviews and viewing stats
- **Admin**: Manage interview questions and system configuration
- **History**: View all past interviews and detailed feedback
- **SideBar**: Quick navigation between all app sections

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

**SLBytes15** - [GitHub Profile](https://github.com/SLBytes15)

## 📞 Support

For support, please open an issue on the GitHub repository or contact the maintainer.

---

**Happy Interview Prep! 🎯**
