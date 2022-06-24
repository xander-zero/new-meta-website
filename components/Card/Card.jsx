import Typography from "../Typography/Typography";
import { CardContent, CardImg, Icon, Space } from "./cardStyle";

const Card = ({ icon, title, desc, bgColor, color, textAlign, colorDesc }) => {
  return (
    <CardContent bgColor={bgColor}>
      <CardImg>
        <Icon>{icon}</Icon>
      </CardImg>
      <Space>
        <Typography weight="bold" size="18px" color={color}>
          {title}
        </Typography>
      </Space>
      <Typography
        size="12px"
        weight="400"
        color={colorDesc ? colorDesc : "#fff"}
        textAlign={textAlign}
      >
        {desc}
      </Typography>
    </CardContent>
  );
};

export default Card;
