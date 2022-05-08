import { Container, Content } from './styles';

import alertImg from '../../assets/atencao.svg';
import logoImg from '../../assets/logo.svg';
import arrowLeftImg from '../../assets/arrow-left.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { api } from '../../services/api';
import { IMovies } from '../../components/ShowMovies';


export function RegisterNewMovie() {
    const [ator, setAtor] = useState("");
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState("");
    const [description, setDescription] = useState("");

    const [validSubmit, setValidSubmit] = useState(false);

    const navigate = useNavigate();

    function isFormValid() {
        if (ator !== "" && title !== "" && banner !== "" && description !== "") {
            setValidSubmit(true)
            console.log("chegamos")
            return
        }

        setValidSubmit(false);
    }

    const submitForm = async () => {
        // e.preventDefault();
        const body: IMovies = {
            ator,
            title,
            banner,
            description,

        }
        const data = await api.post('movies', body)

        if (data.status == 400) {
            return alert("Esse filme já existe")
        }
        navigate("/")
    }

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
                        <input onBlur={() => isFormValid()} onChange={(value) => setAtor(value.target.value)} type="text" id="autor" name="autor" />
                    </form>
                    <form className="formItem">
                        <label htmlFor="autor">Título</label>
                        <input onBlur={() => isFormValid()} onChange={(value) => setTitle(value.target.value)} type="text" id="title" name="title" />
                    </form>
                    <form className="formItem">
                        <label htmlFor="banner">URL da Imagem (https://)</label>
                        <input onBlur={() => isFormValid()} onChange={(value) => setBanner(value.target.value)} type="text" id="banner" name="banner" />
                    </form>
                    <form className="formItem">
                        <label htmlFor="description">Descrição</label>
                        <textarea onBlur={() => isFormValid()} onChange={(value) => setDescription(value.target.value)} id="description" name="description" />
                    </form>

                    <div className="save_form">
                        <div className='save_form_content'>
                            <div>
                                <img src={alertImg} alt="" />
                                <span>Importante!<br />
                                    Preencha todos os dados
                                </span>
                            </div>
                            <button onClick={submitForm} disabled={!validSubmit}>Salvar cadastro</button>
                        </div>
                    </div>
                </Content>
            </Container>
        </>
    )

}