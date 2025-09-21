import DefaultLayout from "./components/layouts/DefaultLayout";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    // <Routes>
    //   <Route element={<IndexPage />} path="/" />
    // </Routes>
    <>
      <DefaultLayout>
        <MainContent />
      </DefaultLayout>
    </>
  );
}

export default App;
