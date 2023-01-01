import React from 'react';
import { Link } from 'react-router-dom';
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

export default function MyMenuItem({ icon, caption, collapse, link }) {
  return (
    <Link to={link}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        {collapse ? <div /> : <div>{caption}</div>}
        <div style={{ marginLeft: '30px', width: 'auto' }}>{icon}</div>
      </div>
    </Link>
  );
}
