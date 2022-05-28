import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/products/${id}`;
  const { data: product, httpConfig, loading, error } = useFetch(url);

  return (
    <>
      {error && <p>Ocorreu algum erro</p>}
      {loading && <p>Carregando....</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informarções</Link>
        </div>
      )}
    </>
  );
};

export default Product;
