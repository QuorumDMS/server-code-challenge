CREATE EXTENSION pgcrypto;

CREATE TABLE dealer (
  dealer_id uuid PRIMARY KEY default gen_random_uuid(),
  dealer_name text
);

CREATE TABLE make (
  make_id uuid PRIMARY KEY default gen_random_uuid(),
  make_name text
);

-- Create the relationship between dealer and make here
