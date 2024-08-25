import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/userConversation";
import { useAuth } from "../../context/Authprovider";
import { CiMenuFries } from "react-icons/ci";

export default function right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    // <div className="w-full  bg-slate-900 text-gray-300 ">
    //   <div>
    //     {!selectedConversation ? (
    //       <NoChatSelected />
    //     ) : (
    //       <>
    //         <Chatuser />
    //         <div
    //           className=" flex-1 overflow-y-auto"
    //           style={{ maxHeight: "calc(92vh - 8vh)" }}
    //         >
    //           <Messages />
    //         </div>
    //         <Typesend />
    //       </>
    //     )}
    //   </div>
    // </div>
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(92vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
}

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    // <>
    //   <div className="flex h-screen items-center justify-center">
    //     <h1 className="text-center">
    //       Welcome{" "}
    //       <span className="font-semibold text-xl">
    //         {authUser.user.fullname}
    //       </span>
    //       <br />
    //       No chat selected, please start conversation by selecting to your
    //       contact
    //     </h1>
    //   </div>
    // </>
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
