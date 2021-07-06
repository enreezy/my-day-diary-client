import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from 'actions';
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

export default function DiaryList() {
    const state = useSelector(state => state.diary);
    const dispatch = useDispatch();

    const { getDiaries, deleteDiary } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        getDiaries(localStorage.getItem('id'))
    }, [])

    const columns = [
        {
            title: 'Author',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Text',
            dataIndex: 'text',
            key: 'text',
        },
        {
            title: 'AI Sentiment',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag === 'Neutral' ? 'geekblue' : 'green';
                        if (tag === 'Angry') {
                            color = 'volcano';
                        } else if (tag === 'Sad') {
                            color = 'purple'
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={{ pathname: "/view", state: {data: record} }}><Button type="primary">View</Button></Link>
                    <Button onClick={() => deleteDiary(record.id)} type="danger">Delete</Button>
                </Space>
            )
        },
    ];

    const data = [];
    state.diaries.map((diary, i) => {
        data.push({
            id: diary._id,
            key: i,
            name: diary.author,
            date: new Date(diary.date).toISOString().slice(0, 10).toString(),
            tags: [diary.sentiment],
            text: diary.text
        })
    })

    return (
        <Table columns={columns} dataSource={data} total={data.length} />
    )
}
