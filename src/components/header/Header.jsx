import logoHeader from '../../assets/logoheader.png'
import s from './Header.module.scss'
export default function Header(){

return(
   <header className={s.header}>
     <img src={logoHeader} alt="um desenho de champanhe com feliz 2025 escrito ao lado" />
     <nav>
         <ul>
            <li><a href="">Paz</a></li>
            <li><a href="">Saúde</a></li>
            <li><a href="">Alegria</a></li>
         </ul>
     </nav>
   </header>
)

}