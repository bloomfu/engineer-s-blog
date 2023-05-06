import Layout from "../atoms/NameImage/Layout";
import Profile from "../atoms/Profile/Profile";
import Header from "../organisms/Header";

function index({ children }) {
  return (
    <>
      <Header>
        <section>
          <h2 className="text-2xl font-bold text-center my-4">
            🍞engineer's Blog
          </h2>
          {children}
        </section>
      </Header>
    </>
  );
}

export default index;
