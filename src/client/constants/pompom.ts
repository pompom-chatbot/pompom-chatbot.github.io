import {Help} from './'

export default (prefix:string):Help[] => [{
  commands: ['help'],
  category: 'UTILITY',
  description: '',
  examples: [],
  mentionOnly: false,
  notes: []
}, {
  commands: ['char', 'character'],
  category: 'HONKAI STAR RAIL',
  description: 'Show you detail about a character',
  examples: ['character <character name>', 'character <path name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our character gallery`,
    `Tips:\n` +
    `This command has shortform \`${prefix}c\` for easier access`
  ]
}, {
  commands: ['light', 'lightcone'],
  category: 'HONKAI STAR RAIL',
  description: 'Show you detail about a light cone',
  examples: ['lightcone <lightcone name>', 'lightcone <path name>'],
  mentionOnly: false,
  notes: [
    `If you don't put any query bot will show you menu to browse our light cone gallery`,
    `Tips:\n` +
    `This command has shortform \`${prefix}l\` for easier access`
  ]
}]