import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import TermsAndConditions from './components/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashboard'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}
