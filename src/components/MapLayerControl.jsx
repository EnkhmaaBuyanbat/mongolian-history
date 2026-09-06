function MapLayerControl({ layers, onChange }) {
  return (
    <fieldset className="map-layer-control">
      <legend>Layers</legend>
      {['places','sites','campaigns','politicalWorlds'].map((layer) => <label key={layer}><input type="checkbox" checked={layers[layer]} onChange={() => onChange(layer)} />{layer.replace(/([A-Z])/g,' $1')}</label>)}
      <small>Political-world geometry appears only where sufficiently sourced.</small>
    </fieldset>
  )
}

export default MapLayerControl
