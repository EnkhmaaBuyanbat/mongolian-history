export const coreTreePersonIds = [
  'person-temujin-chinggis-khan','person-borte','person-jochi','person-chagatai','person-ogedei-khan','person-toregene-khatun','person-tolui','person-sorghaghtani-beki','person-batu','person-guyuk-khan','person-mongke-khan','person-qubilai','person-hulegu','person-ariq-boke',
]

export const visualTreePersonIds = [
  'person-temujin-chinggis-khan', 'person-borte',
  'person-qulan-khatun', 'person-yisui', 'person-yisugen', 'person-ibaqa-beki',
  'person-jochi', 'person-chagatai', 'person-ogedei-khan', 'person-toregene-khatun',
  'person-tolui', 'person-sorghaghtani-beki', 'person-kolgen',
  'person-qojin-beki', 'person-checheyigen', 'person-alaqa-beki', 'person-tumelun', 'person-al-altun',
  'person-batu', 'person-guyuk-khan', 'person-mongke-khan', 'person-qubilai', 'person-hulegu', 'person-ariq-boke',
]

export const householdGroups = {
  principal:['person-temujin-chinggis-khan','person-borte'],
  otherConsorts:['person-qulan-khatun','person-yisugen','person-yisui','person-ibaqa-beki'],
  sons:['person-jochi','person-chagatai','person-ogedei-khan','person-tolui','person-kolgen'],
  daughters:['person-qojin-beki','person-checheyigen','person-alaqa-beki','person-tumelun','person-al-altun'],
}

export const branchGroups = {
  JOCHID:['person-jochi','person-orda','person-batu','person-berke','person-tuqa-timur','person-oz-beg','person-jani-beg'],
  CHAGATAID:['person-chagatai','person-mutukan','person-qara-hulegu'],
  OGEDEID:['person-ogedei-khan','person-toregene-khatun','person-guyuk-khan','person-qadan','person-kochu','person-shiremun'],
  TOLUID:['person-tolui','person-sorghaghtani-beki','person-mongke-khan','person-qubilai','person-chabi','person-zhenjin','person-temur-oljeytu','person-hulegu','person-doquz-khatun','person-abaqa','person-ariq-boke','person-toghon-temur','person-ayushiridara','person-dayan-khan'],
}

export const laterFamilyGroups = [
  { id:'pre-1206-household',eraId:'before-chinggis',label:'Pre-1206 Family Foundation',personIds:['person-yesugei','person-hoelun','person-temujin-chinggis-khan','person-borte'],relationship:'Yesügei → Temüjin · Hö’elün → Temüjin · Temüjin + Börte' },
  { id:'yuan-household',eraId:'mongol-world',label:'Yuan Household',personIds:['person-qubilai','person-chabi','person-zhenjin','person-temur-oljeytu'],relationship:'Qubilai + Chabi → Zhenjin → Temür Öljeytü' },
  { id:'ilkhanid-household',eraId:'mongol-world',label:'Ilkhanid Household',personIds:['person-hulegu','person-doquz-khatun','person-abaqa'],relationship:'Hülegü + Doquz Khatun · Hülegü → Abaqa' },
  { id:'jochid-continuity',eraId:'mongol-world',label:'Jochid Continuity',personIds:['person-oz-beg','person-jani-beg'],relationship:'Öz Beg → Jani Beg' },
  { id:'post-yuan-continuity',eraId:'northern-yuan',label:'Post-Yuan Continuity',personIds:['person-toghon-temur','person-ayushiridara'],relationship:'Toghon Temür → Ayushiridara' },
  { id:'dayan-restoration',eraId:'northern-yuan',label:'Later Chinggisid Restoration',personIds:['person-mandukhai-khatun','person-dayan-khan'],relationship:'Mandukhai Khatun + Dayan Khan' },
]

export const familyTreePersonIds = [...new Set([
  ...coreTreePersonIds,
  ...Object.values(householdGroups).flat(),
  ...Object.values(branchGroups).flat(),
  ...laterFamilyGroups.flatMap((group) => group.personIds),
])]
