
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Content } from './styles';

interface IMovies {
    banner: string;
    title: string;
    classificacao: string;
}

export function ShowMovie() {
    const [ allmovies, setMovies ] = useState<IMovies[]>([]);

    useEffect(() => {
        api.get('movies')
        .then(response => setMovies(response.data));
        
    }, [])

    return (
        <Container>
            <div className='title_container'>
                <h1>Últimos filmes adicionados</h1>
            </div>
            <Content>
                {allmovies.map(movie => (
                    <Link key={movie.title} className='mylink' to="sinopse">
                        <div className='bannerContainer'>
                            <img className='banner' src={movie.banner} alt="" />
                            <h3>{movie.title}</h3>
                            <p>Classifição por estrelas {movie.classificacao}</p>
                        </div>
                    </Link>
                ))}
                
            </Content> 
        </Container>
    )
}