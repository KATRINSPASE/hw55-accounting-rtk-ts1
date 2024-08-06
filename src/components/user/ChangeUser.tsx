import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { changeUserFetch } from "../../features/actions/accountAction"

interface Props {
  setUpdateAction: (name: string) => void
}

const ChangeUser = ({ setUpdateAction }: Props) => {
  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const dispatch = useAppDispatch();

  function handleClickSave() {
    dispatch(changeUserFetch({
      firstName: newFirstName,
      lastName: newLastName
    }))
    setUpdateAction("Profile");
  }

  function handleClickClear() {
    setNewFirstName("")
    setNewLastName("")
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
          <h3>Create a new user name</h3>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="col-12">
            <div className="form-floating mb-1">
                <input type={"text"}
               onChange={e => setNewFirstName(e.target.value.trim())}
              value={newFirstName}
              className="form-control border-2" name="name" id="name"
              placeholder="New user name" required />
              <label form="newName" className="user form-label">New first name</label>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-12">
              <div className="form-floating mb-1">
                <input type={"text"}
                       onChange={e => setNewLastName(e.target.value.trim())}
                       value={newLastName}
                       className="form-control border-2" name="name" id="name"
                       placeholder="New user lastname" required  />
                <label form="lastname" className="user form-label">New last name</label>
              </div>
            </div>
          </div>
        <div className="col-12">
        <div className="d-grid">
                <button className="btn bsb-btn-3xl btn-primary py-3" type="submit" onClick={handleClickSave}>Save</button>
        </div>
        </div>
      <div className="col-12">
        <div className="d-grid">
                <button className="btn bsb-btn-3xl btn-primary py-3" type="submit" onClick={handleClickClear}>Clear</button>
        </div>
      </div>
      <div className="col-12">
        <div className="d-grid">
                <button className="btn bsb-btn-3xl btn-primary py-3" type="submit" onClick={() =>
                  setUpdateAction("Profile")}>Back
                </button>
        </div>
      </div>
              </div>


            )
            }

            export default ChangeUser