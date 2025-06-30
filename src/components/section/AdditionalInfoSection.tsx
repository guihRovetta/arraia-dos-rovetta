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
    <LongText textAlign="center">
      Traje a rigor é <strong>OPCIONAL!</strong>
    </LongText>

    <LongText textAlign="center">
      Início do Bingo: <strong>15h</strong>
    </LongText>

    <LongText textAlign="center">
      Confirmação e pagamento: <strong>ATÉ 13/07</strong>
    </LongText>

    <LongText textAlign="center">
      Pagamento via PIX: <strong>(Silvana)</strong>
    </LongText>

    <LongText textAlign="center">
      <strong>Menores de 6 anos NÃO </strong>pagam.
      <br />
      <strong>De 6 a 12 anos </strong>pagam <strong>R$15.</strong>
      <br />
      <strong>Acima de 12 anos </strong>pagam <strong>R$25.</strong>
    </LongText>
  </ContentBox>
);
