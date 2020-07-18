/** @jsx jsx */
import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {jsx, Global} from '@emotion/core';
import {Provider} from './store';
import {MainSection} from './mainSection';
import {
    global, conteiner, 
    header, headerImage, headerTitle, footer
} from './style';

const App = () => {
    return (
        <Fragment>
            <Global styles={global} />
            <div css={conteiner}>
                <header css={header}>
                    <img css={headerImage} src="icon.png" />
                    <h1 css={headerTitle}>Tadashi Yamazaki's Web Page</h1>
                </header>
                <Provider>
                    <MainSection />
                </Provider>
                <footer css={footer}>
                    <p>2020 ©Tadashi Yamazaki</p>
                </footer>
            </div>
        </Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));