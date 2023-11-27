interface Props {
  setRole: React.Dispatch<React.SetStateAction<string>>;
  role: string;
}

const RoleSelection = (props: Props) => {
  return (
    <div className="role-selection">
      <label className="first-role-label">
        Admin
        <input
          className="role-input"
          type="radio"
          name="role"
          value="admin"
          onChange={() => props.setRole("admin")}
        />
      </label>
      <label>
        User
        <input
          className="role-input"
          type="radio"
          name="role"
          value="user"
          onChange={() => props.setRole("user")}
          checked={props.role === "user"}
        />
      </label>
    </div>
  );
};

export default RoleSelection;
