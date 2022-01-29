import s from "./SortUsers.module.css";

const SortUsers = ({ text, onClick, disabled }) => {

    return (
        <div className={s.btnWrapper}>
            <button type='button' className={s.btn} onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </div>
    );
};

export default SortUsers;
