import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header.tsx';
import Colors from '../../styles/Colors.ts';
import {
  buter,
  sendvich,
  burders,
  social,
  Product,
} from '../../utils/commonLists.ts';
import {
  addProductToBasketBers,
  decreaseProductQuantityBers,
  shopMyBookSelector,
  visibleItemsBers,
} from '../../store/shop/bersSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/Counter.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenuBers = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { items, itemBasket } = useSelector(shopMyBookSelector);
  const [selectedOption, setSelectedOption] = useState('4');

  useEffect(() => {
    const getProducts = (): Product[] => {
      switch (selectedOption) {
        case '1':
          return burders;
        case '2':
          return social;
        case '3':
          return buter;
        case '4':
          return sendvich;
        default:
          return [];
      }
    };

    // Отображаемые данные
    const products = getProducts();

    dispatch(visibleItemsBers(products));
  }, [selectedOption, dispatch]);
  return (
    <SafeAreaView
      edges={['top']}
      style={{ flex: 1, backgroundColor: Colors.background }}
    >
      <Header />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.containerPadding}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => setSelectedOption('1')}
              activeOpacity={0.8}
              style={
                selectedOption === '1'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedOption === '1'
                    ? { color: Colors.white }
                    : { color: Colors.black },
                ]}
              >
                Классические бургеры
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption('2')}
              activeOpacity={0.8}
              style={
                selectedOption === '2'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedOption === '2'
                    ? { color: Colors.white }
                    : { color: Colors.black },
                ]}
              >
                Специальные бургеры
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption('3')}
              activeOpacity={0.8}
              style={
                selectedOption === '3'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedOption === '3'
                    ? { color: Colors.white }
                    : { color: Colors.black },
                ]}
              >
                Закуски и дополнения
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedOption('4')}
              activeOpacity={0.8}
              style={
                selectedOption === '4'
                  ? styles.selectedButton
                  : styles.unselectedButton
              }
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedOption === '4'
                    ? { color: Colors.white }
                    : { color: Colors.black },
                ]}
              >
                Сэндвичи
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={items}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={item.image}
                resizeMode="cover"
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <View style={styles.itemFooter}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.price} $</Text>
                  </View>
                  {itemBasket.some(
                    (basketItem) => basketItem.product.id === item.id
                  ) ? (
                    <Counter
                      quantity={
                        itemBasket.find(
                          (basketItem) => basketItem.product.id === item.id
                        )?.quantity
                      }
                      onIncrement={() =>
                        dispatch(addProductToBasketBers(item))
                      }
                      onDecrement={() =>
                        dispatch(decreaseProductQuantityBers(item.id))
                      }
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => dispatch(addProductToBasketBers(item))}
                      style={styles.addButton}
                    >
                      <Text style={styles.addButtonText}>В КОРЗИНУ</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  rowContainer: {
    width: '100%',
  },
  selectedButton: {
    backgroundColor: Colors.redButton,
    paddingVertical: 10,
    borderRadius: 100,
    width: '100%',
    marginBottom: 6,
  },
  unselectedButton: {
    marginBottom: 6,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.redButton,
    paddingVertical: 10,
    borderRadius: 30,
    width: '100%',
  },
  buttonText: {
    color: Colors.redButton,
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 200,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  itemImage: {
    width: 140,
    height: '100%',
    borderRadius: 12,
  },
  itemDetailsContainer: {
    width: '100%',
    flex: 1,
    padding: 6,
  },
  itemTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },
  itemDescription: {
    color: 'gray',
    fontSize: 8,
    marginBottom: 4,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    borderRadius: 100,
    backgroundColor: Colors.redButton,
    padding: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.white,
  },
  addButton: {
    backgroundColor: Colors.redButton,
    borderRadius: 100,
    width: '60%',
    padding: 2,
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.white,
  },
});
export default MenuBers;
