CREATE EXTENSION pgcrypto;

CREATE TABLE dealer (
  dealer_id uuid PRIMARY KEY default gen_random_uuid(),
  dealer_name text
);

CREATE TABLE make (
  make_id uuid PRIMARY KEY default gen_random_uuid(),
  make_name text
);

CREATE TABLE dealer_make (
  dealer_id uuid REFERENCES dealer(dealer_id),
  make_id uuid REFERENCES make(make_id),
  PRIMARY KEY (dealer_id, make_id)
);

-- Create the relationship between dealer and make here, and rebuild the container to have
-- the changes take effect
