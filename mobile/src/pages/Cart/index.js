import React from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {formatPrice} from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import colors from '../../styles/colors';

import {
  Container,
  Product,
  ProductInfoContainer,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductAmountActions,
  ProductAmountAction,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  FinishButton,
  FinishButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function renderProduct({item}) {
    return (
      <Product>
        <ProductInfoContainer>
          <ProductImage source={{uri: item.image}} />
          <ProductInfo>
            <ProductDetails>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
            </ProductDetails>
            <ProductDelete
              onPress={() => dispatch(CartActions.removeFromCart(item.id))}>
              <Icon name="delete-forever" size={24} color={colors.primary} />
            </ProductDelete>
          </ProductInfo>
        </ProductInfoContainer>

        <ProductControls>
          <ProductAmountActions>
            <ProductAmountAction onPress={() => decrement(item)}>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductAmountAction>
            <ProductAmount value={String(item.amount)} />
            <ProductAmountAction onPress={() => increment(item)}>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductAmountAction>
          </ProductAmountActions>
          <ProductSubtotal>{item.subtotal}</ProductSubtotal>
        </ProductControls>
      </Product>
    );
  }

  return (
    <Container>
      {products.length === 0 ? (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      ) : (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={renderProduct}
          />
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>

            <FinishButton>
              <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
            </FinishButton>
          </TotalContainer>
        </>
      )}
    </Container>
  );
}
