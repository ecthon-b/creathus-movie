import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;

    .title_container {
        width: 1120px;
        margin: 32px auto;
        
        h1 {
            color: var(--text);
        }
    }
`;

export const Content = styled.div`
    justify-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 40px 32px;
    flex-wrap: wrap;
    max-width: 1120px;
    margin: 2rem auto;

    .mylink {
        text-decoration: none;
    }

    .bannerContainer {
        width: 256px;
        height: 350px;
        background: #fff;
        border-radius: 0.25rem;
        padding: 10px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.41);
            -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.41);
            -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.41);
            margin-top: -2px;
        }

        .banner {
            width: 236px;
            height: 265px;
            border-radius: 0.25rem;
        }

        h3 {
            color: #c3c3c3;
            font-weight: bold;
            color: var(--title);
        }
    }
`;