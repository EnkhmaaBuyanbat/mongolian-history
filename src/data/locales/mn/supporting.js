import { campaignsMn } from './campaigns'
import { organizationsMn } from './organizations'
import { companiesMn } from './companies'

export const supportingMn = {
  ui: {
    campaign: 'Аян', organization: 'Байгууллага', company: 'Компани', route: 'ЧИГЛЭЛ', historicalContext: 'Түүхэн нөхцөл', relatedEvents: 'Холбогдох үйл явдлууд', relatedPeople: 'Холбогдох хүмүүс',
  },
  campaigns: {
    records: campaignsMn,
    routeConfidence: { HIGH: 'ӨНДӨР ИТГЭЛТЭЙ', APPROXIMATE: 'ОЙРОЛЦОО', SCHEMATIC: 'БҮДҮҮВЧ' },
    treatments: { ESTABLISHED: 'ТОГТООГДСОН', INTERPRETED: 'ТАЙЛБАРЛАСАН', 'ESTABLISHED / DEBATED CAUSATION': 'ТОГТООГДСОН / ШАЛТГААН МАРГААНТАЙ' },
  },
  organizations: {
    records: organizationsMn,
    types: { POLITICAL_PARTY: 'УЛС ТӨРИЙН НАМ', MILITARY: 'ЦЭРГИЙН БАЙГУУЛЛАГА', SECURITY: 'АЮУЛГҮЙ БАЙДЛЫН БАЙГУУЛЛАГА', INTERNATIONAL_ORGANIZATION: 'ОЛОН УЛСЫН БАЙГУУЛЛАГА', POLITICAL_MOVEMENT: 'УЛС ТӨРИЙН ХӨДӨЛГӨӨН', LEGISLATURE: 'ХУУЛЬ ТОГТООХ БАЙГУУЛЛАГА', CONSTITUTIONAL_INSTITUTION: 'ҮНДСЭН ХУУЛИЙН БАЙГУУЛЛАГА', INTERNATIONAL_FINANCIAL_INSTITUTION: 'ОЛОН УЛСЫН САНХҮҮГИЙН БАЙГУУЛЛАГА', ECONOMIC_INSTITUTION: 'ЭДИЙН ЗАСГИЙН БАЙГУУЛЛАГА' },
  },
  companies: {
    records: companiesMn,
    types: { PRIVATE_COMPANY: 'ХУВИЙН КОМПАНИ', STATE_OWNED_ENTERPRISE: 'ТӨРИЙН ӨМЧИТ КОМПАНИ', JOINT_VENTURE: 'ХАМТАРСАН ҮЙЛДВЭР', PROJECT_COMPANY: 'ТӨСЛИЙН КОМПАНИ', PUBLIC_COMPANY: 'НИЙТЭД НЭЭЛТТЭЙ КОМПАНИ' },
  },
}
