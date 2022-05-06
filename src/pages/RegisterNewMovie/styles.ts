import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    background: yellow;
`;
    
export const Content = styled.div`
        width: 700px;
        margin: 2rem auto;
        justify-content: center;
        align-items: center;
        background: red;

    .formItem {
        width: 600px;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        
        label {
            color: var(--text);
            margin-bottom: 5px;
            color: var(--title);
        }

        input {
            width: 500px;
            height: 56px;
            border: 0;
            border-radius: 0.25rem;
            font-size: 1.175rem;
            padding: 0 1rem; 
        }
    }
`;