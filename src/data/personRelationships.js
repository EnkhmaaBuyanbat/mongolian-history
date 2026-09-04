export const personRelationships = [
  {
    personId: 'person-modu-chanyu',
    relatedPersonId: 'person-touman',
    type: 'parent',
    label: 'Father',
    confidence: 'TRADITION / SOURCE ACCOUNT',
    sourceIds: ['source-oxford-xiongnu'],
  },
  {
    personId: 'person-modu-chanyu',
    relatedPersonId: 'person-laoshang-chanyu',
    type: 'successor',
    label: 'Successor',
    confidence: 'ESTABLISHED',
    sourceIds: ['source-oxford-xiongnu'],
  },
  { personId: 'person-temujin-chinggis-khan', relatedPersonId: 'person-yesugei', type: 'parent', label: 'Father', confidence: 'SOURCE ACCOUNT', sourceIds: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006'] },
  { personId: 'person-temujin-chinggis-khan', relatedPersonId: 'person-hoelun', type: 'parent', label: 'Mother', confidence: 'SOURCE ACCOUNT', sourceIds: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006'] },
  { personId: 'person-temujin-chinggis-khan', relatedPersonId: 'person-borte', type: 'spouse', label: 'Wife / principal spouse', confidence: 'SOURCE ACCOUNT', sourceIds: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006'] },
  { personId: 'person-temujin-chinggis-khan', relatedPersonId: 'person-jamukha', type: 'changing relationship', label: 'Personal and political relationship', confidence: 'SOURCE ACCOUNT', sourceIds: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006', 'source-munkh-erdene-chinggisid-dynasty-2018'], phases: [
    { type: 'close personal / political relationship', period: 'earlier phase', description: 'Medieval narrative tradition reports an earlier close personal and political relationship.', sourceIds: ['source-secret-history-mongols', 'source-derachewiltz-secret-history-2006'], confidence: 'SOURCE ACCOUNT' },
    { type: 'rivalry', period: 'later phase', description: 'The relationship later became a political rivalry.', sourceIds: ['source-secret-history-mongols', 'source-munkh-erdene-chinggisid-dynasty-2018'], confidence: 'INTERPRETED' },
  ] },
  { personId: 'person-temujin-chinggis-khan', relatedPersonId: 'person-toghrul-ong-khan', type: 'changing relationship', label: 'Political relationship', confidence: 'INTERPRETED', sourceIds: ['source-secret-history-mongols', 'source-munkh-erdene-chinggisid-dynasty-2018'], phases: [
    { type: 'alliance / connection', period: 'earlier phase', description: 'Sources describe an earlier political connection and subsequent military and political cooperation.', sourceIds: ['source-secret-history-mongols', 'source-munkh-erdene-chinggisid-dynasty-2018'], confidence: 'INTERPRETED' },
    { type: 'rupture / conflict', period: '1203', description: 'Their relationship ended in rupture and conflict associated with the defeat of Kereyit political power.', sourceIds: ['source-munkh-erdene-chinggisid-dynasty-2018'], confidence: 'INTERPRETED' },
  ] },
]
