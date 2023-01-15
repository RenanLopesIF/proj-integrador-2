import IconeUser from "../../components/iconeUser";
import CustomSlider from "./../../components/CustomSlider"
import { Box, Flex, Heading, useTheme, Text  } from "@chakra-ui/react";
function ConfigPage() {

  const {colors} = useTheme();

  const data = [
    {label: "80km", value: 80},
    {label: "50km", value: 50},
    {label: "30km", value: 30}
  ]

  const data1 = [
    {label: "80d", value: 80},
    {label: "50d", value: 50},
    {label: "30d", value: 30}
  ]

  return (
    <Flex flexDirection={"column"} alignItems="flex-end" justifyContent={"flex-end"} gap="30px" paddingTop={"16px"}>
      <IconeUser />
      <Box bg={"#FFFFFF"} width="96%" height={"90vh"} borderTopLeftRadius="20px" borderEndStartRadius={"20px"} padding={"20px 50px"}>
        <Heading
          as={"h2"}
          fontWeight="700"
          fontSize={"40px"}
          lineHeight="58px"
          color={"azulClaro.800"}
        >Configurações</Heading>
        <Flex marginTop="35px" flexDirection={"column"}>
          <Box width="70%" marginBottom={"75px"} h="120px" paddingRight={"60px"} bg={"cinza.50"}>
            <Text fontWeight={"400"} fontSize="24px" lineHeight={"29px"} color="azulClaro.900">Distância máxima do evento:</Text>
            <CustomSlider data={data} acronymDistance="km"/>
          </Box>
          <Box width="70%" h="120px" paddingRight={"60px"} bg={"cinza.50"}>
            <Text fontWeight={"400"} fontSize="24px" lineHeight={"29px"} color="azulClaro.900">Exiber eventos em até:</Text>
            <CustomSlider data={data1} acronymDistance="d"/>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ConfigPage;
