import { Outlet } from 'react-router-dom';
import  Header  from '../Header/index.tsx';

export default function RootLayout() {
  return (
    <div>
      <Header isLoggedIn={false} userName={''} />
      <Outlet />
    </div>
  );
}