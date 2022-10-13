import { Heading, Text} from "@chakra-ui/react";
import theme from "../styles/theme";
import PrimaryButton from "./atoms/primaryButton";

const Header = () => {
    const text = 'test';
    return (
        <Heading>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
            <Text align="center" color={theme.colors.primary}>banquee.</Text>
          <PrimaryButton>
            {text}
          </PrimaryButton>
        </Heading>
    );
};

export default Header;
