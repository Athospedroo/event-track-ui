function voiceTypeToString(number: number): string {
  switch (number) {
    case 1:
      return 'TENOR'
      break
    case 2:
      return 'SOPRANO'
      break
    case 3:
      return 'BAIXO'
      break
    case 4:
      return 'CONTRALTO'
      break
    default:
      return 'TIPO DE VOZ NÃO IDENTIFICADO'
      break
  }
}

export {
  voiceTypeToString
}