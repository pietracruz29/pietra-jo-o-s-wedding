
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  attending BOOLEAN NOT NULL,
  partner_name TEXT,
  children JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert RSVPs" ON public.rsvps FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read RSVPs" ON public.rsvps FOR SELECT USING (true);
