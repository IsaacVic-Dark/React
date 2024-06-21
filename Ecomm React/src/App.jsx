import { useState } from "react";
import FilterComponent from "./Components/filterComponent";
import ProductListComponent from "./Components/productListComponent";
import {products} from "../src/utils/data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });
  return (
    <>
      <FilterComponent
        searchTerm={searchTerm}
        onSearchTermChange={handleSearchTermChange}
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <ProductListComponent products={filteredProducts} />
    </>
  );
}

export default App;
