

const originsAllowed = process.env.CORS_ORIGINS || [
  'http://localhost:4200'
];

module.exports = {
  origin: function(origin, next) {
    const allowed = originsAllowed.some(o => o === origin);
    next(null, allowed);
  },
  credentials: true
}