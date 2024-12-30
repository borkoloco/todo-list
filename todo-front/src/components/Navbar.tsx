"use client";

import { NavbarContainer, Title, Button } from "./styles";
import { useAuth0 } from "@auth0/auth0-react";

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
