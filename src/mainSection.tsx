/** @jsx jsx */
import {jsx} from '@emotion/core';
import {outerSection} from './style';

const MainSection = () => (
    <section css={outerSection}>
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
);

export {
    MainSection
};