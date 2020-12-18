module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL
    || 'postgres://trgysdfbojlxhd:dcb65ac6fb896c7d49a7b95cb3be8ade5b61b26dbe0bdd97682a2bf9305a1e25@ec2-54-225-214-37.compute-1.amazonaws.com:5432/d95176ksc4asc8',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
}
