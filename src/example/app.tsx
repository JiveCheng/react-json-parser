import React from 'react';
import ReactDOM from 'react-dom';
import { ReactComponentSchema, ParseSchemaParamType } from '../index';
import {
    Button,
    Container,
    Grid,
    Image,
    Input,
    Menu,
    Segment,
    Header,
} from 'semantic-ui-react';

let schema: ParseSchemaParamType = {
    component: 'Container',
    children: [
        {
            component: 'Header',
            as: 'h1',
            children: [
                {
                    component: 'span',
                    text: 'Account Settings',
                },
                {
                    component: 'Header.Subheader',
                    text:
                        'Manage your account settings and set email preferences',
                },
            ],
        },
        {
            component: 'Menu',
            pointing: true,
            children: [
                {
                    component: 'Menu.Item',
                    name: 'home',
                    active: true,
                },
                {
                    component: 'Menu.Item',
                    name: 'messages',
                    active: false,
                },
                {
                    component: 'Menu.Item',
                    name: 'friends',
                    active: false,
                },
            ],
        },
        {
            component: 'Grid',
            columns: 3,
            divided: true,
            children: [
                {
                    component: 'Grid.Row',
                    children: [
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            component: 'Grid',
            divided: 'vertically',
            children: [
                {
                    component: 'Grid.Row',
                    columns: 2,
                    children: [
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                    ],
                },
                {
                    component: 'Grid.Row',
                    columns: 2,
                    children: [
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src:
                                        'https://react.semantic-ui.com/images/wireframe/media-paragraph.png',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            component: 'Grid',
            divided: 'vertically',
            children: [
                {
                    component: 'Grid.Row',
                    columns: 2,
                    children: [
                        {
                            component: 'Grid.Column',
                            mobile: 16,
                            tablet: 8,
                            computer: 8,
                            children: [
                                {
                                    component: 'Header',
                                    size: 'huge',
                                    text: '我们为何用它？',
                                },
                                {
                                    component: 'p',
                                    text:
                                        'Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。',
                                },
                                {
                                    component: 'a',
                                    text: '開始使用！',
                                    href: 'www.yahoo.com',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            mobile: 16,
                            tablet: 8,
                            computer: 8,
                            children: [
                                {
                                    component: 'Header',
                                    size: 'huge',
                                    text: '我能从哪里获取？',
                                },
                                {
                                    component: 'p',
                                    text:
                                        'Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。',
                                },
                                {
                                    component: 'a',
                                    text: 'More...',
                                    href: 'www.yahoo.com',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            component: 'Grid',
            children: [
                {
                    component: 'Grid.Row',
                    columns: 2,
                    children: [
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src: 'https://fakeimg.pl/500x300/',
                                },
                            ],
                        },
                        {
                            component: 'Grid.Column',
                            children: [
                                {
                                    component: 'Image',
                                    src: 'https://fakeimg.pl/500x300/',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
const App = () => {
    console.timeStamp('Start Call');
    let componentMap = {
        Button: Button,
        Container: Container,
        Grid: Grid,
        'Grid.Row': Grid.Row,
        'Grid.Column': Grid.Column,
        Image,
        Input,
        Menu,
        'Menu.Item': Menu.Item,
        'Menu.Menu': Menu.Menu,
        Segment,
        Header,
        'Header.Subheader': Header.Subheader,
    };
    return (
        <div>
            <ReactComponentSchema schema={schema} componentMap={componentMap} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('react-json-parser'), () => {
    console.log(schema);
    console.timeStamp('End Render');
});
