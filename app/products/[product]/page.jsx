export default async function ProductPage({ params }) {
  const { product } = params; // dynamic segment from the URL
  const res = await fetch(`https://dummyjson.com/products/${product}`);
  if (!res.ok) return <div>Product not found</div>;
  const productData = await res.json();

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="product-card" style={{ width: 350 }}>
        <img
          src={productData.thumbnail}
          alt={productData.title}
          width={250}
          height={150}
          style={{ objectFit: 'cover', borderRadius: '6px' }}
        />
        <h2 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>{productData.title}</h2>
        <p style={{ fontSize: '0.95rem', color: '#444' }}>{productData.description}</p>
        <div style={{ fontWeight: 'bold', color: '#0070f3', margin: '0.5rem 0' }}>${productData.price}</div>
        <p style={{ margin: 0 }}><strong>Brand:</strong> {productData.brand}</p>
        <p style={{ margin: 0 }}><strong>Category:</strong> {productData.category}</p>
      </div>
      <style>{`
        .product-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1.5rem 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }
        .product-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border-color: #0070f3;
        }
      `}</style>
    </div>
  );
}