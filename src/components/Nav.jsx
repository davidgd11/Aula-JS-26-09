import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Nav.module.css'

function Nav() {
  return (
    <>
      <header className={styles.nav}>
        <h2 className={styles.h2}>Projeto</h2>
        <nav>
          <ul className={styles.ul}>

            <li >
              <Link to="/" className={styles.li}>Home</Link>
            </li>

            <li>
              <Link to="/produtos"  className={styles.li}>Produtos</Link>
            </li>

            <li>
              <Link to="conteudo"  className={styles.li}>Conteudo</Link>
            </li>

            <li>
              <Link to="/cadastrar/produto"  className={styles.li}>Cadastrar Produto</Link>
            </li>

            <li>
                <Link to="/login"  className={styles.li} >LOGIN</Link>
            </li> 

          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
