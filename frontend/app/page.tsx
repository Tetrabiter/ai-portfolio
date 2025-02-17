import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Landing</p>
      <Link href="/sign-up">Sign-Up</Link>
      <Link href="/sign-in">Sign-In</Link>
      <Link href="/chat-bot">Get Started</Link>
    </div>
  );
}
