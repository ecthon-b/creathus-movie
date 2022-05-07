import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import arrowLeftImg from '../../assets/arrow-left.svg';

import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { Container } from './styles';

const imageUrl = "https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg"

export function Synopsis() {
    return (
        <Container>
            <div
                className='banner_background'
                style={{
                    background: `url(${imageUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'}}
                >
                    <nav className='banner_content'>
                        <nav>
                            <Link className="mylink" to="/">
                                <img src={arrowLeftImg} alt="" />
                            </Link>

                            <img src={logoImg} alt="Logomar da Creathus Movie" />
                        </nav>
                        <div className='title_movie'>
                            <h1>LUCA</h1>
                        </div>
                    </nav>
            </div>
                    

            <div className='sinopse_container'>
                <div className='actions'>
                    <button className='btn_play'><BsFillPlayFill />Play</button>
                    <button className='btn_more_info'><AiOutlineInfoCircle />Mais informações</button>
                </div>
                    <h3>SINOPSE & INFOR</h3>
                    <p>Maid, minissérie original da Netflix, acompanha Alex (Margaret Qualley), uma jovem mãe que consegue um emprego limpando casas para escapar de um relacionamento abusivo. Depois de sofrer diversas violências nas mãos do ex-namorado, Sean (Nick Robinson), ela decide fugir com a filha para qualquer outro lugar na expectativa de construir um futuro melhor para as duas. Além de tudo, ela ainda precisa lifar com a mãe (Andie McDowell) que sofre de distúrbio bipolar e está desaparecida. No caminho, ela é acolhida em um abrigo para jovens vítimas de abuso e começa a trabalhar como empregada doméstica para guardar dinheiro e tentar encontrar um lugar para morar com a filhar.</p>
            </div>
        </Container>
    )
}
