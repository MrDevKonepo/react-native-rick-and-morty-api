import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    border: 1px solid #d3d3d3;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #3498db;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.6 : 1)}
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Name = styled.Text`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 8px;
    text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Header = styled.View`
    padding-top: 30px;
    align-itens: center;
    justify-content: center;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold
    color: #333;
`;

export const Author = styled.Text`
    font-size: 13px;
    color: #666;
    margin-top: 2px;
`;

export const CharacterImage = styled.Image`
    width: 120px;
    height: 120px;
    border-radius: 32px;
    background: #eee;
    alignSelf: center;
`;

export const Caracter = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const CharacterContainer = styled.View`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 4px;
    text-align: center;
`;
