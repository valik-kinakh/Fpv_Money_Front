import s from "./Button.module.css";

const Button = ({ type, text, onClick, page = 0 }) => {
  const handleClick = () => {
    onClick(page);
  };

  return (
    <div className={s.btnWrapper}>
      <button type={type} className={s.btn} onClick={() => handleClick()}>
        {text}
      </button>
    </div>
  );
};

export default Button;
