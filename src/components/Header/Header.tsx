
import { HeaderProps } from "./Header.interfaces";

import { useAppSelector } from './../../redux/store/hooks';

import { Button } from "@mui/material";
import { useAppDispatch } from './../../redux/store/hooks';
import { logout } from './../../redux/slice';


export const Header: React.FC<HeaderProps> = (props) => {
  const disaptch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  const logoutUser = () => disaptch(logout());

  return (
    <header className="border-b bg-white">
      <div className="container flex justify-between">
        <img src="/assets/imgs/TuringLogo.png" className="w-48 h-auto py-4" alt="" />
        <span className="flex items-center">{user ? <Button onClick={logoutUser} type="submit" variant="contained">Log out</Button> : null}</span>
      </div>
    </header>
  );
};
