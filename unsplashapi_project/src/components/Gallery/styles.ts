import styled from "styled-components"

export const GalleryContainer = styled.div`
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-width: 33%;
    -webkit-column-width: 33%;
    -moz-column-width: 33%;
    margin-top: 8em;
    padding: 0 1em;

    @media (max-width: 768px) {
        column-count: 2;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-width: 33%;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
    }

    @media (max-width: 448px) {
        column-count: 1;
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-width: 33%;
        -webkit-column-width: 33%;
        -moz-column-width: 33%;
    }
`

export const Img = styled.img`
    image-fit: cover;
    opacity: 0.8;
    margin-bottom: 1em;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 1;
        transform: scale(1.02);
    }
`
