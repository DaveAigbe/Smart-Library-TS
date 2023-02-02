import React, { FunctionComponent } from "react";

interface Props {}

const EditUserForm: FunctionComponent<Props> = () => {
  return (
    <section className={"text-main-txt"}>
      <h2 className={"mb-4 text-center text-xl font-bold"}>Edit Data</h2>
      <form className={"flex flex-col gap-2 text-left"}>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="email">Email: </label>
          <input name={"email"} className={" w-92 rounded p-1"} type="email" />
        </div>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="password">New Password: </label>
          <input
            name={"password"}
            className={" w-92 rounded p-1"}
            type="password"
          />
        </div>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            name={"confirmPassword"}
            className={" w-92 rounded p-1"}
            type="password"
          />
        </div>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="imageLink">Profile Image Link: </label>
          <input
            name={"imageLink"}
            className={" w-92 rounded p-1"}
            type="text"
            placeholder={"https://via.images.com/300.png "}
          />
        </div>
        <div className={"flex justify-between gap-2"}>
          <label htmlFor="currentPassword">Current Password: </label>
          <input
            name={"currentPassword"}
            className={" w-92 rounded p-1"}
            type="password"
          />
        </div>
        <button
          className={
            "mt-4 rounded bg-main-txt p-2 text-lg font-bold text-main-pg transition-all duration-150 ease-in-out hover:bg-brown-900"
          }
          type={"submit"}
        >
          Update🔄
        </button>
      </form>
    </section>
  );
};

export default EditUserForm;
