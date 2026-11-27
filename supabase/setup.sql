create table if not exists public.portfolio_profile (
  id text primary key check (id = 'main'),
  name text not null,
  role text not null,
  location text not null,
  email text not null,
  phone text,
  github text,
  linkedin text,
  resume_url text,
  status text not null default 'available',
  summary text not null,
  stack text[] not null default '{}',
  about text not null,
  current_position text not null,
  focus text not null,
  studying text not null
);

create table if not exists public.portfolio_experience (
  id text primary key,
  company text not null,
  role text not null,
  date text not null,
  points text[] not null default '{}',
  sort_order integer not null
);

create table if not exists public.portfolio_projects (
  id text primary key,
  method text not null,
  path text not null,
  name text not null,
  stack text[] not null default '{}',
  description text not null,
  type text not null check (type in ('work', 'personal')),
  url text,
  sort_order integer not null
);

create table if not exists public.portfolio_skills (
  id text primary key,
  group_name text not null,
  items text[] not null default '{}',
  sort_order integer not null
);

create table if not exists public.portfolio_education (
  id text primary key,
  school text not null,
  program text not null,
  date text not null,
  sort_order integer not null
);

alter table public.portfolio_profile enable row level security;
alter table public.portfolio_experience enable row level security;
alter table public.portfolio_projects enable row level security;
alter table public.portfolio_skills enable row level security;
alter table public.portfolio_education enable row level security;

grant select on public.portfolio_profile to anon, authenticated;
grant select on public.portfolio_experience to anon, authenticated;
grant select on public.portfolio_projects to anon, authenticated;
grant select on public.portfolio_skills to anon, authenticated;
grant select on public.portfolio_education to anon, authenticated;

drop policy if exists "Public can read portfolio profile" on public.portfolio_profile;
create policy "Public can read portfolio profile"
  on public.portfolio_profile for select to anon, authenticated using (true);

drop policy if exists "Public can read portfolio experience" on public.portfolio_experience;
create policy "Public can read portfolio experience"
  on public.portfolio_experience for select to anon, authenticated using (true);

drop policy if exists "Public can read portfolio projects" on public.portfolio_projects;
create policy "Public can read portfolio projects"
  on public.portfolio_projects for select to anon, authenticated using (true);

drop policy if exists "Public can read portfolio skills" on public.portfolio_skills;
create policy "Public can read portfolio skills"
  on public.portfolio_skills for select to anon, authenticated using (true);

drop policy if exists "Public can read portfolio education" on public.portfolio_education;
create policy "Public can read portfolio education"
  on public.portfolio_education for select to anon, authenticated using (true);

insert into public.portfolio_profile (
  id, name, role, location, email, phone, github, linkedin, resume_url, status,
  summary, stack, about, current_position, focus, studying
) values (
  'main',
  'Dhwanit Parani',
  'Backend Developer',
  'Ahmedabad, Gujarat, India',
  'parani.dhwanit@gmail.com',
  '+91 9909706200',
  'https://github.com/Dhwanit007',
  'https://www.linkedin.com/in/dhwanit-parani-6a623a305/',
  '/Dhwanit_Parani_Resume.pdf',
  'available',
  'Final-year B.Tech CSE student and Jr. Backend Developer who builds RESTful APIs, authentication systems and database-backed services with NestJS, Laravel and Node.js. Comfortable owning a feature from schema design to production deployment.',
  array['NestJS', 'Laravel', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'PostgreSQL', 'AWS'],
  'I''m a final-year CSE student working as a Jr. Backend Developer at SilverSky Technology. Most of my time goes into designing schemas, writing APIs that don''t fall over in production, and closing the gap between "it works on my machine" and "it''s deployed." I care about clean auth flows, sensible database design, and code a teammate can pick up without a walkthrough.',
  'Jr. Backend Developer @ SilverSky Technology',
  'NestJS · Laravel · PostgreSQL · REST APIs',
  'B.Tech CSE, Silver Oak University (2024 — Present)'
)
on conflict (id) do update set
  name = excluded.name,
  role = excluded.role,
  location = excluded.location,
  email = excluded.email,
  phone = excluded.phone,
  github = excluded.github,
  linkedin = excluded.linkedin,
  resume_url = excluded.resume_url,
  status = excluded.status,
  summary = excluded.summary,
  stack = excluded.stack,
  about = excluded.about,
  current_position = excluded.current_position,
  focus = excluded.focus,
  studying = excluded.studying;

insert into public.portfolio_experience (id, company, role, date, points, sort_order) values
  ('silversky-jr-backend-developer', 'SilverSky Technology', 'Jr. Backend Developer', 'Mar 2026 — Present', array['Developing and maintaining scalable backend applications using NestJS, Laravel and MySQL', 'Designing RESTful APIs and authentication/authorization systems', 'Optimizing database queries and resolving production issues', 'Working directly with frontend developers to ship end-to-end features'], 1),
  ('silversky-backend-intern', 'SilverSky Technology', 'Backend Developer Intern', 'Jul 2025 — Feb 2026', array['Trained in backend development with NestJS, Laravel, Node.js and Express.js', 'Built RESTful APIs and integrated them with relational databases', 'Implemented authentication, authorization and CRUD workflows', 'Tested and debugged APIs with Postman alongside senior developers'], 2),
  ('prodigy-full-stack-intern', 'Prodigy InfoTech', 'Full Stack Web Development Intern', 'Jan 2025 — Feb 2025', array['Self-paced training across the MERN stack', 'Built responsive interfaces with Tailwind CSS on top of Node/Express APIs'], 3),
  ('sava-web-development-intern', 'SAVA Info Systems Pvt. Ltd', 'Web Development Intern', 'Dec 2023 — Apr 2024', array['Built server-rendered pages and features in PHP', 'Handled database connectivity and Bootstrap-based UI work'], 4),
  ('techmicra-web-development-intern', 'TechMicra IT Solutions', 'Web Development Intern', 'Jun 2023 — Jul 2023', array['First hands-on web work with HTML, CSS, JavaScript and PHP', 'Built and refined responsive, accessible page layouts'], 5)
on conflict (id) do update set
  company = excluded.company,
  role = excluded.role,
  date = excluded.date,
  points = excluded.points,
  sort_order = excluded.sort_order;

insert into public.portfolio_projects (id, method, path, name, stack, description, type, url, sort_order) values
  ('within-pregnancy-app', 'GET', '/projects/within-pregnancy-app', 'Within Pregnancy APP', array['NestJS', 'PostgreSQL', 'Firebase Cloud Messaging'], 'APIs, authentication and core business logic for a healthcare and wellness application.', 'work', null, 1),
  ('madras-club', 'POST', '/projects/madras-club-chatbot', 'MadrasClub Chat bot', array['NestJS', 'PostgreSQL', 'Supabase', 'Whatsapp API'], 'Chat bot project for Madras Club.', 'work', null, 2),
  ('parent-ai', 'POST', '/projects/parent-ai', 'Parent AI', array['NestJS', 'AWS', 'OpenAI', 'HeyGen', 'ElevenLabs', 'PostgreSQL', 'N8N'], 'Integrated AI voice, avatar and chatbot services into scalable backend APIs and AWS workflows.', 'work', null, 3),
  ('veliyx-app', 'GET', '/projects/veliyx-rider-driver-application', 'Veliyx', array['NestJS', 'PostgreSQL', 'Socket.IO', 'Google Maps API'], 'Scalable APIs for ride booking, driver management, authentication and real-time trip workflows.', 'work', null, 4),
  ('voice-over-actor-london', 'GET', '/projects/voice-over-actor-london', 'Voice Over Actor London', array['Names Website Editor'], 'Drag-and-drop website for a London voice-over actor, created with the Names website editor.', 'work', null, 5),
  ('maher-matrimonial', 'GET', '/projects/enterprise-web-application', 'Maher Matrimonial', array['Laravel', 'MySQL'], 'Backend modules, RESTful APIs, authentication and query optimization for an internal enterprise system.', 'work', null, 6),
  ('saas-matrimonial', 'GET', '/projects/saas-matrimonial-application', 'SaaS Matrimonial', array['NestJS', 'PostgreSQL', 'Supabase'], 'A scalable SaaS application with a modern backend and database setup.', 'work', null, 7),
  ('inward-outward-simulation', 'GET', '/projects/inward-outward-simulation', 'Inward Outward Simulation', array['PHP', 'Laravel', 'a2Hosting', 'MySQL'], 'Inward/outward simulation built with PHP and Laravel, hosted on a2Hosting with MySQL.', 'work', null, 8),
  ('fashion-file', 'GET', '/projects/fashion-file', 'Fashion File', array['Next.js', 'Vercel'], 'Fashion File website built with Next.js and Vercel.', 'work', null, 9),
  ('ocr-document-tracking', 'GET', '/projects/ocr-document-tracking', 'OCR-Based Document Tracking', array['PHP', 'Laravel', 'a2Hosting', 'MySQL'], 'OCR-based document tracking application built with PHP and Laravel, hosted on a2Hosting with MySQL.', 'work', null, 10),
  ('inbound-outbound-simulation', 'GET', '/projects/inbound-outbound-simulation', 'Inbound - Outbound Simulation', array['NestJS', 'Digital Ocean', 'a2Hosting', 'MySQL'], 'Inbound/outbound simulation built with NestJS, Digital Ocean, a2Hosting and MySQL.', 'work', null, 11),
  ('mern-authentication-system', 'POST', '/auth/mern-authentication-system', 'MERN Authentication System', array['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Passport.js'], 'A self-built auth system with JWT and Passport-based login, protected routes, session handling and role-based access, built end-to-end on the MERN stack.', 'personal', 'https://github.com/Dhwanit007', 12),
  ('vibechat', 'GET', '/apps/vibechat', 'VibeChat', array['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO'], 'A real-time MERN chat application with live messaging over Socket.IO, layered on top of a full authentication flow.', 'personal', 'https://github.com/Dhwanit007', 13)
on conflict (id) do update set
  method = excluded.method,
  path = excluded.path,
  name = excluded.name,
  stack = excluded.stack,
  description = excluded.description,
  type = excluded.type,
  url = excluded.url,
  sort_order = excluded.sort_order;

insert into public.portfolio_skills (id, group_name, items, sort_order) values
  ('backend', 'Backend', array['NestJS', 'Laravel', 'Node.js', 'Express.js', 'TypeORM', 'JWT', 'OAuth 2.0'], 1),
  ('databases', 'Databases', array['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'], 2),
  ('cloud-deployment', 'Cloud & Deployment', array['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS IAM', 'Docker', 'Nginx', 'PM2', 'Linux', 'Vercel', 'Digital Ocean', 'a2Hosting'], 3),
  ('languages', 'Languages', array['JavaScript', 'TypeScript', 'PHP', 'SQL', 'HTML5', 'CSS3'], 4),
  ('frontend', 'Frontend', array['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap'], 5),
  ('tools', 'Tools', array['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'Composer', 'Names Website Editor'], 6)
on conflict (id) do update set
  group_name = excluded.group_name,
  items = excluded.items,
  sort_order = excluded.sort_order;

insert into public.portfolio_education (id, school, program, date, sort_order) values
  ('btech-cse', 'Silver Oak University, Ahmedabad', 'B.Tech, Computer Science & Engineering', '2024 — Present', 1),
  ('diploma-it', 'Silver Oak University, Ahmedabad', 'Diploma in Information Technology · CGPA 9.16', '2021 — 2024', 2),
  ('ssc', 'Tripada Day School, Ahmedabad', 'SSC', '2020 — 2021', 3)
on conflict (id) do update set
  school = excluded.school,
  program = excluded.program,
  date = excluded.date,
  sort_order = excluded.sort_order;
