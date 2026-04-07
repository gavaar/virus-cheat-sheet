import { Card, Expansion } from '../types';

export const CARDS: { [key: string]: Card } = {
  aparicion: {
    id: 'aparicion',
    title: 'Aparicion',
    icon: 'aparicion',
    description: 'Cambia esta carta por la última que haya sobre la pila de descartes. Después, puedes jugar esa carta o quedártela en la mano.',
    expansion: Expansion.Halloween,
  },
  cambioDeCuerpos: {
    id: 'cambioDeCuerpos',
    title: 'Cambio de cuerpos',
    icon: 'cambio-de-cuerpos',
    description: 'El jugador que use esta carta escoge un sentido (horario o antihorario). Todos los jugadores pasan su cuerpo completo al jugador sentado a su lado siguiendo el sentido elegido.',
    expansion: Expansion.Halloween,
  },
  contagio: {
    id: 'contagio',
    title: 'Contagio',
    icon: 'contagio',
    description: 'Traslada tantos virus como puedas de tus órganos infectados a los órganos de los demás jugadores. No puedes utilizar el contagio sobre órganos vacunados o infectados, sólo podrás contagiar órganos libres.',
    expansion: Expansion.Virus,
  },
  cuarentena: {
    id: 'cuarentena',
    title: 'Cuarentena',
    icon: 'cuarentena',
    description: 'Retira del juego una carta de virus. Cura un virus básico o evolucionado y guarda esa carta en el interior de la caja (zona de cuarentena). La carta retirada permanecerá fuera del juego durante el resto de la partida. ¡No olvides recuperar esas cartas para la siguiente partida!',
    expansion: Expansion.Virus2,
  },
  errorMedico: {
    id: 'errorMedico',
    title: 'Error médico',
    icon: 'error-medico',
    description: 'Intercambia todo tu cuerpo por el de otro jugador, incluyendo órganos, virus y vacunas. No importa el número de cartas que cada uno tenga en mesa. Cuando usas esta carta, los órganos inmunizados también son intercambiados.',
    expansion: Expansion.Virus,
  },
  experimentoFallido: {
    id: 'experimentoFallido',
    title: 'Experimento fallido',
    icon: 'experimento-fallido',
    description: 'Juega esta carta solo sobre un órgano infectado o vacunado. En el momento de jugarla, elige si actúa como un virus o una medicina de cualquier color',
    expansion: Expansion.Halloween,
    extraInfo: [
      {
        image: 'experimento-fallido__cura-un-virus',
        text: 'Cura un virus',
      },
      {
        image: 'experimento-fallido__elimina-una-medicina',
        text: 'Elimina una medicina',
      },
      {
        image: 'experimento-fallido__extirpa-un-organo',
        text: 'Extirpa un órgano',
      },
      {
        image: 'experimento-fallido__inmuniza-un-organo',
        text: 'Inmuniza un órgano',
      },
    ],
  },
  guanteDeLatex: {
    id: 'guanteDeLatex',
    title: 'Guante de latex',
    icon: 'guante-de-latex',
    description: 'Todos los jugadores, excepto el que utliza el guante, descartan su mano. Al comienzo de su siguiente turno, al no tener cartas, estos jugadores tan solo podrán robar una nueva mano, perdiendo así un turno de juego.',
    expansion: Expansion.Virus,
  },
  horasExtra: {
    id: 'horasExtra',
    title: 'Horas extra',
    icon: 'horas-extra',
    description: 'Juega las otras dos cartas de tu mano. Al final del turno roba hasta volver a tener 3 cartas en la mano.',
    expansion: Expansion.Virus2,
  },
  ladronDeOrganos: {
    id: 'ladronDeOrganos',
    title: 'Ladrón de órganos',
    icon: 'ladron-de-organos',
    description: 'Roba un órgano de otro jugador y añádelo a tu cuerpo. Puedes robar órganos sanos, vacunados o infectados, pero no inmunes. Recuerda que no puedes tener dos órganos del mismo color.',
    expansion: Expansion.Virus,
  },
  ladronesDeColores: {
    id: 'ladronesDeColores',
    title: 'Ladrones de colores',
    icon: 'ladrones-de-colores',
    description: 'Roba un órgano del color que indique el icono de la carta y añádelo a tu cuerpo. Puedes robar un órgano sano, vacunado, infectado o incluso inmunizado. Recuerda que no puedes tener dos órganos iguales en tu cuerpo.',
    expansion: Expansion.Halloween,
  },
  organoBionico: {
    id: 'organoBionico',
    title: 'Órgano biónico',
    icon: 'organo-bionico',
    description: 'No puede ser infectado por ningún tipo de virus, ya sean básicos o evolucionados. Tampoco se puede jugar ninguna medicina sobre este órgano. Sin embargo, sí puede ser objetivo de algunos tratamientos.',
    expansion: Expansion.Virus2,
  },
  organoMutante: {
    id: 'organoMutante',
    title: 'Órgano mutante',
    icon: 'organo-mutante',
    description: 'Descarta un órgano de tu cuerpo (incluyendo sus virus o medicinas) y reemplázalo por el Órgano Mutante. El Órgano Mutante se considera un órgano de color naranja y cuenta como un órgano extra para completar tu cuerpo. Puede ser afectado por cartas multicolor y cartas de tratamiento.',
    expansion: Expansion.Halloween,
  },
  segundaOpinion: {
    id: 'segundaOpinion',
    title: 'Segunda opinión',
    icon: 'segunda-opinion',
    description: 'Intercambia tu mano con la de otro jugador. Después puedes jugar una de las cartas recibidas, pero no puedes descartarte de ellas. El otro jugador comenzará su próximo turno con dos cartas en su mano.',
    expansion: Expansion.Virus2,
  },
  trajeDeProteccion: {
    id: 'trajeDeProteccion',
    title: 'Traje de protección',
    icon: 'traje-de-proteccion',
    description: `Juega esta carta durante el turno de otro jugador. Evita el efecto de una carta de cualquier tipo jugada contra ti. Tu rival deberá buscar un nuevo objetivo válido entre el resto de jugadores, incluido él mismo. En caso de no encontrarlo, su carta no tendrá efecto y será descartada. No puedes responder a un Traje de protección con otro.
    · Ejemplo: Si intentas jugar un virus contra un rival y este responde con Traje de protección, busca un nuevo jugador al que infectar. Si sólo tú tienes ese órgano, deberás jugarlo contra tu propio cuerpo y no podrás evitarlo usando otro Traje de Protección.
    No robes después de jugar esta carta; comenzarás tu próximo turno con una carta menos en la mano. Si la carta afecta a todos los jugadores, tendrá efecto sobre los demás, pero no sobre ti.
    · Ejemplo: Si utilizas el Traje de protección para librarte de un Guante de látex, tú no tendrás que descartar tu mano. Cuando llegue tu turno, podrás jugar una de tus dos cartas restantes.`,
    expansion: Expansion.Virus2,
  },
  transplanteAlienigena: {
    id: 'transplanteAlienigena',
    title: 'Transplante alienígena',
    icon: 'transplante-alienigena',
    description: 'Intercambia un órgano por otro entre dos jugadores cualesquiera. No importa si el color de estos órganos es diferente, ni si están sanos, infectados, vacunados o incluso inmunizados. Ninguno de los dos jugadores puede tener dos órganos iguales en su cuerpo.',
    expansion: Expansion.Halloween,
  },
  transplante: {
    id: 'transplante',
    title: 'Transplante',
    icon: 'transplante',
    description: 'Intercambia un órgano por otro entre dos jugadores cualesquiera. No importa si el color de estos órganos es diferente, ni si están sanos, infectados o vacunados. Sencillamente el jugador cambia el órgano escogido por otro, siempre y cuando ninguno de los dos jugadores tenga dos órganos del mismo color ni éstos estén inmunizados.',
    expansion: Expansion.Virus,
  },
  trucoOTrato: {
    id: 'trucoOTrato',
    title: 'Truco o trato',
    icon: 'truco-o-trato',
    description: 'Juega esta carta sobre el cuerpo de otro jugador. Un jugador no podrá ganar la partida mientras tenga Truco o Trato en su cuerpo. Para deshacerte de Truco o Trato, cura, vacuna o inmuniza un órgano de otro jugador y pasa automáticamente la carta Truco o Trato al cuerpo de ese jugador.',
    expansion: Expansion.Halloween,
  },
};
