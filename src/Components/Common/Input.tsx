import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

interface InputProps extends ChakraInputProps {
  label: string;
  rightElement?: React.ReactNode;
  type?: string;
  containerProps?: any;
}

const Input = ({
  label,
  type = "text",
  containerProps,
  rightElement,
  ...args
}: InputProps) => {
  return (
    <FormControl
      display={"flex"}
      flexDir={["row"]}
      gap={"20px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...containerProps}
    >
      <FormLabel fontWeight={400} fontSize={"sm"}>
        {label}
      </FormLabel>
      <InputGroup
        width={"auto"}
        minW={["120px", "250px"]}
        borderRadius={"8px"}
        overflow={"hidden"}
      >
        <ChakraInput
          fontSize={"sm"}
          _placeholder={{
            fontSize: "xs",
          }}
          borderRadius={"8px"}
          pr="4.5rem"
          type={type}
          placeholder={`Enter ${label}`}
          {...args}
        />
        <InputRightElement width="auto" pointerEvents="none">
          {rightElement}
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default Input;
