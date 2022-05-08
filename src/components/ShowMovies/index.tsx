
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, Content } from './styles';

export interface IMovies {
    id?: number;
    ator: string;
    banner: string;
    title: string;
    classificacao?: string;
    description: string;
}

export function ShowMovie() {
    const [movies, setMovies] = useState<IMovies[]>([]);

    useEffect(() => {
        api.get('movies')
            .then(response => setMovies(response.data.movies));


    }, [])

    return (
        <Container>
            <div className='title_container'>
                <h1>Últimos filmes adicionados</h1>
            </div>
            <Content>
                {movies?.map(movie => (
                    <Link key={movie.id} className='mylink' to={`sinopse/${movie.id}`}>
                        <div className='bannerContainer'>
                            <img className='banner' src={movie.banner} alt="" />
                            <h3>{movie.title}</h3>
                            <p>Classifição por estrelas {movie?.classificacao}</p>
                        </div>
                    </Link>
                ))}

            </Content>
        </Container>
    )
}