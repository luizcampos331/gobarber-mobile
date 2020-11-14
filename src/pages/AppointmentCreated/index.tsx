import React, { useCallback, useMemo } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
  provider: string;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    let weekday = format(routeParams.date, 'EEEE', { locale: ptBR });

    switch (weekday) {
      case 'segunda':
        weekday = 'Segunda-feira';
        break;
      case 'terça':
        weekday = 'Terça-feira';
        break;
      case 'quarta':
        weekday = 'Quarta-feira';
        break;
      case 'quinta':
        weekday = 'Quinta-feira';
        break;
      case 'sexta':
        weekday = 'Sexta-feira';
        break;
      case 'sábado':
        weekday = 'Sábado';
        break;
      default:
        weekday = 'Domingo';
        break;
    }

    return format(
      routeParams.date,
      `'${weekday}, dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h com ${routeParams.provider}'`,
      { locale: ptBR },
    );
  }, [routeParams.date, routeParams.provider]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>

      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>OK</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
