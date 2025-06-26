"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function BuyPage() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    // No real API for localStorage, so just use localStorage directly
    const items = JSON.parse(
      localStorage.getItem("savedProducts") || "[]"
    );
    setSaved(items);
  }, []);

  const handleDelete = (id) => {
    const updated = saved.filter(
      (product) => product.id !== id
    );
    setSaved(updated);
    localStorage.setItem(
      "savedProducts",
      JSON.stringify(updated)
    );
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Saved Products</h1>
      {saved.length === 0 ? (
        <p>No products saved.</p>
      ) : (
        <div className="card-grid">
          {saved.map((product) => (
            <div
              className="product-card"
              key={product.id}
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
              <div
                style={{
                  fontWeight: "bold",
                  color: "#0070f3",
                }}
              >
                ${product.price}
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
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
        .delete-btn {
          margin-top: 12px;
          background: #e00;
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 0.2rem 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .delete-btn:hover {
          background: #a00;
        }
      `}</style>
    </div>
  );
}
