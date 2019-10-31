import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  padding: 20px;
  background: ${colors.header};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  color: #fff;
  background: ${colors.primary};
  min-height: 18px;
  min-width: 18px;
  font-size: 12px;
  line-height: 18px;
  border-radius: 9px;
  text-align: center;
  overflow: hidden;

  position: absolute;
  top: -8px;
  right: -8px;
`;
