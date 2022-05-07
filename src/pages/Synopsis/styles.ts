import styled from 'styled-components';

export const Container = styled.div`
    width: 1120px;
    margin: 1rem auto 4rem;

    .banner_background {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 500px;
        border-radius: 1rem 1rem 0 0;

        .banner_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: rgba(0,0,0,0.5);
        border-radius: 1rem 1rem 0 0;
    }

        nav, .title_movie {
            display: flex;
            width: 1000px;
            height: 100px;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;

            .mylink {
                text-decoration: none;
                color: #fff;
            }
        }

        .title_movie {
            margin-bottom: 40px;
        }

        h1 {
            color: #fff;
            font-family: 'Archivo', sans-serif;
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 0;
        }
    }

    .actions {
        width: 1000px;
        display: flex;
        margin: 0 auto;
        margin-bottom: 40px;

        .btn_play {
            display: flex;
            align-items: center;
            background: #fff;
            font-size: 1rem;
            font-weight: 500;
            color: var(--blue);
            padding: 16px 32px;
            border-radius: 0.5rem;
            border: 0;
            margin-right: 1rem;
            transition: 0.3s;
            
            &:hover {
                background-color: rgba(255,255,255,0.9);
            }

            svg {
                width: 32px;
                height: 32px;
                margin-right: 8px;
            }

        }

        .btn_more_info {
            display: flex;
            align-items: center;
            background-color: rgba(255,255,255,0.7);
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            padding: 16px 32px;
            border-radius: 0.5rem;
            border: 0;
            transition: 0.3s;

            &:hover {
                background-color: rgba(255,255,255,0.2);
            }
            
            svg {
                width: 32px;
                height: 32px;
                margin-right: 8px;
            }
        }
    }

    .sinopse_container {
        width: 100%;
        background-color: #263470;
        padding: 4rem;
        border-radius: 0 0 1rem 1rem;


        h3 {
            color: #fff;
            margin-bottom: 2rem;
        }

        p {
            color: #c0c0c0;
            margin-bottom: 3rem;
        }
    }
`;