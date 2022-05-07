
import { Container, Content } from './styles';

export function ShowMovie() {
    return (
        <Container>
            <div className='title_container'>
                <h1>Últimos filmes adicionados</h1>
            </div>
            <Content>
                <div className='bannerContainer'>
                    <img className='banner' src="https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg" alt="" />
                    <h3>Nome do Filme</h3>
                    <div>Classifição por estrelas</div>
                </div>
                <div className='bannerContainer'>
                    <img className='banner' src="https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg" alt="" />
                    <h3>Nome do Filme</h3>
                    <div>Classifição por estrelas</div>
                </div>
                <div className='bannerContainer'>
                    <img className='banner' src="https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg" alt="" />
                    <h3>Nome do Filme</h3>
                    <div>Classifição por estrelas</div>
                </div>
                <div className='bannerContainer'>
                    <img className='banner' src="https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg" alt="" />
                    <h3>Nome do Filme</h3>
                    <div>Classifição por estrelas</div>
                </div>
                <div className='bannerContainer'>
                    <img className='banner' src="https://labdicasjornalismo.com/images/noticias/8092/28062021133620_e246crnvka.jpg" alt="" />
                    <h3>Nome do Filme</h3>
                    <div>Classifição por estrelas</div>
                </div>
            </Content> 
        </Container>
    )
}