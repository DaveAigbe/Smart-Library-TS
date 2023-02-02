import React, { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import UserInformation from "./UserInformation";
import { useToggleActive } from "../../hooks/useToggleActive";
import EditUserForm from "./Forms/EditUserForm";

interface Props {}

const AccountPage: FunctionComponent<Props> = () => {
  const [editUserFormActive, toggleEditUserForm] = useToggleActive();
  return (
    <section
      className={
        "container fixed flex h-3/4 w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-lg bg-main-secondary shadow-2xl shadow-gray-900 md:gap-28"
      }
    >
      <section>
        <img
          className={
            "relative left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/4 rounded-full object-cover md:h-40 md:w-40"
          }
          src={"/images/frog-pfp.jpg"}
          alt={"frog pfp"}
        />
        <div
          className={
            "absolute top-0 ml-4 mt-4 flex  gap-2 text-3xl text-main-txt md:text-4xl"
          }
        >
          <button
            type={"button"}
            className={"transition duration-150 hover:text-brown-900"}
            onClick={() => toggleEditUserForm(false)}
          >
            <Icon
              className={`${!editUserFormActive && "text-green-600"}`}
              icon="mingcute:information-fill"
            />
          </button>
          <button
            type={"button"}
            className={"transition duration-150 hover:text-brown-900"}
            onClick={() => toggleEditUserForm(true)}
          >
            <Icon
              className={`${editUserFormActive && "text-green-600"}`}
              icon="material-symbols:edit-square-rounded"
            />
          </button>
        </div>
      </section>
      <section className={"flex w-full items-center justify-center "}>
        {editUserFormActive ? <EditUserForm /> : <UserInformation />}
      </section>
    </section>
  );
};

export default AccountPage;
