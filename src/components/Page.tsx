import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export const Page: FC<ViewProps> = props => {
  const {children, ...rest} = props;

  return (
    <View {...rest} style={[styles.container, rest.style]}>
      {children}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
});
