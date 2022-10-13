import {Button} from "@chakra-ui/react";
import theme from "../../styles/theme";
import React from "react";


const PrimaryButton = ({children}: React.PropsWithChildren) => {
  return (
    <Button background={theme.colors.primary} color={theme.colors.white}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
