//@media only screen
//최소 @media only screen and (min-width: ...px)
//최대 @media only screen and (max-width: ...px)
//둘다 @media only screen and (min-width: ...px) and (max-width: ...px)

/* index signature */
import { css, CSSProp } from 'styled-components';

/* 2번 방법(no Theme Provider) */
export interface DeviceProps {
    [key: string]: number;
}

export const DeviceSize: DeviceProps = {
    mobile: 360,
    tablet: 800,
    laptop: 1600,
    desktop: 2560,
};

export const DeviceQuery = Object.keys(DeviceSize).reduce((acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
        css`
            @media only screen and (max-width: ${DeviceSize[label]}px) {
                ${css(literals, ...placeholders)};
            }
        `;
    return acc;
}, {} as Record<keyof typeof DeviceSize, (l: TemplateStringsArray, ...p: any[]) => CSSProp>);
