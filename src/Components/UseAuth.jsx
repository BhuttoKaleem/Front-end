import { useSelector } from "react-redux";
export default function useAuth() {
  const globalState = useSelector((state) => state);
  return globalState.user?.userData?.username !== undefined; // true ,false,
}