import { Container, Content } from './styles';

export function RegisterNewMovie() {
    return (
        <>
            <Container>
                <Content>
                    <div className="formItem">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" id="autor" name="autor"/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="autor">Título</label>
                        <input type="text" id="title" name="title"/>
                    </div>
                    <div className="formItem">
                        <label htmlFor="description">Descrição</label>
                        <input type="text" id="description" name="description"/>
                    </div>
                </Content>
            </Container>
        </>
    )
        
}