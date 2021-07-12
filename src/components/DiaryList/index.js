import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button, Popconfirm, Switch, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from 'actions';
import { bindActionCreators } from 'redux';
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'

export default function DiaryList() {
    const state = useSelector(state => state.diary);
    const dispatch = useDispatch();
    const location = useLocation();

    const { getDiaries, deleteDiary } = bindActionCreators(actionCreators, dispatch);
    const [visible, setVisible] = useState([])

    function handleDelete(id) {
        deleteDiary(id);
        toast.error("❌ Deleted!")
    }

    function cancel() {
        setVisible(false);
    }

    function confirm(id) {
        setVisible(false)
        handleDelete(id)
    }

    useEffect(() => {
        getDiaries(localStorage.getItem('id'))
        if (location.state) {
            toast.success("✔️ Diary saved!")
        }


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
                    <Link to={{ pathname: "/view", state: { data: record } }}><Button type="primary" icon={<EyeOutlined />}>View</Button></Link>
                    <Popconfirm
                        title="Are you sure delete this diary?"
                        visible={visible[record.id]}
                        onConfirm={() => confirm(record.id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="danger" icon={<DeleteOutlined />}>Delete</Button>
                    </Popconfirm>



                </Space >
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
        <>
            <Table columns={columns} dataSource={data} total={data.length} />
            <ToastContainer />
        </>
    )
}
