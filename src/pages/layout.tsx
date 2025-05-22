import { Outlet, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/slices/user";

const Layout = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (firebaesUser) => {
      if (firebaesUser) {
        dispatch(
          addUser({
            email: firebaesUser.email,
            token: await firebaesUser.getIdToken(),
            displayName: firebaesUser.displayName,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/auth");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div>
      <nav className="absolute flex justify-between top-1 w-full py-6 px-8 z-20 max-w-[calc(83.3333%-6rem)] mx-auto">
        <img
          src="brand-logo.png"
          alt="brand-logo"
          width={148}
          height={40}
          className="scale-[1.2]"
        />
        {user && (
          <button onClick={handleSignout}>
            {(user as { displayName: string })?.displayName} sign out
          </button>
        )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
