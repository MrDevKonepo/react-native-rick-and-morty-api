import React, { Component } from 'react';
import { CharacterContainer, CharacterImage, CharacterText } from './style';  // Importando novos estilos

export default class Character extends Component {
    render() {
        const { imageUri, name } = this.props;  // Recebendo as props

        return (
            <CharacterContainer>
                {/* Renderizando a imagem */}
                <CharacterImage 
                    source={{ uri: imageUri }}
                />
                
                {/* Renderizando o nome */}
                <CharacterText>
                    {name}
                </CharacterText>
            </CharacterContainer>
        );
    }
}
