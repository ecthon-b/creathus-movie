import styled from 'styled-components';

export const Container = styled.div`
    

header {
        background: var(--blue);
        height: 200px;
        align-items: center;
        margin: 0 auto;display: flex;
        margin-bottom: 3.075rem;

        nav {
            display: flex;
            width: 1120px;
            height: 100px;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            margin-top: -100px;
            
            .mylink {
                text-decoration: none;
                color: #fff;
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 736px;
    margin: 0 auto;
    flex-direction: column;
    background: #FFF;
    border-radius: 0.5rem;
    margin-bottom: 4rem;
    margin-top: -110px;


    p {
        font-size: 24px;
        font-weight: 600;
        color: var(--title);
        margin-top: 4rem;
        margin-bottom: 2rem;
        font-family: 'Archivo', sans-serif;
    }

    .divider {
        width: 608px;
        height: 1px;
        background: var(--border);
        margin-bottom: 1.5rem;
    }

    .formItem {
        width: 608px;
        display: flex;
        border-radius: 0.5rem;
        flex-direction: column;
        margin-bottom: 20px;
        
        label {
            color: var(--text-label);
            margin-bottom: 8px;
            font-size: 0.875rem;
        }

        input {
            width: 608px;
            height: 56px;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            padding: 0 1rem; 
            background: var(--shape);
            color: var(--text);
            font-size: 1rem;

            &:focus {
                border: 1px solid var(--blue);
                outline: none;
            }
        }

        textarea {
            height: 100px;
            padding: 1rem;
            color: var(--text);
            font-size: 1rem;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            background: var(--shape);

            &:focus {
                border: 1px solid var(--blue);
                outline: none;
            }
        }

    }
    
    .save_form {
        width: 100%;
        height: 136px;
        display: flex;
        background: var(--shape);
        align-items: center;
        justify-content: space-between;
        border-radius: 0 0 0.5rem 0.5rem;

        .save_form_content {
            display: flex;
            justify-content: space-between;
            width: 608px;
            margin: 0 auto;


            div {
                display: flex;
                justify-items: center;
                align-items: center;
                justify-content: center;

                img {
                    margin-right: 1rem;
                }

                span {
                    font-family: 'Poppins', sans-serif;
                    color: var(--label);
                    font-size: 0.75rem;
                    font-weight: 400;
                }
            }

            

        }
    }

    
`;

export const ButtonCTA = styled.button`
    width: 197px;
    height: 56px;
    background: ${props => props.disabled ? "#c3c3c3" : "#04D361"};
    font-family: 'Archivo', sans-serif;
    font-weight: 600;
    color: #FFF;
    border-radius: 0.5rem;
    border: 0;
    transition: 0.2s;

    &:hover {
        background: ${props => props.disabled ? "#c3c3c3" : "#03C564"};
    }
`;
