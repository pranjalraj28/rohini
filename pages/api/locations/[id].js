// pages/api/locations/[id].js

import locationsData from '../../../data/locations.json'; // Sample data

export default function handler(req, res) {
  const { id } = req.query;
  const location = locationsData.find(loc => loc.id === parseInt(id, 10));

  if (location) {
    res.status(200).json(location);
  } else {
    res.status(404).json({ error: 'Location not found' });
  }
}
