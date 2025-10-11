import React, { useState } from 'react';
import styles from './Products.module.css';
import Card from './../components/Card';
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaSearch } from "react-icons/fa";
import DetailsProducts from './../components/Dashboard/Products/DetailsProducts';

const Products = () => {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    const [products] = useState([
        { id: "ORD-1001", customer: "John Doe", category: "Electronics", product: "Wireless Headphones", price: "$120.00", status: "Delivered" },
        { id: "ORD-1002", customer: "Emily Carter", category: "Fashion", product: "Running Shoes", price: "$75.00", status: "Pending" },
        { id: "ORD-1003", customer: "Michael Brown", category: "Home & Kitchen", product: "Coffee Maker", price: "$89.00", status: "Delivered" },
        { id: "ORD-1004", customer: "Sarah Lee", category: "Furniture", product: "Office Chair", price: "$250.00", status: "Canceled" },
        { id: "ORD-1005", customer: "James Wilson", category: "Electronics", product: "Smart Watch", price: "$199.00", status: "Shipped" },
        { id: "ORD-1006", customer: "Olivia Johnson", category: "Beauty", product: "Perfume Set", price: "$60.00", status: "Delivered" },
        { id: "ORD-1007", customer: "Daniel White", category: "Gaming", product: "Mechanical Keyboard", price: "$130.00", status: "Pending" },
        { id: "ORD-1008", customer: "Sophia Martinez", category: "Fashion", product: "Leather Jacket", price: "$180.00", status: "Delivered" },
        { id: "ORD-1009", customer: "Liam Davis", category: "Electronics", product: "Bluetooth Speaker", price: "$95.00", status: "Shipped" },
        { id: "ORD-1010", customer: "Ava Thompson", category: "Home Decor", product: "Wall Clock", price: "$45.00", status: "Delivered" },
        { id: "ORD-1011", customer: "Noah Harris", category: "Sports", product: "Yoga Mat", price: "$35.00", status: "Delivered" },
        { id: "ORD-1012", customer: "Isabella Clark", category: "Office", product: "Desk Organizer", price: "$40.00", status: "Pending" },
        { id: "ORD-1013", customer: "Ethan Lewis", category: "Electronics", product: "Gaming Mouse", price: "$49.00", status: "Delivered" },
        { id: "ORD-1014", customer: "Mia Robinson", category: "Fashion", product: "Handbag", price: "$95.00", status: "Shipped" },
        { id: "ORD-1015", customer: "Lucas Walker", category: "Home & Kitchen", product: "Blender", price: "$70.00", status: "Delivered" },
        { id: "ORD-1016", customer: "Charlotte Hall", category: "Beauty", product: "Hair Dryer", price: "$55.00", status: "Canceled" },
        { id: "ORD-1017", customer: "Benjamin Allen", category: "Office", product: "Laptop Stand", price: "$85.00", status: "Delivered" },
        { id: "ORD-1018", customer: "Harper Young", category: "Gaming", product: "Console Controller", price: "$65.00", status: "Pending" },
        { id: "ORD-1019", customer: "Amelia King", category: "Home Decor", product: "Table Lamp", price: "$50.00", status: "Delivered" },
        { id: "ORD-1020", customer: "Elijah Scott", category: "Electronics", product: "Portable Charger", price: "$60.00", status: "Shipped" },
        { id: "ORD-1021", customer: "Grace Green", category: "Fashion", product: "Sunglasses", price: "$55.00", status: "Delivered" },
        { id: "ORD-1022", customer: "William Adams", category: "Office", product: "Notebook Set", price: "$25.00", status: "Pending" },
        { id: "ORD-1023", customer: "Abigail Nelson", category: "Sports", product: "Water Bottle", price: "$20.00", status: "Delivered" },
        { id: "ORD-1024", customer: "Henry Baker", category: "Home & Kitchen", product: "Knife Set", price: "$80.00", status: "Delivered" },
        { id: "ORD-1025", customer: "Ella Perez", category: "Furniture", product: "Bookshelf", price: "$210.00", status: "Shipped" },
    ]);

    const categories = ['All', ...new Set(products.map(p => p.category))];
    const statuses = ['All', 'Delivered', 'Pending', 'Shipped', 'Canceled'];

    // ✅ FILTERED PRODUCTS
    const filteredProducts = products.filter(p => {
        const matchesSearch =
            p.customer.toLowerCase().includes(search.toLowerCase()) ||
            p.product.toLowerCase().includes(search.toLowerCase()) ||
            p.id.toLowerCase().includes(search.toLowerCase());

        const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
        const matchesStatus = statusFilter === "All" || p.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className={styles.productsSec}>
            <h1>Products Management</h1>
            <p>Manage your product inventory and stock levels</p>
            <DetailsProducts />
            {/* Search Filters */}
            <div className={styles.searchBar}>
                <div className={styles.searchInputWrapper}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search products, customer, or ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className={styles.filterSelect}
                >
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={styles.filterSelect}
                >
                    {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Category</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.customer}</td>
                                <td>{item.category}</td>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                                <td>
                                    <span className={`${styles.status} ${styles[`status-${item.status.toLowerCase()}`]}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredProducts.length === 0 && (
                    <p className={styles.noResults}>No products found.</p>
                )}

                <div className={styles.pagination}>
                    <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className={styles.pageButton}>
                        <FaAngleDoubleLeft />
                    </button>
                    <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className={styles.pageButton}>
                        <FaAngleDoubleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;
