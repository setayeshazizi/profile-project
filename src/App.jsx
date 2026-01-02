
import './App.css'
import avatarImage from './assets/aavatar.png'
import ProfilePage from './components/ProfilePage'

function App() {
  const user ={
    name: "razma azizi",
    username: "@razmazizi",
    avatarImage: avatarImage,
    xp: 80,
    lastActive: "Dec 29 2025",
    streakDays: 2,
    longestStreak: 5,
    recentBadgesText: "No badges earned yet.",

    personalInfo: {
      Email:'setayeshazizi124@gmail.com',
      Gender: 'fmail',
      Country: 'Afghanistan',
      "Province or State": 'Herat',
      "Teaching Expreiance": "3",
      "Date of Birth": "22/7/2007",
      "Online Portfolio Link": "N/A",
      "Linkedin Link": "Open the  Link",
      Languages: "Farsi, English",
      Bio: "God's plan",
    },
    accountDetails:{
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    }
  }

  return(
    <div className='page'>
      <ProfilePage user={user}></ProfilePage>

    </div>
  )
}

export default App
