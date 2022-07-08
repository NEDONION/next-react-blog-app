import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, message, Skeleton } from 'antd';
import React from 'react';
import api from 'service';

const Post: NextPage = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: 1,
      title: '',
      content: '',
      description: '',
      href: '',
    },
  ]);
  // 最后[]的表示没有依赖项，页面只在首次加载
  useEffect(() => {
    // 异步写法
    const fetchData = async () => {
      const result = await api.getAllPosts();
      setData(result.data.content);
      setInitLoading(false);
    };
    fetchData();

    // 同步写法
    // api.getAllPosts().then((res?: any) => {
    //   if (res?.status == 200) {
    //     setData(res.data.content);
    //     setInitLoading(false);
    //   } else {
    //     message.error(res?.statusText);
    //   }
    // });
  }, []);

  const IconText = ({ icon, text }: { icon: React.FC, text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Skeleton loading={initLoading} active>
      <List
        itemLayout="vertical"
        size="large"
        loading={initLoading}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Skeleton>
  );
};

export default Post;
