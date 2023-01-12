import React, { useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  useTheme,
} from '@chakra-ui/react'


function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = useState(5)

  const {
    colors
  } = useTheme()

  return (
    <Slider
      id='slider'
      defaultValue={0}
      min={0}
      max={100}
      onChange={(v) => setSliderValue(v)}
      marginTop={"50px"}
      focusThumbOnChange={false}
      colorScheme="rgba(252, 81, 133, 0.15)"
    >
      {/* {
        obj.map(valor.=> <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
        25%
      </SliderMark>)
      } */}
    <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
      25%
    </SliderMark>
    <SliderMark value={50} mt='1' ml='2.5' fontSize='sm'>
      50%
    </SliderMark>
    <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
      75%
    </SliderMark>
    <SliderTrack bg='rgba(252, 81, 133, 0.15)'>
      <SliderFilledTrack bg={colors.primary[300]} h="2px" />
    </SliderTrack>
    <Tooltip
      hasArrow
      bg='teal.500'
      color='white'
      placement='top'
      backgroundColor={colors.primary[300]}
      h="18px"
      fontSize={"10px"}
      isOpen={true}
      label={`${sliderValue}%`}

    >
      <SliderThumb borderColor={"#FC5185"} boxSize={3} />
    </Tooltip>
  </Slider>
  )
}

export default SliderThumbWithTooltip;
