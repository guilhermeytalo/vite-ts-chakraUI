import { Heading, Text} from "@chakra-ui/react";
import theme from "../styles/theme";

const Header = () => {
    return (
        <Heading>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
        </Heading>
    );
};

export default Header;
