import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #666;

  margin-bottom: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;

  margin-top: auto;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  background: ${colors.primary};
  border-radius: 4px;
  overflow: hidden;

  margin-top: 10px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;

  align-items: center;
`;

export const ProductAmountText = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 16px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  align-self: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
