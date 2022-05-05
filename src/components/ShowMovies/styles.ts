import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 40px 32px;
    flex-wrap: wrap;
    max-width: 1120px;
    /* background: red; */
    margin: 2rem auto;

    .bannerContainer {
        width: 256px;
        height: 350px;
        background: #fff;
        border-radius: 0.25rem;
        padding: 10px;

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