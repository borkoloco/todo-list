import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #f4f6f9;
  min-height: 100vh;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

export const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
`;

export const NavbarContainer = styled.nav`
  background-color: #4a90e2;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
`;

export const Button = styled.button`
  background-color: ${(props) => props.color || "#61dafb"};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0.5rem 0;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TodoText = styled.span`
  flex: 1;
  margin-right: 1rem;
  font-size: 1rem;
`;

export const TodoInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #666;
`;
