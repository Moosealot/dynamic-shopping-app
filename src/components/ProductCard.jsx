function ProductCard({ product, addToCart }) {
  return (
    <div>
      <span>{product.name}</span>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;