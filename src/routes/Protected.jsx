import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProtectedByUser = () => {
  const navigate = useNavigate();
  const globalState = useSelector((state)=>state);
    const isAdmin = true;
  return isAdmin === true ? <Outlet /> :<>not authorized</>;
};
export default ProtectedByUser;