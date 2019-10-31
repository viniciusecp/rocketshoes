import React from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

function Cart({products}) {
  function renderProduct({item}) {
    return (
      <Product>
        <ProductInfoContainer>
          <ProductImage
            source={{
              uri: item.image,
            }}
          />
          <ProductInfo>
            <ProductDetails>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={24} color={colors.primary} />
            </ProductDelete>
          </ProductInfo>
        </ProductInfoContainer>

        <ProductControls>
          <ProductAmountActions>
            <ProductAmountAction>
              <Icon
                name="remove-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductAmountAction>
            <ProductAmount value={String(item.amount)} />
            <ProductAmountAction>
              <Icon
                name="add-circle-outline"
                size={20}
                color={colors.primary}
              />
            </ProductAmountAction>
          </ProductAmountActions>
          <ProductSubtotal>R$539,70</ProductSubtotal>
        </ProductControls>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>R$1820,23</TotalPrice>

        <FinishButton>
          <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
        </FinishButton>
      </TotalContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
