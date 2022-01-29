import s from "./Button.module.css";

const UploadContentButton = ({ text, onClick, disabled }) => {

  return (
    <div className={s.btnWrapper}>
      <button type='button' className={s.btn} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default UploadContentButton;
