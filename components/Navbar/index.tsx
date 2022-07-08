import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Avatar, Dropdown, Menu, message } from 'antd';
import { LoginOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Login from 'components/Login';
import { navs } from './config';
import styles from './index.module.scss';
import { connect } from 'react-redux';

const Navbar = (props: any) => {
  const { pathname, push } = useRouter();
  // hooks定义变量和修改变量的方法
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [userId, setUserId] = useState('');

  // 模拟componentDidMount
  // 维护登录状态: 判断用户是否已经登录
  useEffect(() => {
    // 初次加载就会执行useEffect
    let username = localStorage.getItem('userId');
    if (username) {
      setUserId(username);
    }
  });

  const handleGotoEditorPage = () => {
    // 跳转到编辑页面
    if (userId != '') {
      push('/editor');
    } else {
      message.warning('请先登录');
    }
  };

  // 触发登录弹窗
  const handleLogin = () => {
    setIsShowLogin(true);
  };

  const handleClose = () => {
    setIsShowLogin(false);
  };

  const handleGotoPersonalPage = () => {
    // 跳转到个人页面
  };

  // 登出方法
  const handleLogout = () => {
    message.success('退出成功，即将返回首页');
    localStorage.clear(); // 清除localStorage中的数据
    setUserId(''); // 设置userId为空
    setTimeout(() => push('/'), 1500);
  };

  const renderDropDownMenu = () => {
    return (
      <Menu>
        <Menu.Item key={1} onClick={handleGotoPersonalPage}>
          <HomeOutlined />
          &nbsp; 个人主页
        </Menu.Item>
        <Menu.Item key={2} onClick={handleLogout}>
          <LoginOutlined />
          &nbsp; 退出系统
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>Next-Blog</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            {/* 导航栏标签激活时的样式 */}
            <a className={pathname === nav?.value ? styles.active : ''}>
              {nav?.label}
            </a>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        {/* 给button添加触发事件 */}
        {/* 增加link跳转事件 */}
        <Button onClick={handleGotoEditorPage}>发帖</Button>
        {/* 如果userId为空字符串，说明用户未登录，否则展示用户下拉菜单 */}
        {userId != '' ? (
          <>
            <Dropdown overlay={renderDropDownMenu()} placement="bottomLeft">
              <Avatar
                style={{ backgroundColor: '#87d068', cursor: 'pointer' }}
                icon={<UserOutlined />}
              />
            </Dropdown>
            <span>{'    ' + userId}</span>
          </>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            登录
          </Button>
        )}
      </section>
      {/* 登录弹窗需要关闭和展示 */}
      <Login isShow={isShowLogin} onClose={handleClose} />
    </div>
  );
};

const mapStateToProps = (state: { mykey: any }) => {
  return {
    mykey: state.mykey,
  };
};

export default connect(mapStateToProps)(Navbar);
