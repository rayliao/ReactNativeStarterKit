import React from 'react';
import {Button} from 'react-native';
import {Navigation, NavigationComponentProps} from 'react-native-navigation';

interface BtnProps extends NavigationComponentProps {
  title: string;
}

const Btn = (props: BtnProps) => {
  return (
    <Button
      title={props.title}
      onPress={() =>
        Navigation.updateProps('AppBtn', {
          title: 'ntB',
        })
      }
    />
  );
};

export default Btn;
