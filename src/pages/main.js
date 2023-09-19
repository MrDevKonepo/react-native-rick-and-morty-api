import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  CharacterContainer,  // Adicionado
  ProfileButton,
  ProfileButtonText,
  Name                  // Adicionado
} from './style';
import Character from './character';

export default class Main extends Component {
  state = {
    newCard: '',
    cards: [],
    loading: false,
  };

  async componentDidMount() {
    const cards = await AsyncStorage.getItem('cards');

    if (cards) {
      this.setState({ cards: JSON.parse(cards) });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { cards } = this.state;

    if (prevState.cards !== cards) {
      await AsyncStorage.setItem('cards', JSON.stringify(cards));
    }
  }

  handleAddCard = async () => {
    try {
      const { cards, newCard } = this.state;
      this.setState({ loading: true });

      const response = await api.get(`/character/?name=${newCard}`);

      if (response.status === 200) {
        const data = {
          id: response.data.id,
          name: response.data.name,
          status: response.data.status,
          image: response.data.image,
        };

        this.setState({
          cards: [...cards, data],
          newCard: '',
          loading: false,
        });

        Keyboard.dismiss();
      } else {
        console.error('Falha na solicitação para a API');
        this.setState({ loading: false });
      }
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({ loading: false });
    }
  };

  render() {
    const { cards, newCard, loading } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Card"
            value={newCard}
            onChangeText={text => this.setState({ newCard: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCard}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCard}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>
        <List
  showsVerticalScrollIndicator={false}
  data={cards}
  //keyExtractor={(item) => item.id.toString()}
  keyExtractor={(item) => (item && item.id ? item.id.toString() : 'fallback-key')}
  renderItem={({ item }) => {
    return (
      <CharacterContainer>
        <Name>{item.name}</Name>
        <ProfileButton
          onPress={() => {
            // Implemente a ação quando o botão for pressionado
          }}
        >
          <ProfileButtonText>Ver Detalhes</ProfileButtonText>
        </ProfileButton>
        <ProfileButton
          onPress={() => {
            this.setState({
              cards: this.state.cards.filter(card => card.id !== item.id),
            });
          }}
          style={{ backgroundColor: '#FFC0CB', borderRadius: 10 }}
        >
          <ProfileButtonText>Excluir</ProfileButtonText>
        </ProfileButton>
      </CharacterContainer>
    );
  }}
/>
      </Container>
    );
  }
}
