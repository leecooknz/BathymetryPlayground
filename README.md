# BathymetryPlayground

A self-paced introduction to bathymetry with nine chapters, vetted primary-source links, a synthetic resolution demonstration, and a practical Malta subset exercise.

## Implementation
Plain static HTML/CSS/JavaScript under `dist/`. No build or dependencies. The terrain demonstration is generated from a mathematical surface, never represented as measured data. Tutorial position is reflected in URL fragments; no account or progress data is collected.

## New lesson: SWOT satellite seafloor mapping
A dedicated satellite-derived gravity lesson sits after dataset discovery and provides a task checklist: find numerical Scripps SWOT gravity products, visualize a regional raster in QGIS, compare with GEBCO bathymetry, and optionally download NASA SWOT sea-surface height netCDF data using PO.DAAC. It distinguishes gravity gradient, sea-surface-height observations, and inferred depth. External data and QGIS are not bundled offline.

## Next scope
Real numeric GeoTIFF import, metadata inspection, depth styling, profiles, and provenance overlays are proposed in the final lesson and are not implemented yet.

## Content maintenance
Sources checked 2026-11-02. Recheck linked product releases, access terms and documentation before changing dataset instructions. Preserve the distinction between cell spacing, effective resolution, uncertainty and archaeological evidence.

## Offline use

After one successful online visit, the service worker caches the complete application shell. The tutorial, navigation, synthetic terrain visualization and quiz then work offline. External source links still require a connection.
