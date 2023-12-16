import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"


export default function OAuth() {
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth()
            const result = await signInWithPopup(auth, provider)
        } catch (error) {
            console.log("could not login with google", error);
        }
    }

  return (
    <button type='button' onClick={handleGoogleClick} className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95">
        Continue with google
    </button>
  )
}
