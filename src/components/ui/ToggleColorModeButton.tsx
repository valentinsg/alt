import { Button } from "./button";
import { useColorMode } from "./color-mode";

const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Button onClick={toggleColorMode}>
      Cambiar a {colorMode === "light" ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleColorModeButton;