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
  CharacterContainer,
  ProfileButton,
  ProfileButtonText,
  Name,
  CharacterImage
} from './style';

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
    const { cards, newCard } = this.state;
    this.setState({ loading: true });

    try {
      const response = await api.get(`/character/?name=${newCard}&status=alive`);

      if (response.status === 200 && response.data && response.data.results && response.data.results[0]) {
        const data = {
          id: response.data.results[0].id,
          name: response.data.results[0].name,
          status: response.data.results[0].status,
          image: response.data.results[0].image,
        };

        this.setState({
          cards: [...cards, data],
          newCard: '',
          loading: false,
        });

        Keyboard.dismiss();
      } else {
        this.setState({ loading: false });
        console.error('Request to API failed');
      }
    } catch (error) {
      this.setState({ loading: false });
      console.error('Error:', error);
    }
  };

  handleDetalhes = (id) => {
    console.log("Akiojjj");
  }

  handleRemoveCard = (id) => {
    const { cards } = this.state;
    const newCards = cards.filter(card => card.id !== id);
    this.setState({ cards: newCards });
  }

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
          keyExtractor={(card, index) => `${card.id}-${index}`}
          renderItem={({ item }) => (
            <CharacterContainer>
              <Name>{item.name}</Name>
              <CharacterImage source={{ uri: item.image }} />
              <ProfileButton onPress={() => this.handleDetalhes(item.id)}>
                <ProfileButtonText>Detalhes</ProfileButtonText>
              </ProfileButton>
              <ProfileButton onPress={() => this.handleRemoveCard(item.id)}>
                <ProfileButtonText>Remover</ProfileButtonText>
              </ProfileButton>
            </CharacterContainer>
          )}
        />
      </Container>
    );
  }
}
