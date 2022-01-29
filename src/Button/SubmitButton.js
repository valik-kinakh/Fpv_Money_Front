import s from "./Button.module.css";

const SubmitButton = ({ text }) => {
  return (
    <div className={s.btnWrapper}>
      <button type="submit" className={s.btn}>
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
