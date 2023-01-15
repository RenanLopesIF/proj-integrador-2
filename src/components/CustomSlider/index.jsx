import React, { useState } from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, useTheme } from '@chakra-ui/react';

function CustomSlider(props) {
  const { data, acronymDistance } = props;
  const [sliderValue, setSliderValue] = useState(5);

  const { colors } = useTheme();

  return (
    <Slider
      id="slider"
      defaultValue={0}
      min={0}
      max={100}
      onChange={(v) => setSliderValue(v)}
      marginTop={'50px'}
      focusThumbOnChange={false}
    >
      {data.map((valor, idx) => (
        <SliderMark key={idx} value={valor.value} mt="1" mr="-2.5" fontSize="sm">
          {valor.label}
        </SliderMark>
      ))}

      <SliderTrack bg="rgba(252, 81, 133, 0.15)">
        <SliderFilledTrack bg={colors.primary[300]} h="2px" />
      </SliderTrack>
      <Tooltip
        hasArrow
        color="white"
        placement="top"
        backgroundColor={colors.primary[300]}
        h="18px"
        fontSize={'10px'}
        isOpen={true}
        label={sliderValue + acronymDistance}
      >
        <SliderThumb borderColor={'primary.300'} boxSize={3} />
      </Tooltip>
    </Slider>
  );
}

export default CustomSlider;
