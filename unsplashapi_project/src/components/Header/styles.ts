import styled from "styled-components"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 500px;
    background-color: ${(props) => props.theme["gray-300"]};
    position: relative;

    form {
        width: 480px;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

        input {
            width: 100%;
            font-size: 1.2rem;
            padding: 0.8em 1.4em;
            border-radius: 50px 0 0 50px;
            border: 0;
            outline: 0;

            &::placeholder {
                color: ${(props) => props.theme["gray-300"]};
                font-weight: 500;
            }
        }

        button {
            border-radius: 0 50px 50px 0;
            border: 0;
            outline: 0;
            padding: 0 1em;
        }
    }

    @media (max-width: 524px) {
        form {
            width: 328px;
        }

        input {
            font-size: 1rem;
            padding: 0.6em 1.4em;
        }
    }
`
