function* tree_trverserse(tree = []) {
    yield tree;
    for (let i of tree) {
        if (i.children && i.children.length) {
            yield* tree_trverserse(i.children)
        }
    }
}

console.log([].concat(...tree_trverserse([
    {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
            },
            {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2',
                children: [
                    {
                        title: 'Child Node3',
                        value: '0-1-0',
                        key: '0-1-0',
                    },
                    {
                        title: 'Child Node4',
                        value: '0-1-1',
                        key: '0-1-1',
                    },
                    {
                        title: 'Child Node5',
                        value: '0-1-2',
                        key: '0-1-2',
                    },
                ],
            },
        ],
    },
])))