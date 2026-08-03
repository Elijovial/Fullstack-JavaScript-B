import { Bags } from "./components/cards/pages/bags";

const App = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:w-full lg:h-full lg:min-h-screen lg:bg-gray-100">
        <Bags />
      </div>
    </>
  );
};

export default App;
