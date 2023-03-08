import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type RatingProps = {
  numberOfRating: number;
  activeIndex?: number;
  icon?: string;
  activeIcon?: string;
  size?: number;
  color?: string;
  activeColor?: string;
  onChangeRating?: (index: number) => void;
};

const Rating: FC<RatingProps> = (props) => {
  const {
    numberOfRating = 0,
    activeIndex = -1,
    icon = 'star-outline',
    activeIcon = 'star',
    size = 16,
    color = '#D3D3D3',
    activeColor = '#FFFF00',
    onChangeRating,
  } = props;

  const renderItem = (index: number) => {
    const isActive = index <= activeIndex;
    const iconName = isActive ? activeIcon : icon;
    const iconColor = isActive ? activeColor : color;

    return (
      <Pressable
        key={`rating-item-${index}`}
        onPress={() => onChangeRating?.(index)}
      >
        <Icon
          style={styles.itemRatingContainer}
          name={iconName}
          size={size}
          color={iconColor}
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {new Array(numberOfRating).fill('').map((_, index) => renderItem(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  itemRatingContainer: {
    marginHorizontal: 4,
  },
});

export default Rating;
