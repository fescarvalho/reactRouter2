import { useSearchParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import styles from './Home.module.css';
const Search = () => {
  const [searchParams] = useSearchParams();

  const url = 'http://localhost:3000/products?' + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Disponíveis</h1>
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
  );
};

export default Search;
