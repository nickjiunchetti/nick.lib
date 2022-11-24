export const email = email => {
  return email.replace(/[^0-9A-Za-z-_.@]/g, '')
}

export const name = v => {
  if (v) {
    return v.replace(/([^ \nA-Za-zÀ-ÖØ-öø-ÿ])/g, '') // only chars and space
  }
}

export const number = v => {
  if (v) {
    if (!v) v = 0
    v = v.toString()
    return Number(v.replace(/[^\d]/g, '')) // permite apenas numeros
  }
}

export const removeSpecialCharacters = v => {
  if (v) {
    return v.replace(/([^ \nA-Za-z0-9À-ÖØ-öø-ÿ,-.])/g, '') // only chars, numbers, spaces, ",", "-"  and "."
  }
}

export const removeAllSpecialChars = v => {
  if (v) {
    return v.replace(/([^ \nA-Za-z0-9À-ÖØ-öø-ÿ])/g, '')
  }
}

export const brazzilianCellphone = v => {
  if (v) {
    return v
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '($1) $2') // coloca () entre os dois primeiro caracteres
      .replace(/(\d{5})(\d)/, '$1-$2') // coloca - apos o 4 digito
      .replace(/(-\d{4})\d+?$/, '$1') // captura 5 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
}

export const noDots = search => !!search && search.replace(/\./g, ' ')

export const noComma = v => {
  if (v) {
    return v.replace(/,/g, ' ')
  }
}

export const removeMultipleSpaces = v => {
  if (v) {
    return v.replace(/\s\s+/g, ' ')
  }
}

export const money = v => {
  if (v) {
    v = v.toString()
    v = v.replace(/\D/g, '') // Remove tudo o que não é dígito
    v = v.replace(/(\d)(\d{8})$/, '$1.$2') // coloca o ponto dos milhões
    v = v.replace(/(\d)(\d{5})$/, '$1.$2') // coloca o ponto dos milhares
    v = v.replace(/(\d)(\d{2})$/, '$1,$2') // coloca a virgula antes dos 2 últimos dígitos
  }
}

export const cep = v => {
  if (v) {
    return v
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }
}

export const cpf = v => {
  if (v) {
    return v
      .replace(/\D/g, '') // remove caracteres que nao sao digitos
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
      .padStart(11, 0)
  }
}

export const cnpj = v => {
  if (v) {
    return v
      .replace(/\D/g, '') // remove caracteres que nao sao digitos
      .replace(/^(\d{2})(\d)/, '$1.$2') // coloca ponto entre o segundo e o terceiro dígitos
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // coloca ponto entre o quinto e o sexto dígitos
      .replace(/\.(\d{3})(\d)/, '.$1/$2') // coloca uma barra entre o oitavo e o nono dígitos
      .replace(/(\d{4})(\d)/, '$1-$2') // coloca um hífen depois do bloco de quatro dígitos
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
      .padStart(14, 0)
  }
}

export const cpfCnpj = v => {
  // Remove tudo o que não é dígito
  if (v) {
    v = v.toString()
    v = v.replace(/\D/g, '')

    if (v.slice(0, 1) === '0') v = v.slice(1)

    if (v.length <= 11) {
      // CPF
      v = v.padStart(11, 0)
      // Coloca um ponto entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      // Coloca um ponto entre o terceiro e o quarto dígitos
      // de novo (para o segundo bloco de números)
      v = v.replace(/(\d{3})(\d)/, '$1.$2')

      // Coloca um hífen entre o terceiro e o quarto dígitos
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    } else {
      // CNPJ
      v = v.padStart(14, 0)
      // Coloca ponto entre o segundo e o terceiro dígitos
      v = v.replace(/^(\d{2})(\d)/, '$1.$2')

      // Coloca ponto entre o quinto e o sexto dígitos
      v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')

      // Coloca uma barra entre o oitavo e o nono dígitos
      v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')

      // Coloca um hífen depois do bloco de quatro dígitos
      v = v
        .replace(/(\d{4})(\d)/, '$1-$2')

        // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
        .replace(/(-\d{2})\d+?$/, '$1')
    }
  }
}

export const unMask = v => {
  if (v) {
    return v
      .replace(/\./g, '') // remove .
      .replace(/\-/g, '') // remove -
      .replace(/\(/g, '') // remove (
      .replace(/\)/g, '') // remove )
      .replace(/\//g, '') // remove /
      .replace(/\s/g, '') // remove " "
  }
}
