import {} from 'react'
import imagem1 from '../assets/img1.jpg'
import styles from '../css/Home.module.css'

function Home (){
  return(
    <section>
      <img src={imagem1} title="Imagem" className={styles.img}/>
    </section>
  )
}
export default Home