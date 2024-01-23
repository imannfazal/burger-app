import BurgerBuilder from "./containers/BugerBuilder/BurgerBuilder"
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
