import React, { type FC } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToBasketBers,
  decreaseProductQuantityBers,
  removeProductFromCart,
  shopMyBookSelector,
} from '../../store/shop/bersSlice.ts';
import Counter from '../../components/Counter.tsx';
import Colors from '../../styles/Colors.ts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';
import { IconComponent } from '../../components/icon/IconComponent.tsx';

interface BasketScreenProps {}

const Cart: FC<BasketScreenProps> = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { itemBasket, totalCount } = useSelector(shopMyBookSelector);

  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: Colors.background }}>
      <Header />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <FlatList
          data={itemBasket}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.redButton,
                  fontSize: 28,
                  fontWeight: '700',
                }}
              >
                В КОРЗИНЕ ПУСТО...
              </Text>
              <View
                style={{
                  backgroundColor: Colors.redButton,
                  width: '100%',
                  alignItems: 'center',
                  paddingTop: 20,
                  justifyContent: 'center',
                }}
              >
                <IconComponent
                  icon="karzinaPusta"
                  style={{ width: 200, height: 200, marginVertical: 20 }}
                />
              </View>
            </View>
          }
          keyExtractor={(item) => `${item.product.id}`}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={item.product.image}
                resizeMode="cover"
                style={styles.itemImage}
              />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemTitle}>{item.product.name}</Text>
                <Text style={styles.itemDescription}>
                  {item.product.description}
                </Text>
                <View style={styles.itemFooter}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>{item.product.price} $</Text>
                  </View>
                  {itemBasket.some(
                    (basketItem) => basketItem.product.id === item.product.id
                  ) ? (
                    <Counter
                      quantity={
                        itemBasket.find(
                          (basketItem) =>
                            basketItem.product.id === item.product.id
                        )?.quantity
                      }
                      onIncrement={() =>
                        dispatch(addProductToBasketBers(item.product))
                      }
                      onDecrement={() =>
                        dispatch(decreaseProductQuantityBers(item.product.id))
                      }
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() =>
                        dispatch(addProductToBasketBers(item.product))
                      }
                      style={styles.addButton}
                    >
                      <Text style={styles.addButtonText}>В КОРЗИНУ</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() =>
                      dispatch(removeProductFromCart(item.product.id))
                    }
                    activeOpacity={0.8}
                  >
                    <IconComponent
                      icon={'remove'}
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
        {itemBasket.length !== 0 && (
          <Text
            style={{
              paddingHorizontal: 70,
              color: Colors.black,
              fontSize: 20,
              fontWeight: '700',
            }}
          >
            Сума к оплате {totalCount} $
          </Text>
        )}
        <View
          style={{
            alignSelf: 'center',
            paddingHorizontal: 56,
            width: '100%',
            marginBottom: 20,
            paddingTop: 12,
            backgroundColor: Colors.white,
            zIndex: 999,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (itemBasket.length === 0) {
                Navigation.navigate(Screens.MAIN_APP);
              } else {
                Navigation.navigate(Screens.BASKET_SUCCESS);
              }
            }}
            activeOpacity={0.8}
            style={{
              borderRadius: 30,
              backgroundColor: Colors.redButton,
              paddingVertical: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{ color: Colors.white, fontSize: 26, fontWeight: '900' }}
            >
              {itemBasket.length === 0 ? 'НА ГЛАВНУЮ' : 'ЗАКАЗАТЬ'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: 20,
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  itemImage: {
    width: 160,
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
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
    color: Colors.white,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.redButton,
    borderRadius: 8,
    width: '70%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.white,
  },
});
export default Cart;
