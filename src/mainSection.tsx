/** @jsx jsx */
import {jsx} from '@emotion/core';
import {sectionContainer, outerSection} from './style';
import {
    About, Myself, Skill, Work, Hobby, MyLink, Weak, Recent, What
} from './text';

const Section = ({children}: {children: any}) => {
    return (
        <section>
            {children}
        </section>
    );
}

const MainSection = () => {
    return (
        <div css={sectionContainer}>
            <section css={outerSection}>
                <Section><About/></Section>
                <Section><Myself/></Section>
                <Section><Skill/></Section>
                <Section><Work/></Section>
                <Section><What/></Section>
                <Section><Hobby/></Section>
                <Section><MyLink/></Section>
                <Section><Weak/></Section>
                <Section><Recent/></Section>
            </section>
        </div>
    );
};

export {
    MainSection
};