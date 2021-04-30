import React, {useEffect, useState} from 'react';
import codePush from 'react-native-code-push';
import auth from '@react-native-firebase/auth';
// import { Navigation } from 'react-native-navigation';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

const Provider: React.FC<{}> = props => {
  // const [user, setUser] = useState<any>();
  const [init, setInit] = useState(true);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(u => {
      // setUser(u);
      // Navigation.se
      if (init) {
        setInit(false);
      }
    });
    return subscriber;
  }, [init]);
  if (init) {
    return null;
  }
  return <>{props.children}</>;
};

export default codePush(codePushOptions)(Provider);
