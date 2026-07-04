# Radar — Data Categories & Sources

A two-tier catalogue of every data category and its underlying sources.
Grouped into **live tracking layers** (dedicated integrations) and the
**global feeds engine** (the `FEEDS` table, pulling CAP / GeoJSON / GeoRSS /
KML / RSS / Telegram sources). Sub-items are listed alphabetically.

---

## Tier 1 — Live tracking & rich map layers (dedicated integrations)

### Aircraft — live positions
- OpenSky Network

### Marine vessels — live positions
- AISStream.io (global AIS feed)

### Trains — live positions
- TrainsTracking.com (multi-country real-time)

### Earthquakes
- USGS

### Floods
- UK Environment Agency — Flood Warnings
- UK Environment Agency — Flood Guidance Statement (FGS) Forecasts

### Weather warnings
- UK Met Office — National Severe Weather Warning Service (NSWWS)

### Webcams
- Live-Environment-Streams (LES)
- OpenStreetMap webcams
- OpenWebcamDB
- Transport for London (TfL) cameras
- Windy

### Points of Interest
- Google Maps
- HERE
- Overpass (OpenStreetMap)
- WiGLE Wireless Access Points

### Road traffic
- Google Traffic
- HERE Traffic
- TomTom Traffic

### Internet radio
- Radio-Browser.info (curated global station directory)

---

## Tier 2 — Global alerts & news feeds engine

Radar's `FEEDS` engine ingests **CAP, GeoJSON, GeoRSS, KML, RSS and Telegram**
sources worldwide. The engine is country-aware (ISO country codes) and spans
dozens of nations across every continent. Organized by hazard/topic with
representative agencies:

### Seismic / earthquakes
- AFAD (Turkey)
- BGS (UK)
- BMKG (Indonesia)
- CENC (China)
- CSN (Chile)
- EMSC
- GEOFON / GFZ (Germany)
- Geoscience Australia
- GNS / GeoNet (New Zealand)
- IGN (Spain)
- IGP (Peru)
- IMD (India)
- INGV (Italy)
- IPMA (Portugal)
- JMA (Japan)
- KMA (Korea)
- NRCan (Canada)
- PHIVOLCS (Philippines)
- USGS

### Volcanoes
- GNS (New Zealand)
- PVMBG (Indonesia)
- Smithsonian Global Volcanism Program
- USGS Volcano Hazards Program
- VolcanoDiscovery

### Wildfires
- BC Wildfire Service
- CAL FIRE
- CFA (Victoria)
- EFFIS (Europe)
- InciWeb
- NASA FIRMS
- NIFC
- NSW RFS

### Tropical cyclones / hurricanes
- GDACS
- JMA
- JTWC
- NOAA NHC

### Floods
- BoM (Australia)
- FloodList
- GDACS
- UK Environment Agency

### Severe weather & multi-hazard alerts
- DWD (Germany)
- Environment Canada
- MeteoAlarm (Europe)
- NOAA NWS
- NOAA SPC

### Tsunami
- INCOIS
- NOAA / NWS
- PTWC

### Space weather
- NOAA SWPC

### Disaster coordination & humanitarian
- ACLED
- Copernicus EMS
- FEMA
- GDACS
- NASA EONET
- NDMA (India)
- NEMA (New Zealand)
- OCHA
- ReliefWeb
- UNHCR
- WFP

### Health & disease
- CDC
- ECDC
- ProMED
- UKHSA
- WHO

### Cybersecurity
- BleepingComputer
- CISA
- Dark Reading
- Krebs on Security
- NCSC
- SANS ISC
- Schneier on Security
- The Hacker News
- The Register

### Transport safety investigations
- AAIB (air)
- Aviation Herald
- BEA (France)
- MAIB (marine)
- NTSB (US)
- RAIB (rail)

### Infrastructure & environment
- National Highways (incidents)
- UK Power Networks (outages)
- US EPA (air quality)

### Live news (Telegram bridge)
- Al Jazeera
- AP News
- Bloomberg
- CNN
- Euronews
- European Commission
- Sky News
- SpaceX

---

## Notes
- The feeds engine is **country-aware** (ISO country codes) and spans dozens of
  nations across every continent — that breadth is itself a headline feature.
- Radar also has an app-side **peer-to-peer / nearby-device layer** and
  **encrypted messaging** (the `RADAR_MATRIX` / mesh code). These are features
  rather than external data sources, so they are not listed above.
