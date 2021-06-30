import React from "react"

import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const TreePub = ({ linkGroupLists, setPub, setPubTitle }) => {
    const onSelect = (keys, info) => {
        setPub(info.node.publication_ms)
        setPubTitle(info.node.title)
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    return (
        <div className="blog">
            <div className="sidebar">
                <h3 className="sidebar-title">Document Categories</h3>
                <div className="sidebar-item categories">
                    <DirectoryTree
                        // showLine
                        defaultExpandAll
                        onSelect={onSelect}
                        onExpand={onExpand}
                        treeData={linkGroupLists && linkGroupLists.map(item => {
                            return {
                                ...item,
                                key: item.id
                            }
                        })}
                    />

                </div>
            </div>
        </div>
    )
}

const treeData = [
    { title: 'PUBLIC', key: 'public', },
    { title: 'PROTECTED', key: 'protected', },
]

/* 
treeData && treeData.map(item => {
                    const children = linkGroupLists.filter(link => link.access_type === item.title)
                    console.log(item, linkGroupLists, children)
                    return {
                        ...item,
                        key: item.id,
                        children
                    }
                })
*/
const treeData2 = [
    {
        title: 'parent 0',
        key: '0-0',
        children: [
            {
                title: 'leaf 0-0',
                key: '0-0-0',
                isLeaf: true,
            },
            {
                title: 'leaf 0-1',
                key: '0-0-1',
                isLeaf: true,
            },
        ],
    },
    {
        title: 'parent 1',
        key: '0-1',
        children: [
            {
                title: 'leaf 1-0',
                key: '0-1-0',
                isLeaf: true,
            },
            {
                title: 'leaf 1-1',
                key: '0-1-1',
                isLeaf: true,
            },
        ],
    },
];

export default TreePub