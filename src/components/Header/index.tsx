import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img className='logo' src={logoImg} alt="" />
                <div className='navbar'>
                    
                    <div className='profile'>
                        <img src="https://github.com/ecthon.png" alt="" />
                        <div>
                            <h3>Olá, Ecthon!</h3>
                            <p>O que vamos assistir hoje?</p>
                        </div>
                    </div>
                    
                    <button>NOVO FILME</button>
                </div>
            </Content>
        </Container>
    )
}