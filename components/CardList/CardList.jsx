// react redux
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ items, bgColor, color, textAlign }) => {
  const authSelector = useSelector((state) => state.auth);

  return (
    <>
      {items.map((item) => (
        <Card
          bgColor={bgColor}
          key={item.id}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          color={color}
          textAlign={textAlign}
        />
      ))}
    </>
  );
};
export default CardList;
