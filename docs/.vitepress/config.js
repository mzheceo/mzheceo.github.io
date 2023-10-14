export default {
    // app level config options
    lang: 'zh-CN',
    title: 'Mzheceo\'Blog',
    description: 'blog,mzheceo',
    logo: '/logo.png',
    head: [
        [
            'link',{ rel: 'icon', href: '/favicon32x32.ico' ,type: 'image/x-icon'}
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        footer: {
            message: 'Power By VitePress',
            copyright: 'Copyright © 2023-present mzheceo'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: { //这里是个大坑，zh是不生效的，改为root即可
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        nav: [
            {
                text: 'VitePress',
                items: [
                    {
                        // Title for the section.
                        text: '官网和中文站',
                        items: [
                            {text: '官网', link: 'https://vitepress.dev/'},
                            {text: '中文站', link: 'https://vitepress.qzxdp.cn/'}
                        ]
                    }
                ]
            },
            {
                text: '文章',
                items: [
                    // {
                    //     text: '设计模式',
                    //     items: [
                    //         {text: '设计模式', link: '/design-pattern/design-pattern.md'}
                    //     ]
                    // },
                    {
                        text: '博客文章',
                        items: [
                            {text: '博客文章', link: '/blog/article.md'}
                        ]
                    }
                ]
            }
        ]
    }
}