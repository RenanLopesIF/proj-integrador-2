import IconeUser from "../../components/iconeUser";
import CustomSlider from "./../../components/CustomSlider"
import { Box, Flex, Heading, useTheme, Text  } from "@chakra-ui/react";
function ConfigPage() {

  const {colors} = useTheme();

  const data = [
    {label: "0km", value: 0},
    {label: "50km", value: 50},
    {label: "100km", value: 100}
  ]

  const data1 = [
    {label: "80d", value: 1},
    {label: "182d", value: 182},
    {label: "365d", value: 365}
  ]

  return (
    <Flex flexDirection={"column"} alignItems="flex-end" justifyContent={"flex-end"} gap="30px" paddingTop={"16px"} height="100%">
      <IconeUser />
      <Box bg={"#FFFFFF"} width="96%" height={"100%"} borderTopLeftRadius="20px" padding={"20px 50px"}>
        <Heading
          as={"h2"}
          fontWeight="700"
          fontSize={"40px"}
          lineHeight="58px"
          color={"secondary.600"}
        >Configurações</Heading>
        <Flex marginTop="35px" flexDirection={"column"}>
          <Box width="100%" marginBottom={"75px"} h="140px" padding={"15px 60px 0 30px"} bg={"cinza.50"} borderRadius="5px">
            <Text fontWeight={"400"} fontSize="24px" lineHeight={"29px"} color="azulClaro.900">Distância máxima do evento:</Text>
            <CustomSlider data={data} acronymDistance="km" min={0} max={100}/>
          </Box>
          <Box width="100%" h="140px" padding={"15px 60px 0 30px"} bg={"cinza.50"} borderRadius="5px">
            <Text fontWeight={"400"} fontSize="24px" lineHeight={"29px"} color="azulClaro.900">Exiber eventos em até:</Text>
            <CustomSlider data={data1} acronymDistance="d" min={1} max={365}/>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ConfigPage;
