import { supabase } from "./supabase";

export async function fetchPortfolioContent() {
  if (!supabase) return null;

  const [profileResult, experienceResult, projectsResult, skillsResult, educationResult] =
    await Promise.all([
      supabase.from("portfolio_profile").select("*").eq("id", "main").single(),
      supabase.from("portfolio_experience").select("*").order("sort_order"),
      supabase.from("portfolio_projects").select("*").order("sort_order"),
      supabase.from("portfolio_skills").select("*").order("sort_order"),
      supabase.from("portfolio_education").select("*").order("sort_order"),
    ]);

  const results = [
    profileResult,
    experienceResult,
    projectsResult,
    skillsResult,
    educationResult,
  ];
  const failedResult = results.find((result) => result.error);
  if (failedResult) {
    throw failedResult.error;
  }

  const row = profileResult.data;
  return {
    profile: {
      name: row.name,
      role: row.role,
      location: row.location,
      email: row.email,
      phone: row.phone,
      github: row.github,
      linkedin: row.linkedin,
      resumeUrl: row.resume_url,
      status: row.status,
      summary: row.summary,
      stack: row.stack,
      about: row.about,
      currentPosition: row.current_position,
      focus: row.focus,
      studying: row.studying,
    },
    experience: experienceResult.data.map(({ company, role, date, points }) => ({
      company,
      role,
      date,
      points,
    })),
    projects: projectsResult.data.map(
      ({ method, path, name, stack, description, type, url }) => ({
        method,
        path,
        name,
        stack,
        description,
        type,
        url,
      })
    ),
    skills: skillsResult.data.map(({ group_name, items }) => ({
      group: group_name,
      items,
    })),
    education: educationResult.data.map(({ school, program, date }) => ({
      school,
      program,
      date,
    })),
  };
}
