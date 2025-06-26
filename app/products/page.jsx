"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  const handleSave = (product) => {
    let saved = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    );
    if (!saved.find((p) => p.id === product.id)) {
      saved.push(product);
      localStorage.setItem(
        "savedProducts",
        JSON.stringify(saved)
      );
      alert("Saved!");
    } else {
      alert("Already saved!");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Products</h1>
      <div className="card-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <Link
              href={`/products/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h2
                style={{
                  fontSize: "1.1rem",
                  margin: "0.5rem 0",
                }}
              >
                {product.title}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#444",
                }}
              >
                {product.description}
              </p>
              <div
                style={{
                  marginTop: "auto",
                  fontWeight: "bold",
                  color: "#0070f3",
                }}
              >
                ${product.price}
              </div>
            </Link>
            <button
              className="save-btn"
              onClick={() => handleSave(product)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
      <style>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .product-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          position: relative;
        }
        .product-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-color: #0070f3;
        }
        .save-btn {
          margin-top: 12px;
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 0.5rem 1.2rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .save-btn:hover {
          background: #0055a7;
        }
      `}</style>
    </div>
  );
}
