import React, { useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  useTheme,
  Box
} from '@chakra-ui/react'

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = useState(5)

  const {
    colors
  } = useTheme()

  return (
    <Slider
      id='slider'
      defaultValue={5}
      min={0}
      max={100}
      onChange={(v) => setSliderValue(v)}
      marginTop={"50px"}
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
    <SliderTrack>
      <SliderFilledTrack bg={colors.primary[300]}/>
    </SliderTrack>
    <Tooltip
      hasArrow
      bg='teal.500'
      color='white'
      placement='top'
      isOpen={true}
      label={`${sliderValue}%`}
    >
      <SliderThumb />
    </Tooltip>
  </Slider>
  )
}

export default SliderThumbWithTooltip;
