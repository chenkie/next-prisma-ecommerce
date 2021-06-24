interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="bg-purple-700 text-white rounded-full py-2 px-4 text-sm hover:bg-purple-800 shadow-md"
    >
      {props.text}
    </button>
  );
};

export default Button;
