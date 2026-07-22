import TextType from "./TextType";
import {useTheme} from "../context/ThemeContext";
function Gener(){
    const { theme } = useTheme();
    return(
       
     <div className="flex gap-4 py-16 px-4 ml-0 mt-0">

  <div className="h-14 w-1 rounded-full bg-red-600"></div>

  <TextType
    text={["What is your Mood Today ?"]}
    typingSpeed={80}
    loop={false}
    showCursor={false}
    className={`text-4xl font-extrabold ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
  />

</div>
    );
}
export default Gener;