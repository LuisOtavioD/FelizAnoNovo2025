import logoFacebook from '../../assets/logoFacebook.png'
import logoInstagram from '../../assets/logoInstagram.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import s from './Footer.module.scss'


export default function Footer(){

    return(
       
       <footer>

<section className={s.ContainerLogosRedesSociais}>
        <img src={logoLinkedin} alt="" />
        <img src={logoFacebook} alt="" />
        <img src={logoInstagram} alt="" />
      </section>
       
       </footer>
        
    )
    
    }