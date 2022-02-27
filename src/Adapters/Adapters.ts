interface styleSelectionI {
  background: string
  width: string
  height: string
  color?: string
  paddingBottom?: string
  transition?: string
}

export function styleSelection(text: string, selectedSign: string): styleSelectionI {
  const valuesForStyle1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  const valuesForStyle2 = ['÷', '×', '-', '+', '=']
  const valuesForStyle3 = ['0']
  const valuesForStyle4 = ['C']

  switch (true) {
    case valuesForStyle1.includes(text):
      return {
        background: 'rgba(88, 88, 88, 1)',
        width: '78px',
        height: '78px',
      }
    case valuesForStyle2.includes(text):
      return (text === selectedSign && text != '=') ?
        {
          background: 'white',
          color: 'rgba(241, 105, 6, 1)',
          transition: '0.5s',
          width: '78px',
          height: '78px',
          paddingBottom: '6px',
        } : {
          background: 'rgba(241, 105, 6, 1)',
          width: '78px',
          height: '78px',
          paddingBottom: '6px',
        }
    case valuesForStyle3.includes(text):
      return {
        background: 'rgba(88, 88, 88, 1)',
        width: '161px',
        height: '78px',
      }
    case valuesForStyle4.includes(text):
      return {
        background: 'rgba(193, 193, 193, 1)',
        width: '244px',
        height: '78px',
        color: 'black',
      }
    default:
      return {
        background: '',
        width: '',
        height: '',
      }
  }
}

export function searchSymbolInLine(line: string, char: string): boolean {
  return line.indexOf(char) != -1
}

export function stringConverter(newLineElement: string, line: string) {
  if (newLineElement.charCodeAt(0) === 46 && searchSymbolInLine(line, newLineElement)) return line
  if (line.length === 9 && line[8] === '.') {
    return line + newLineElement
  }
  if (line.length === 9 || line.length === 10) return line
  if (line.length === 1 && line[0] === '0') {
    if (newLineElement === '0') return line
    else if (newLineElement === '.') return line + newLineElement
    else return newLineElement
  }

  return line + newLineElement
}