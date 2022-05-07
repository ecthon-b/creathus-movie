import { Container, Content } from './styles';

import alertImg from '../../assets/atencao.svg';
import logoImg from '../../assets/logo.svg';
import arrowLeftImg from '../../assets/arrow-left.svg';
import { Link } from 'react-router-dom';


export function RegisterNewMovie() {
    return (
        <>
            <Container>
                <header>
                    <nav>
                        <Link className="mylink" to="/">
                            <img src={arrowLeftImg} alt="" />
                        </Link>

                        <img src={logoImg} alt="Logomar da Creathus Movie" />
                    </nav>
                </header>
                <Content>
                    <p>Insira os dados do filme</p>
                    <div className="divider"></div>
                    <form className="formItem">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" id="autor" name="autor"/>
                    </form>
                    <form className="formItem">
                        <label htmlFor="autor">Título</label>
                        <input type="text" id="title" name="title"/>
                    </form>
                    <form className="formItem">
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" name="description"/>
                    </form>

                    <div className="save_form">
                        <div className='save_form_content'>
                            <div>
                                <img src={alertImg} alt="" />
                                <span>Importante!<br/>
                                    Preencha todos os dados
                                </span>
                            </div>
                            <button>Salvar cadastro</button>
                        </div>
                    </div>
                </Content>
            </Container>
        </>
    )
        
}