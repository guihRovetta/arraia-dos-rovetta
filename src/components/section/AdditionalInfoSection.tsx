import {LongText} from '@internal/components/common';
import {ContentBox} from '@internal/components/template';
import HatImg from 'public/assets/hat.png';

export const AdditionalInfoSection = () => (
  <ContentBox
    _vStackProps={{bg: 'red.500'}}
    _imageProps={{
      src: HatImg,
      alt: 'Chapéu caipira',
    }}
    imageAlign="left"
  >
    <LongText>
      Traje a rigor é <strong>OPCIONAL!</strong>
    </LongText>

    <LongText textAlign="justify">
      Por favor confirme sua presença com <strong>15 DIAS</strong> de
      antecedência através dos contatos de <strong>Fernanda Rovetta</strong> ou{' '}
      <strong>Silvana Rovetta</strong>
    </LongText>

    <LongText textAlign="justify">
      O valor por pessoa será informado após a confirmação da quantidade de
      convidados
    </LongText>
  </ContentBox>
);
