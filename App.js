/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Torch from "react-native-torch";
import RNshake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleChangToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //ligar flash do celular
   Torch.switchState(toggle);
  }, [toggle]);
  
  useEffect(() => {
    const subscription = RNshake.addListener(() => {
      // eslint-disable-next-line no-const-assign
      setToggle = (oldToggle => !oldToggle);
    });
    //Essa função vai ser chamada quando o componente
    //for ser desmontado
    return () => subscription.remove();
  }, []);

  return (
            <View style={toggle ? style.containerLight : style.container} >
              <TouchableOpacity onPress={handleChangToggle}>
                <Image 
                style={toggle ? style.lightingOn : style.lightingOff} 
                source={toggle
                        ? require('./assets/icons/acesa.png')
                        : require('./assets/icons/apagado-offf.png')
                      }
                />
                <Image 
                style={style.dioLogo} 
                source={toggle
                        ? require('./assets/icons/logo-aceso.png')
                        : require('./assets/icons/logo-apagado-white.png')
                      }
                />
              </TouchableOpacity>
          </View>
        );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'brack',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tinColor: 'green',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});
