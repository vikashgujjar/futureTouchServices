import React from 'react'
import SignIn from './SignIn'

export const metadata = {
  title: "Sign In | Future IT Touch - Secure Access to Your Account",
  description: "Sign in to your Future IT Touch account to access personalized IT solutions and manage your services securely.",
  keywords: ["Sign In", "Login", "Account", "Future IT Touch", "IT Solutions"],
};

export default function page() {
  return (
    <div>
      <SignIn/>
    </div>
  )
}
