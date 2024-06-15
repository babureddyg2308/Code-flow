// import React from 'react'
//  import{Link} from 'react-router-dom'
//  import'./Header.css'

//  import Logoimg from '../../public/ImageLogo/NEM104-logo.png'

// const Header = () => {
//     return (
//         <div>
//           <div className='headbar'>
//             <div>
                 
//                  <img  className='imagelogo' src={Logoimg} alt="" style={{width:150}}/>
//             </div>
//             <div className='buttonsofnav'>
//                <a href=""> <h4>Compailer</h4></a>
//                <a href=""> <h4>All Codes</h4> </a>
//                 <button className='btnLogin'>Login</button>
//                 <button className='btnSignup'>Signup</button>

//             </div>
//           </div>
//         </div>
//     )
// }

// export default Header


import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleError } from "../utils/handleError";
import { useLogoutMutation } from "../redux/slices/api";
import {
  setCurrentWidth,
  updateCurrentUser,
  updateIsLoggedIn,
} from "../redux/slices/appSlice";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { updateIsOwner } from "../redux/slices/compilerSlice";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";

export default function Header() {
  const [logout, { isLoading }] = useLogoutMutation();
  const [sheetOpen, setSheetOpen] = useState(false);
  const windowWidth = useSelector((state) => state.appSlice.currentWidth);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.appSlice.isLoggedIn);
  const currentUser = useSelector((state) => state.appSlice.currentUser);

  const handleResize = () => {
    dispatch(setCurrentWidth(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("current width: ", windowWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  async function handleLogout() {
    try {
      await logout().unwrap();
      dispatch(updateIsLoggedIn(false));
      dispatch(updateCurrentUser({}));
      dispatch(updateIsOwner(false));
    } catch (error) {
      handleError(error);
    }
  }

  const closeSheet = () => {
    setSheetOpen(false);
  };

  return (
    <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
      <Link to="/">
        <h2 className="font-bold select-none">WD Compiler</h2>
      </Link>
      {windowWidth > 500 ? (
        <ul className="flex gap-2">
          <li>
            <Link to="/compiler">
              <Button variant="link">Compiler</Button>
            </Link>
          </li>
          <li>
            <Link to="/all-codes">
              <Button variant="link">All Codes</Button>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/my-codes">
                  <Button variant="blue">My Codes</Button>
                </Link>
              </li>
              <li>
                <Button
                  loading={isLoading}
                  onClick={handleLogout}
                  variant="destructive"
                >
                  Logout
                </Button>
              </li>
              <li>
                <Avatar>
                  <AvatarImage src={currentUser.picture} />
                  <AvatarFallback className="capitalize">
                    {currentUser.username?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <Button variant="blue">Login</Button>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <Button variant="blue">Signup</Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Avatar>
            <AvatarImage src={currentUser.picture} />
            <AvatarFallback className="capitalize">
              {currentUser.username?.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button>
                <GiHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/compiler">
                    <Button
                      onClick={closeSheet}
                      className="w-full"
                      variant="link"
                    >
                      Compiler
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/all-codes">
                    <Button
                      onClick={closeSheet}
                      className="w-full"
                      variant="link"
                    >
                      All Codes
                    </Button>
                  </Link>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/my-codes">
                        <Button
                          onClick={closeSheet}
                          className="w-full"
                          variant="blue"
                        >
                          My Codes
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Button
                        loading={isLoading}
                        onClick={async () => {
                          await handleLogout();
                          closeSheet();
                        }}
                        variant="destructive"
                        className="w-full"
                      >
                        Logout
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">
                        <Button
                          onClick={closeSheet}
                          className="w-full"
                          variant="blue"
                        >
                          Login
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup">
                        <Button
                          onClick={closeSheet}
                          className="w-full"
                          variant="blue"
                        >
                          Signup
                        </Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </nav>
  );
}

