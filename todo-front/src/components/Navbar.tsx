"use client";

import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarContainer = styled.nav`
  background-color: #282c34;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #21a1f1;
  }
`;

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <NavbarContainer>
      <Title>My To-Do List</Title>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      ) : (
        <div>
          <p>Welcome, {user?.name}</p>
          <Button
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }
          >
            Logout
          </Button>
        </div>
      )}
    </NavbarContainer>
  );
}

// "use client";

// import { useAuth0 } from "@auth0/auth0-react";

// export default function Navbar() {
//   const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

//   return (
//     <nav>
//       <h1>My To-Do List</h1>
//       {!isAuthenticated ? (
//         <button onClick={() => loginWithRedirect()}>Login</button>
//       ) : (
//         <div>
//           <p>Welcome, {user?.name}</p>
//           <button
//             onClick={() =>
//               logout({
//                 logoutParams: { returnTo: window.location.origin },
//               })
//             }
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
