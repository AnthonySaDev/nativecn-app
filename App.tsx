import "@/styles/global.css";
import { StatusBar } from 'expo-status-bar';
import Profile from '@/app/Profile';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Profile />
    </>
  );
}

