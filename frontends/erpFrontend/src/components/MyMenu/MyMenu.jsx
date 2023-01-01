import React from 'react';
import {
  DesktopOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  BankOutlined,
} from '@ant-design/icons';
import MyMenuItem from './MyMenuItem';
import Item from 'antd/lib/list/Item';

const menulist = [
  { caption: 'Dashboard', icon: <DashboardOutlined />, link: '/' },
  { caption: 'Customer', icon: <CustomerServiceOutlined />, link: '/customer' },
  { caption: 'Invoice', icon: <FileTextOutlined />, link: '/invoice' },
  { caption: 'Quote', icon: <FileSyncOutlined />, link: '/quote' },
  { caption: 'PaymentInvoice', icon: <CreditCardOutlined />, link: '/payment/invoice' },
  { caption: 'Employee', icon: <UserOutlined />, link: '/employee' },
  { caption: 'Admin', icon: <TeamOutlined />, link: '/admin' },
  { caption: 'PaymentMode', icon: <SettingOutlined />, link: '/payment/mode' },
  { caption: 'role', icon: <SettingOutlined />, link: '/role' },
];

export default function MyMenu({ collapse }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px' }}>
      {menulist.map((item) => (
        <MyMenuItem caption={item.caption} icon={item.icon} collapse={collapse} link={item.link} />
      ))}
    </div>
  );
}
