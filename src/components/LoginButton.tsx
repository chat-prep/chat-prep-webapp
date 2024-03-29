import type { NextPage } from "next";

type LoginButton ={
    text: String
    onClick?: () => void;
}

const LoginButton: NextPage<LoginButton> = ({text, onClick}) => {
    return (
        <div className="h-[7vh] w-[18vw] bg-darkslategray font-bold text-goldenrod text-xl flex justify-center items-center border-goldenrod border rounded-xl">
            {text}
      </div>
    );
  };
  
  export default LoginButton;