import { useAuth } from "src/contexts/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <>
      <h1>{`Login Status: ${user ? "Signed In" : "Signed Out"}`}</h1>
    </>
  );
};

export default Header;
