/** @jsx jsx */
import {useContext} from 'react';
import {jsx} from '@emotion/core';
import {} from './style';
import {Store} from './store';

const ExpandView = () => {
    const {state, dispatch} = useContext(Store);
    const handleHideClick = () => {
        dispatch!({type: 'UNSELECTED'});
    };
    console.log(state);
    return (
        <div className={state?.selected ? 'show' : 'hide'}>
            <section>
                <p className='close'><button onClick={handleHideClick}>close</button></p>
                {state?.selected}
            </section>
        </div>
    );
};

export {
    ExpandView
};