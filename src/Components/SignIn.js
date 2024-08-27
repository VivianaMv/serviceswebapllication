// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { auth } from "../firebase";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { ref, get } from 'firebase/database';
// // import { database } from '../firebase';
// import './Style.css';
// // import Header from "./Header";

// const SignIn = ({ setUserEmail }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const [error, setError] = useState(null);

//     const handleSignin = async (e) => {
//         e.preventDefault();

//         const bannedUserRef = ref(database, 'bannedUsers/' + email.replace('.', '_'));
//         const bannedUserSnapshot = await get(bannedUserRef);

//         if (bannedUserSnapshot.exists()) {
//             setError("This email is banned.");
//             return;
//         }

//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             setUserEmail(userCredential.user.email);

//             if (email === "admin@gmail.com") {
//                 navigate('/homeadmin', { state: { email: userCredential.user.email } });
//             } else {
//                 navigate('/homeuser', { state: { email: userCredential.user.email } });
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleReset = () => {
//         navigate('/reset');

//     }


//     return (
//         <div className="container">
//             <Header email={email} />
//             <div className="form-container">
//                 <h1>Sign In</h1>
//                 <form onSubmit={handleSignin}>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         required
//                     />
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         required
//                     />

//                     <p onClick={handleReset} className="link-btn">Forgot password?</p>

//                     <button type="submit">Login</button>
//                 </form>
//                 {error && <p className="error">{error}</p>}
//                 <p onClick={() => navigate("/signup")} className="link-btn">You don't have an account? Sign up here</p>
//             </div>
//         </div>
//     );
// };

// export default SignIn;
