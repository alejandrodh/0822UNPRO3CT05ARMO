import ProductsList from "./src/screens/ProductsList";
import ProductsAll from "./src/screens/ProductsAll";
import {View} from 'react-native';

function App() {
  return ( 
      <View>
         <ProductsList />
         <ProductsAll />
      </View>
   );
}

export default App
