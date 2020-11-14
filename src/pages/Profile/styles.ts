import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding: 0 25px 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 0}px 0 32px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  align-items: center;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  margin-bottom: 32px;
`;
