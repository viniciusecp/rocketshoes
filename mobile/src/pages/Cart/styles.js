import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;

  flex: 1;
`;

export const Product = styled.View`
  /* background: #eee; */
  margin-bottom: 20px;
`;

export const ProductInfoContainer = styled.View`
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
`;

export const ProductDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #666;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  font-size: 22px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
  align-self: center;
  padding: 5px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;
`;

export const ProductAmountActions = styled.View`
  flex-direction: row;
`;

export const ProductAmountAction = styled.TouchableOpacity`
  justify-content: center;
  padding: 0 5px;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 0 10px;
  margin: 0 5px;
  border: 1px solid #999;
  border-radius: 4px;
  min-width: 40px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #ccc;
  font-size: 22px;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const FinishButton = styled(RectButton)`
  align-self: stretch;
  align-items: center;
  background: ${colors.primary};
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
`;

export const FinishButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
