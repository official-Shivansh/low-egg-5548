import { NavLink } from "react-router-dom";
import { ButtonGroup,Text} from "@chakra-ui/react";

const links = [
    {
      path: "/main",
      title: "Dashboard",
    },
    {
      path: "/status",
      title: "Status",
    },
    {
        path: "/medicine",
        title: "Medicine",
     },
    {
      path: "/aboutus",
      title: "About Us",
    }
  ];


const navbar =()=>{
 return (
   
    <ButtonGroup>
          {links.map((item) => {
            return (
              <NavLink
                // style={({ isActive }) =>
                //   isActive ? activeStyle : defaultStyle
                // }
                key={item.path}
                to={item.path}
              >
                <Text
                  fontSize="20px"
                  p={6}
                  as="b"
                >
                  {item.title}
                </Text>
              </NavLink>
            );
          })}
    </ButtonGroup>
 )
}
export default navbar
