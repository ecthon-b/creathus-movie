import { Link, useParams } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

import { Container } from './styles';
import { useEffect, useState } from 'react';
import { IMovies } from '../../components/ShowMovies';
import { api } from '../../services/api';

import arrowLegt from '../../assets/arrow-left.svg'
import tumbImg from '../../assets/sinopse.png'

export function Synopsis() {
    const [movie, setMovie] = useState<IMovies>();
    let params = useParams();
    console.log(params)

    useEffect(() => {
        api.get(`movies/${params.id}`)
            .then(response => setMovie(response.data));
    }, [])

    return (
        <Container>
            <div
                className='banner_background'
                style={{
                    backgroundImage: `url(${movie?.banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <nav className='banner_content'>
                    <nav>
                        <Link className="mylink" to="/">
                            <img src={arrowLegt} alt="" />
                        </Link>

                        <img src={logoImg} alt="Logomar da Creathus Movie" />
                    </nav>
                    <div className='title_movie'>
                        <h1>{movie?.title}</h1>
                    </div>
                </nav>
            </div>


            <div className='sinopse_container'>
                <div className='actions'>
                    <button className='btn_play'><BsFillPlayFill />Play</button>
                    <button className='btn_more_info'><AiOutlineInfoCircle />Mais informações</button>
                </div>
                <h3>SINOPSE & INFOR</h3>
                <p>{movie?.description}</p>
            </div>
        </Container>
    )
}
