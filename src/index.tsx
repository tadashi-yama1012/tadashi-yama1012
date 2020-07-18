/** @jsx jsx */
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {jsx, css, Global} from '@emotion/core';

const style = {
    conteiner: css`
        @media (min-width: 420px) {
        }
        @media (min-width: 768px) and (max-width: 1024px) {
        }
        @media (min-width: 1024px) {
            width: 1024px;
        }
        margin: 22px auto;
    `,
    header: css`
        text-align: center;
    `,
    headerImage: css`
        margin: 33px;
        border-radius: 300px;
        @media (min-width: 420px) {
            width: 380px;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
            width: 380px;
        }
        @media (min-width: 1024px) {
            width: 220px;
        }
    `,
    headerTitle: css`
        margin:0;
        margin-left:8px;
    `,
    footer: css`
        text-align:center;
    `,
    outerSection: css`
        margin: 18px 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        section {
            @media (min-width: 420px) {
                width: 100%;
            }
            @media (min-width: 768px) and (max-width: 1024px) {
                width: 44%;
            }
            @media (min-width: 1024px) {
                width: 29%;
            }
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
    `
};

const App = () => {
    return (
        <Fragment>
            <Global styles={
                css`
                    body {
                        background-color: seashell;
                        font-family: 'Noto Serif JP', serif;
                    }
                `
            } />
            <div css={style.conteiner}>
                <header css={style.header}>
                    <img css={style.headerImage} src="icon.png" />
                    <h1 css={style.headerTitle}>Tadashi Yamazaki's Web Page</h1>
                </header>
                <section css={style.outerSection}>
                    <section>
                        <h2>about</h2>
                        <p>
                            このサイトはTadashiYamazakiのポートフォリオサイトです。<br/>
                            このサイトを見ることでYamazakiの事を手軽に理解することができます。
                        </p>
                    </section>
                    <section>
                        <h2>自己紹介</h2>
                        <p>
                            名前：山崎義（やまざき ただし）<br/>
                            生年月日：1986年10月12日<br/>
                            出身地：滋賀県<br/>
                            最終学歴：岐阜経済大学経営学部卒<br/>
                            好きな食べ物：オムライス<br/>
                        </p>
                    </section>
                    <section>
                        <h2>スキル</h2>
                        <p>
                            &gt;lang<br/>
                            JavaScript,TypeScript,Node.js<br/>
                            PHP,Java<br/>
                            Swift<br/>
                            &gt;tool<br/>
                            React.js,Vue.js<br/>
                            Next.js,Nuxt.js<br/>
                            Webpack<br/>
                            Laravel,Slim,Composer
                        </p>
                    </section>
                    <section>
                        <h2>仕事歴</h2>
                        <p>
                            スマートフォン向けWebページのCMSシステム<br/>
                            PDF本棚ビューワウェブアプリ<br/>
                            iPhone連絡先同期アプリ<br/>
                            WebRTCビデオチャット物件内覧システム<br/>
                            TwitterAPIを利用したお遊びウェブアプリ
                        </p>
                    </section>
                    <section>
                        <h2>趣味</h2>
                        <p>
                            主な趣味：プログラミングの練習<br/>
                            好きな漫画：ステラのまほう<br/>
                            好きな小説：戦闘妖精雪風<br/>
                            好きなゲーム：ブラッドボーン<br/>
                            好きなコーラ：ヌカコーラ
                        </p>
                    </section>
                    <section>
                        <h2>リンク</h2>
                        <p>
                            <a href="https://github.com/tadashi-yama1012">my github repository</a>
                        </p>
                    </section>
                    <section>
                        <h2>苦手なこと</h2>
                        <p>
                            暗算<br/>
                            デザイン<br/>
                            コミュ力
                        </p>
                    </section>
                    <section>
                        <h2>最近あったこと</h2>
                        <p>
                            東京に引っ越した
                        </p>
                    </section>
                </section>
                <footer css={style.footer}>
                    <p>2020 ©Tadashi Yamazaki</p>
                </footer>
            </div>
        </Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));