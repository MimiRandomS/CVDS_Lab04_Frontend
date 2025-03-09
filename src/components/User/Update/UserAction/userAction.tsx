
import ChangeName from "../ChangeName/changeName";
import ChangePassword from "../ChangePassword/changePassword";
import DeleteAccount from "../DeleteAccount/deleteAccount";

function UserActions() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
        gap:"1rem"
      }}
    >
      <h1>User Actions</h1>
      <ChangeName></ChangeName>
      <ChangePassword></ChangePassword>
      <DeleteAccount></DeleteAccount>
    </div>
  );
}

export default UserActions;
