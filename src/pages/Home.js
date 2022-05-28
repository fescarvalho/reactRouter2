import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import styles from './Home.module.css';

const Home = () => {
  const url = 'http://localhost:3000/products';
  const { data: items, httpConfig, loading, error } = useFetch(url);

  return (
    <>
      <h1 className={styles.titulo}>Produtos</h1>
      <div className={styles.container}>
        {error && <p>Não foi possivel carregar os produtos</p>}
        {items && (
          <ul className={styles.listaContainer}>
            {items.map((item) => (
              <li className={styles.listaItem} key={item.id}>
                <h2>{item.name}</h2>
                <p>Preço: R$ {item.price}</p>
                <Link className={styles.details} to={`/products/${item.id}`}>
                  Detalhes
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Home;
