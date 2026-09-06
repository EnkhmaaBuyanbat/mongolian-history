function MapLayerControl({ layers, onChange }) {
  return (
    <fieldset className="map-layer-control">
      <legend>Layers</legend>
      {['places','sites','campaigns'].map((layer) => <label key={layer}><input type="checkbox" checked={layers[layer]} onChange={() => onChange(layer)} />{layer}</label>)}
      <label className="map-layer-deferred"><input type="checkbox" disabled />political worlds</label>
      <small>Detailed historical boundaries deferred to Build 003B.</small>
    </fieldset>
  )
}

export default MapLayerControl
