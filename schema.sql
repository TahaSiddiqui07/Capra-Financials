-- Create claims table
CREATE TABLE IF NOT EXISTS claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;

-- Create policies for claims table
-- Allow authenticated users to insert their own claims
CREATE POLICY "Allow users to insert their own claims" ON claims
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow service role to read all claims
CREATE POLICY "Allow service role to read all claims" ON claims
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Allow service role to update all claims
CREATE POLICY "Allow service role to update all claims" ON claims
  FOR UPDATE
  USING (auth.role() = 'service_role');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at timestamp
CREATE TRIGGER update_claims_updated_at
BEFORE UPDATE ON claims
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column(); 