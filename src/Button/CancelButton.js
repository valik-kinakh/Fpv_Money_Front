import s from "./CancelButton.module.css";

const CancelButton = ({ text, onClick, disabled }) => {

  return (
    <div className={s.btnWrapper}>
      <button type='button' className={s.btn} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default CancelButton;