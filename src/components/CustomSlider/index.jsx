import React from 'react';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Tooltip, useTheme } from '@chakra-ui/react';

function CustomSlider({ data, acronymDistance, min, max, onChange, value = 1, isDisabled }) {
  const { colors } = useTheme();

  return (
    <Slider
      isDisabled={isDisabled}
      id="slider"
      defaultValue={0}
      min={min}
      max={max}
      onChange={(v) => onChange(v)}
      value={value}
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
        fontSize={'16px'}
        isOpen={true}
        label={value + acronymDistance}
      >
        <SliderThumb borderColor={'primary.300'} boxSize={3} />
      </Tooltip>
    </Slider>
  );
}

export default CustomSlider;
