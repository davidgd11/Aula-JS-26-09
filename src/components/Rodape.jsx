import {} from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import styles from '../css/Rodape.module.css'

function Ropade (){
  return(
    <section className={styles.rodape}>
    <h3>©2023-todos os direitos reservados</h3>

    <div >
      <FaInstagram className={styles.icons}/>
      <FaFacebook className={styles.icons}/>
      <FaGithub className={styles.icons}/>
    </div>

    </section>
  )
}
export default Ropade