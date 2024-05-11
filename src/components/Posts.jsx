import {Table,Tag} from 'antd';
import { useState ,useEffect } from 'react';

const columns = [
    {
        key:'title',
        dataIndex:'title',
        title:'Title'
    },
    {
        key:'body',
        dataIndex:'body',
        title:'Body'
    },
    {
        key:'title',
        dataIndex:'title',
        title:'Title'
    },
    {
        key: 'tags',
        dataIndex: 'tags',
        title: 'Tags',
        render: (_,{tags}) =>(
            <>
            {tags.map((tag,index) => {
              let color = 'black';
              return (
                <Tag key={index} color={color} style={{margin:'5px'}}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        )
    },
    {
        key:'reactions',
        dataIndex:'reactions',
        title:'Reactions'
    }

]

const Posts = () => {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(1);
    useEffect( () => {
       fetchData()
    },[])
    const fetchData = async() => {
        const res = await fetch('https://dummyjson.com/posts?skip=10&limit=10')
        const result = await res.json();
        setData(result.posts);
        setPage(result.totalPages)
    }
    return <>
        <Table columns={columns} dataSource={data} pagination={{pageSize:150}}/>
    </>
}

export default Posts;