import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    height: 200px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    flex-direction: column;

    .logo {
        width: 223px;
        height: 41px;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 4rem;
    }

    .profile {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 64px;
            border-radius: 50px;
            margin-right: 2rem;
        }

        div {
            h3 {
                color: #fff;
            }
            p {
                color: #ABB1CC;
            }
        }
    }

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--orange);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        font-weight: 400;
    }
`;