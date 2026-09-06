export const mapRegionRepresentations = ['POLITICAL_CORE','POLITICAL_SPHERE','SUBORDINATE_POLITY','EMERGING_ULUS','CLAIMANT_SPHERE']
export const mapRegionGeometrySources = ['ARCHAEOLOGICAL','HISTORICAL_ATLAS','SCHOLARLY_RECONSTRUCTION','MULTIPLE_SCHOLARLY_SOURCES','SCHEMATIC']
export const mapRegionGeometryMethods = ['SIMPLIFIED_TRACE','SCHOLARLY_SYNTHESIS','SCHEMATIC_ZONE']

const approximateFrontierCaution = 'No region geometry is shown because the project does not yet contain sufficiently sourced historical boundary coordinates. Political reach was uneven and should not be read as a surveyed medieval frontier.'

export const mapRegions = [
  {
    id:'map-region-early-mongol-political-sphere',name:'Early Mongol Political Sphere',snapshotYears:[1206,1211,1218],polityId:'polity-yeke-mongol-ulus',representation:'POLITICAL_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'The political order recognized in 1206 expanded through changing relationships and campaigns without constituting the later maximum Mongol Empire.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-khwarazmian-political-world',name:'Khwarazmian Political World',snapshotYears:[1218,1221],polityId:'polity-khwarazmian-empire',representation:'POLITICAL_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023','source-juvaini-world-conqueror','source-boyle-world-conqueror-1958'],summary:'The Khwarazmian imperial world remained a major western political context as Mongol invasion unfolded across multiple connected theaters.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-mongol-imperial-world',name:'Mongol Imperial World',snapshotYears:[1227,1234,1241,1251,1258],polityId:'polity-yeke-mongol-ulus',representation:'POLITICAL_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'A broad imperial framework connected diverse territories, households, commands and administrative practices without producing uniform control everywhere.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-southern-song-political-world',name:'Southern Song Political World',snapshotYears:[1234,1241,1251,1258],polityId:'polity-song-dynasty',representation:'POLITICAL_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'Southern Song remained a distinct political world and major southern theater rather than ordinary Mongol imperial territory.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-shared-imperial-background-1260',name:'Shared Mongol Imperial Background',snapshotYears:[1260],polityId:'polity-yeke-mongol-ulus',representation:'POLITICAL_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'The succession crisis fractured united imperial politics without immediately erasing inherited institutions, relationships and imperial connectivity.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-ariq-boke-claimant-sphere',name:'Ariq Böke Claimant Sphere',snapshotYears:[1260],polityId:null,representation:'CLAIMANT_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'Ariq Böke advanced a rival claim to supreme authority within the continuing Mongol imperial world.',caution:approximateFrontierCaution,geometry:null,
  },
  {
    id:'map-region-qubilai-claimant-sphere',name:'Qubilai Claimant Sphere',snapshotYears:[1260],polityId:null,representation:'CLAIMANT_SPHERE',geographicConfidence:'APPROXIMATE',treatment:'INTERPRETED',geometrySource:null,geometryMethod:null,sourceIds:['source-dunnell-rise-chinggis-2023'],summary:'Qubilai advanced a rival claim to supreme authority; this is not represented as a mature Yuan dynasty frontier.',caution:approximateFrontierCaution,geometry:null,
  },
]
