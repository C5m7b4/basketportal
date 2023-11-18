import React from 'react';
import {
  Plus,
  Minus,
  Server,
  Table,
  Column,
  Database,
  Wifi,
  Gauge,
  Up,
  Down,
  History,
  Filter,
  Save,
  NightMode,
  Clipboard,
} from '../svgs';

const Dashboard = () => {
  return (
    <div>
      <h3>Welcome you your dashboard</h3>
      <Plus />
      <Minus />
      <Server />
      <Database />
      <Table />
      <Column />
      <Wifi />
      <Gauge />
      <History />
      <Up />
      <Down />
      <Filter />
      <Save />
      <NightMode />
      <Clipboard />
    </div>
  );
};

export default Dashboard;
