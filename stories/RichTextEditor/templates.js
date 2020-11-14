export const hi = {
    type: 'text',
    text: 'Hi, my name is... My name is... My name is... My name is Slim Shady!'
};

export const templates = [
    {
        label: 'Hello',
        id: 1,
        template: {
            type: 'paragraph',
            content: [
                {
                    type: 'text',
                    text: 'Hello, ',
                    marks: [
                        {
                            type: 'link',
                            attrs: {
                                href: 'https://www.atlassian.com'
                            }
                        }
                    ]
                },
                {
                    type: 'text',
                    text: 'World!',
                    marks: [
                        {
                            type: 'strong'
                        },
                        {
                            type: 'link',
                            attrs: {
                                href: 'https://www.atlassian.com'
                            }
                        }
                    ]
                },
                {
                    type: 'text',
                    text: ' Look I can do '
                },
                {
                    type: 'text',
                    text: 'italic ',
                    marks: [
                        {
                            type: 'em'
                        }
                    ]
                },
                {
                    type: 'text',
                    text: ', strong ',
                    marks: [
                        {
                            type: 'em'
                        },
                        {
                            type: 'strong'
                        }
                    ]
                },
                {
                    type: 'text',
                    text: 'and underlined text!',
                    marks: [
                        {
                            type: 'em'
                        },
                        {
                            type: 'strong'
                        },
                        {
                            type: 'underline'
                        }
                    ]
                }
            ]
        }
    },
    {
        label: 'List',
        id: 2,
        template: {
            type: 'bulletList',
            content: [
                {
                    type: 'listItem',
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'First list item'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'listItem',
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Second list item'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'listItem',
                    content: [
                        {
                            type: 'paragraph',
                            content: [
                                {
                                    type: 'text',
                                    text: 'Third list item'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
