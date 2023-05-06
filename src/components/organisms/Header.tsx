import Layout from "../atoms/NameImage/Layout";
import Profile from "../atoms/Profile/Profile";

function Header({ children }) {
  return (
    <>
      <Layout home />
      <main className="container mx-auto">
        <Profile />
        {children}
      </main>
    </>
  );
}

export default Header;
