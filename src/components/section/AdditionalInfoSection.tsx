import {LongText} from '@internal/components/common';
import {ContentBox} from '@internal/components/template';
import HatImg from 'public/assets/hat.png';

export const AdditionalInfoSection = () => (
  <ContentBox
    _vStackProps={{bg: 'orange.600'}}
    _imageProps={{
      src: HatImg,
      alt: 'Chapéu caipira',
    }}
    imageAlign="left"
  >
    <LongText>
      Traje a rigor é <strong>opcional!</strong>
    </LongText>

    <LongText>
      Por favor confirme sua presença com <strong>uma semana</strong> de
      antecedência através dos contatos de <strong>Fernanda Rovetta</strong>{' '}
      e/ou <strong>Silvana</strong>
    </LongText>

    <LongText>
      O valor por pessoa será informado após a confirmação da quantidade de
      convidados
    </LongText>
  </ContentBox>
);
