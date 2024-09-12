// pages/api/locations.js

import locationsData from '../../data/locations.json'; // Sample data

export default function handler(req, res) {
  res.status(200).json(locationsData);
}
