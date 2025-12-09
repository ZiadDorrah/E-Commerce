import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../store/products/productsSlice";
import ProdCard from "../components/ProdCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products = [], isLoading } = useSelector((state) => state.products);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const ITEMS_PER_PAGE = 12;

  // Fetch all products once
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  // 👉 FILTER PRODUCTS ON FRONT ONLY
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? p.category_id == category : true;
    return matchesSearch && matchesCategory;
  });

  // 👉 PAGINATION (FRONT ONLY)
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filteredProducts.slice(start, start + ITEMS_PER_PAGE);

  // Reset page on filter change
  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">All Products</h1>

      {/* FILTERS UI */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.categorySelect}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="1">Cameras</option>
          <option value="2">Laptops</option>
          <option value="3">Phones</option>
        </select>
      </div>

      {/* GRID */}
      <div className={styles.productsGrid}>
        {isLoading ? (
          <p>Loading...</p>
        ) : paginated.length > 0 ? (
          paginated.map((p) => <ProdCard key={p.id} product={p} />)
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* PAGINATION */}
      {!isLoading && (
        <div className={styles.pagination}>
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Prev
          </button>

          <span className={styles.currentPage}>
            {page} / {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
