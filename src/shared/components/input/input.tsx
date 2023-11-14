import { TextInputProps, TouchableOpacity } from 'react-native';
import { Container, InputContainer, Label, Recovery } from './input.styles';

interface InputProps extends TextInputProps {
    label?: string,
    recovery?: boolean,
}

const Input = ({ recovery, label, ...props }: InputProps) => {
    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer {...props} />
            {recovery &&
                <TouchableOpacity>
                    <Recovery>Esqueci minha senha</Recovery>
                </TouchableOpacity>
            }
        </Container>
    );
};

export default Input;
