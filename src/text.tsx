/** @jsx jsx */
import {Fragment, useState} from 'react';
import {jsx} from '@emotion/core';
import Modal from 'react-modal';

const About = () => (
    <Fragment>
        <h2>about</h2>
        <p>
            このサイトはTadashiYamazakiのポートフォリオサイトです。<br/>
            このサイトを見ることでYamazakiの事を手軽に理解することができます。
        </p>
    </Fragment>
);

const Myself = () => (
    <Fragment>
        <h2>自己紹介</h2>
        <p>
            名前：山崎義（やまざき ただし）<br/>
            生年月日：1986年10月12日<br/>
            出身地：滋賀県<br/>
            最終学歴：岐阜経済大学経営学部卒<br/>
            好きな食べ物：オムライス<br/>
            好きなプログラミング言語：JavaScript<br/>
            性格：間違っても陽キャじゃない
        </p>
    </Fragment>
);

const Skill = () => (
    <Fragment>
        <h2>スキル</h2>
        <p>
            &gt;言語<br/>
            JavaScript, TypeScript, Node.js<br/>
            PHP, Java<br/>
            Swift<br/>
            &gt;ツール<br/>
            React.js, Vue.js<br/>
            Next.js, Nuxt.js<br/>
            Webpack<br/>
            Laravel, Slim, Composer
        </p>
    </Fragment>
);

const Work = () => {
    const [modalOpen, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <h2>仕事歴</h2>
            <p>
                スマートフォン向けWebページのCMSシステム<br/>
                PDF本棚ビューワウェブアプリ<br/>
                iPhone連絡先同期アプリ<br/>
                WebRTCビデオチャット物件内覧システム<br/>
                TwitterAPIを利用したお遊びウェブアプリ<br/>
                <br/>
                <button onClick={handleOpen}>もう少し詳しく</button>
            </p>
            <Modal isOpen={modalOpen} onRequestClose={handleClose} >
                <h2>仕事歴</h2>
                <p>
                <h3>スマートフォン向けWebページのCMSシステム</h3>
                システム全体のプロトタイプ実装、JSによるページ間リンク図表機能＆編集機能を実装<br/>
                リンク図表・編集機能はJSによるスクラッチで作成、Canvasを使用<br/>
                [使用技術：PHP、Codeigniter、JavaScript、Canvas]
                </p>
                <p>
                <h3>PDF本棚ビューワウェブアプリ</h3>
                複数のPDFファイルを本棚に見立てて表示し、管理閲覧を行うアプリ<br/>
                PDFデータの保存・読み出しを行うバックエンド、PDFデータを表示するフロントエンドを共に実装<br/>
                [使用技術：Node.js、MySQL、JavaScript、Vue.js]
                </p>
                <p>
                <h3>iPhone連絡先同期アプリ</h3>
                連絡先データをサーバから取得し、更新の必要のあるデータを端末に書き込む機能を作成<br/>
                更新を行う前の連絡先データのバックアップおよびリストア機能も作成<br/>
                [使用技術：Swift]
                </p>
                <p>
                <h3>WebRTCビデオチャット物件内覧システム</h3>
                タブレットのカメラ映像を遠隔地のPCやスマホに送る機能を作成、リアルタイムにやり取りを行う<br/>
                双方向一対多数ビデオチャット、テキストチャット、ファイル送受信などの機能を作成<br/>
                [使用技術：Node.js、JavaScript、React.js]
                </p>
                <p>
                <h3>TwitterAPIを利用したお遊びウェブアプリ</h3>
                QRコード画像のツイート機能、GoogleMap画像のツイート機能、簡易ツイート性格診断機能を作成<br/>
                性格診断機能はツイート内容を形態素解析してキーワードの出現頻度から判定<br/>
                [使用技術：Node.js、JavaScript、mecab]
                </p>
            </Modal>
        </Fragment>
    );
};

const Hobby = () => (
    <Fragment>
        <h2>趣味</h2>
        <p>
            主な趣味：プログラミングの練習<br/>
            好きな漫画：ステラのまほう<br/>
            好きなアニメ：イデオン<br/>
            好きな小説：虐殺器官<br/>
            好きなV：星街すいせい<br/>
            好きなゲーム：ブラッドボーン<br/>
            好きなコーラ：ヌカコーラ<br/>
        </p>
    </Fragment>
);

const MyLink = () => (
    <Fragment>
        <h2>リンク</h2>
        <p>
            <a href="https://github.com/tadashi-yama1012">My github repository</a>
        </p>
    </Fragment>
);

const Weak = () => (
    <Fragment>
        <h2>苦手なこと</h2>
        <p>
            家事全般<br/>
            暗算<br/>
            デザイン<br/>
            コミュ力
        </p>
    </Fragment>
);

const Recent = () => (
    <Fragment>
        <h2>最近あったこと</h2>
        <p>
            東京に引っ越した。
        </p>
    </Fragment>
);

const What = () => (
    <Fragment>
        <h2>何でJavaScriptが好き？</h2>
        <p>
            書き慣れてるから（5年くらいは書いてる）。<br/>
            今どきのWebアプリ作るのに外せないと思うから。<br/>
            将来性がある、と思うから。<br/>
            関数を引数に取れるから。<br/>
            便利な機能があるから（足りないと思う機能もあるRangeとかほしい）。<br/>
            一昔前の混沌の時代を経験してないので悪い印象があまりないから。<br/>
        </p>
    </Fragment>
);

export {
    About,
    Myself,
    Skill,
    Work,
    Hobby,
    MyLink,
    Weak,
    Recent,
    What
};