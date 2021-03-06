import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message, Tabs, Button, Form, Input } from 'antd';
import styles from './index.module.scss';
import { validUserName, validPass, validEmail } from 'utils/valid';
import { LoginApi, RegisterApi } from 'service/api';

// 从父组件传递过来的props
interface IProps {
  isShow: boolean;
  onClose: Function;
}

const { TabPane } = Tabs;

const Login = (props: IProps) => {
  const { isShow = false, onClose } = props;
  const [tabKey, setTabKey] = useState('1');
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    comfirmPassword: '',
  });

  const handleClose = () => {
    // 点击关闭窗口
    onClose && onClose();
  };

  const handleLogin = () => {
    LoginApi({
      accountOrEmail: loginForm.username,
      password: loginForm.password,
    }).then(async (res: any) => {
      if (res?.status === 200) {
        const userInfo = {
          userId: loginForm.username,
          token: res.data.accessToken,
        };
        // 登录成功，保存用户数据
        // 保存用户信息进入 localStorage
        localStorage.setItem('userId', userInfo.userId);
        localStorage.setItem('token', userInfo.token);

        message.success('登录成功');
        onClose && onClose();
      } else {
        message.error(res?.statusText || '登录失败');
      }
    });
  };

  // 提交注册
  const handleRegister = () => {
    // 前端校验
    if (!validUserName(registerForm.username)) {
      message.error('请输入正确的用户名');
      return false;
    } else if (!validPass(registerForm.password)) {
      message.error('密码应为6到20位字母或数字');
      return false;
    } else if (!validPass(registerForm.comfirmPassword)) {
      message.error('确认密码有误');
      return false;
    } else if (registerForm.comfirmPassword !== registerForm.password) {
      message.error('两次密码不一致');
      return false;
    } else if (!registerForm.email || !validEmail(registerForm.email)) {
      message.error('请输入正确的邮箱');
      return false;
    } else if (!registerForm.name) {
      message.error('请输入昵称');
      return false;
    }

    // 提交注册请求
    RegisterApi({
      account: registerForm.username,
      name: registerForm.name,
      email: registerForm.email,
      password: registerForm.password,
    }).then((res: any) => {
      if (res?.status === 201) {
        message.success('注册成功');
        onChange('1'); // 切换到登录 Tab
        // onClose && onClose();
      } else {
        message.error(res?.statusText || '未知错误');
      }
    });
  };

  const handleOAuthGithub = () => {};

  // 登录表单的提交
  const handleLoginFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  // 注册表单的提交
  const handleRegisterFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const onChange = (key: string) => {
    setTabKey(key); //点击切换
  };

  // 切换到注册的Tab
  const handleToRegister = () => {
    onChange('2');
  };

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <i className={styles.close} onClick={handleClose}>
          x
        </i>
        {/* 登录注册tabs页 居中 */}
        <Tabs
          // defaultActiveKey="1"
          activeKey={tabKey}
          centered={true}
          size="large"
          tabBarStyle={{ fontWeight: 'bold' }}
          onChange={onChange}
        >
          <TabPane tab="登录" key="1">
            <Input
              name="username"
              type="text"
              placeholder="请输入用户名或邮箱"
              value={loginForm.username}
              onChange={handleLoginFormChange}
            />
            <Input.Password
              name="password"
              type="text"
              placeholder="请输入密码"
              bordered={false}
              visibilityToggle={false}
              value={loginForm.password}
              onChange={handleLoginFormChange}
            />
            <div className={styles.loginBtn} onClick={handleLogin}>
              登录
            </div>
            <div className={styles.otherLogin} onClick={handleOAuthGithub}>
              GitHub 登录
            </div>
            <div className={styles.otherLogin} onClick={handleToRegister}>
              还没有账号？注册新账号
            </div>
            <div className={styles.loginPrivacy}>
              注册登录即表示同意 <></>
              <a
                href="https://moco.imooc.com/privacy.html"
                target="_blank"
                rel="noreferrer"
              >
                用户协议
              </a>
            </div>
          </TabPane>
          <TabPane tab="注册" key="2">
            <Input
              name="username"
              type="text"
              placeholder="请输入用户名"
              value={registerForm.username}
              onChange={handleRegisterFormChange}
            />
            <Input
              name="name"
              type="text"
              placeholder="请输入昵称"
              value={registerForm.name}
              onChange={handleRegisterFormChange}
            />
            <Input
              name="email"
              type="text"
              placeholder="请输入邮箱"
              value={registerForm.email}
              onChange={handleRegisterFormChange}
            />
            <Input.Password
              placeholder="请输入密码"
              name="password"
              type="text"
              bordered={false}
              visibilityToggle={false}
              value={registerForm.password}
              onChange={handleRegisterFormChange}
            />
            <Input.Password
              name="comfirmPassword"
              type="text"
              placeholder="请再次输入密码"
              bordered={false}
              visibilityToggle={false}
              value={registerForm.comfirmPassword}
              onChange={handleRegisterFormChange}
            />

            <div className={styles.loginBtn} onClick={handleRegister}>
              注册
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  ) : null;
};

export default Login;
