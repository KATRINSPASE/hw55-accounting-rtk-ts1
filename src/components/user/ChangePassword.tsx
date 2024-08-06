import { useState } from "react"
import { changePasswordFetch } from "../../features/actions/accountAction"
import { useAppDispatch } from "../../app/hooks"


interface Props {
  setUpdateAction: (name: string) => void
}

const ChangePassword = ({ setUpdateAction }: Props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  async function handleClickChangePassword() {
    if (newPassword1 !== newPassword2) {
      setErrorMessage("New passwords don't match.");
      return;
    }
    try {
      await dispatch(changePasswordFetch({
        oldPassword,
        newPassword: newPassword1,
      })).unwrap();
      setErrorMessage(null);
      setUpdateAction("Profile");
    } catch (e) {
      setErrorMessage("Failed to change password. Please check your old password.");
    }
  }

  function handleClickClear() {
    setOldPassword("");
    setNewPassword1("");
    setNewPassword2("");
    setErrorMessage(null);
  }

  function handleClickBack() {
    setUpdateAction("Profile");
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <h3>Create new password</h3>
          </div>
        </div>
      </div>
      <div className="row gy-3 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-1">

            <input
              type="password"
              className="form-control border-2"
              name="oldPassword"
              id="oldPassword"
              placeholder="Old Password"
              required
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value.trim())}
            />
            <label htmlFor="oldPassword" className="pass form-label">Enter old password</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">

            <input
              type="password"
              className="form-control border-2"
              name="newPassword1"
              id="newPassword1"
              value={newPassword1}
              onChange={e => setNewPassword1(e.target.value.trim())}
            />
            <label htmlFor="newPassword1" className=" pass form-label"> Enter new password </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-1">
                        <input
              type="password"
              className="form-control border-2"
              name="newPassword2"
              id="newPassword2"
              value={newPassword2}
              onChange={e => setNewPassword2(e.target.value.trim())}
            />
            <label htmlFor="newPassword2" className="pass form-label">Repeat new password</label>
          </div>
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className="col-12">
          <div className="d-grid">
            <button onClick={handleClickChangePassword} className="btn bsb-btn-3xl btn-primary py-3" type="button">Change Password</button>
          </div>
        </div>
        <div className="d-grid">
        <button className="btn bsb-btn-3xl btn-primary py-3" type="submit" onClick={handleClickClear}>Clear</button>
        </div>
       <div className="d-grid">
        <button className="btn bsb-btn-3xl btn-primary py-3" type="submit" onClick={handleClickBack}>Back</button>
      </div>
      </div>
    </div>
  );
};

export default ChangePassword;