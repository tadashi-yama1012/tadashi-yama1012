import {css} from '@emotion/core';

const global = css`
    body {
        background-color: seashell;
        font-family: 'Noto Serif JP', serif;
    }
`;
const conteiner = css`
    @media screen and (max-width: 896px) {
        width: 780px;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
    width: 1024px;
    margin: 22px auto;
`;
const header = css`
    text-align: center;
`;
const headerImage = css`
    margin: 33px;
    border-radius: 300px;
    width: 220px;
`;
const headerTitle = css`
    margin:0;
    margin-left:8px;
`;
const footer = css`
    text-align:center;
`;
const sectionContainer = css`
`;
const outerSection = css`
    margin: 18px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    section {
        @media screen and (max-width: 896px) {
            width: 43%;
        }
        @media screen and (max-width: 480px) {
            width: 100%;
        }
        width: 29%;
        margin: 8px;
        padding: 12px;
        background-color: white;
        border-radius: 0.3em;
        border-top: solid 1px whitesmoke;
        border-left: solid 1px whitesmoke;
        border-right: solid 1px silver;
        border-bottom: solid 1px silver;
        h2 {
            margin: 0px;
            font-size: 17px;
        }
        p {
            margin-top: 5px;
            font-size: 15px;
        }
    }
`;
const outerSectionExpand = css`
    margin: 18px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 33%;
    section {
        width: 100%;
        margin: 8px;
        padding: 12px;
        background-color: white;
        border-radius: 0.3em;
        border-top: solid 1px whitesmoke;
        border-left: solid 1px whitesmoke;
        border-right: solid 1px silver;
        border-bottom: solid 1px silver;
        h2 {
            margin: 0px;
            font-size: 17px;
        }
        p {
            margin-top: 5px;
            font-size: 15px;
        }
    }
`;
const expandSection = css`
    margin: 18px 0px;
    width: 100%;
    div {
        display: block;
        width: 100%;
        section {
            width: 100%;
            margin: 8px;
            padding: 12px;
            background-color: white;
            border-radius: 0.3em;
            border-top: solid 1px whitesmoke;
            border-left: solid 1px whitesmoke;
            border-right: solid 1px silver;
            border-bottom: solid 1px silver;
            p.close {
                display: flex;
                justify-content: flex-end;
                margin: 0px;
            }
            h2 {
                margin: 0px;
            }
        }
    }
`;
const expandSectionHide = css`
    display: none;
`;

export {
    global, 
    conteiner,
    header,
    headerImage,
    headerTitle,
    footer,
    sectionContainer,
    outerSection,
    outerSectionExpand,
    expandSection,
    expandSectionHide
};