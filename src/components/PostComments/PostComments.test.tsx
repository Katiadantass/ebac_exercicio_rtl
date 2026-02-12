import { render, screen, fireEvent } from '@testing-library/react';
import Post from '.';

describe('PostComments', () => {
    it('deve renderizar o botão Comentar', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('deve permitir inserir dois comentários', () => {
        render(<Post />);

        const input = screen.getByTestId('campo-comentario');
        const botao = screen.getByTestId('botao-enviar');

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botao);

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botao);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});