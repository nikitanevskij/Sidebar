import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/shared/layout";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<>products-1</>} />
        <Route path="products-2" element={<>products-2</>} />
        <Route path="products-3" element={<>products-3</>} />
        <Route path="products-4" element={<>products-4</>} />

        <Route path="orders" element={<>orders</>} />

        <Route path="customers" element={<>customers-1</>} />
        <Route path="customers-2" element={<>customers-2</>} />
        <Route path="customers-3" element={<>customers-3</>} />
        <Route path="customers-4" element={<>customers-4</>} />
      </Route>
    </Routes>
  );
}

export default App;
