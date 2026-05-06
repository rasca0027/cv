import {
        ClevertechLogo,
        ConsultlyLogo,
        JojoMobileLogo,
        MonitoLogo,
        NSNLogo,
        ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
        name: "Kai-han \"Kelly\" Chang",
        initials: "KC",
        location: "Brooklyn, New York",
        locationLink: "",
        about: "",
        summary: (
                <>
                        Backend-focused Software Engineer with strong infrastructure knowledge and
                        platform engineering skills. Comfortable working across different aspects of
                        backend engineering and bridging any gaps between engineer and infra to promote
                        a strong DevOps culture. Active in organizing dev community events and contributing
                        to open source projects as well.

                </>
        ),
        avatarUrl: "",
        personalWebsiteUrl: "",
        contact: {
                email: "rasca0027@gmail.com",
                tel: "+13472485125",
                social: [
                        {
                                name: "GitHub",
                                url: "https://github.com/rasca0027",
                                icon: GitHubIcon,
                        },
                        {
                                name: "LinkedIn",
                                url: "https://www.linkedin.com/in/kelly-chang-01/",
                                icon: LinkedInIcon,
                        },
                ],
        },
        education: [
                {
                        school: "New York University",
                        degree: "Masters's Degree in Integrated Design and Media",
                        start: "2016",
                        end: "2018",
                },
                {
                        school: "National Taiwan University",
                        degree: "Bachelor's Degree in Information Systems and Management",
                        start: "2011",
                        end: "2015",
                }
        ],
        work: [
                {
                  company: "Flow",
                  link: "https://flow.life/",
                  badges: ["NYC", "Hybrid"],
                  title: "Senior Software Engineer",
                  logo: ParabolLogo,
                  start: "2025",
                  end: null,
                  description: (
                    <>
                      Senior Software Engineer that focused on applicant and resident experience.
                      <ul className="list-inside list-disc">
                        <li>
                          Designed and implemented critical third-party integrations to synchronize leasing data with internal systems, improving data consistency and reliability across platforms.
                        </li>
                        <li>
                          Delivered and refactored a leasing lifecycle event-driven system, resulting in more structured codebase, improved maintainability, and clearer, more traceable audit trails.
                        </li>
                        <li>
                          Established and promoted event-driven architecture guidelines across the team, advocating for best practices and driving more consistent system design
                        </li>
                        <li>
                          Architected internal tooling to support seamless transfer of leases from external systems, enabling a safer onboarding process and a more intuitive user experience.
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  company: "Justworks",
                  link: "https://www.justworks.com/",
                  badges: ["NYC", "Hybrid"],
                  title: "Senior Software Engineer",
                  logo: ParabolLogo,
                  start: "2024",
                  end: "2025",
                  description: (
                    <>
                      Senior Software Engineer on Platform team that developed and maintained internal tooling such as authorization API and DevEx improvement libraries.
                      <ul className="list-inside list-disc">
                        <li>
                          Built and maintained centralized authorization APIs for other internal services to use, consolidating access management for different products.
                        </li>
                        <li>
                          Simplified identity policy management by streamlining the review process and refactoring a legacy Terraform repo handling internal team authentication and scopes.
                        </li>
                        <li>
                          Migrated a Ruby on Rails monolith codebase from legacy deploy scripts to modernized toolings such as Docker and AWS EKS, shortened CI/CD lead time and improved maintainability and scalability.
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  company: "Petal Card",
                  link: "https://www.petalcard.com/",
                  badges: ["Hybrid", "NYC"],
                  title: "Senior Software Engineer",
                  logo: ClevertechLogo,
                  start: "2024",
                  end: "2020",
                  description: (
                          <>
                                  Joined as a backend engineer on Registration Decision Team and later
                                  transitioned to Platform team as Senior Software Engineer, built and maintained internal tools and CI/CD pipeline.
                                  <ul className="list-inside list-disc">
                                          <li>
                                                  Developed and maintained a decision flow engine that supported flexible evaluation logic.
                                          </li>
                                          <li>
                                                  Created an event-driven architecture framework using AWS Lambda and SQS to refactor legacy long-runnig synchronous jobs by building internal libraries, Terraform modules, code templates and documentation, which helped with jobs scalability and decreased error rate.
                                          </li>
                                          <li>
                                                  Co-led the migration project of the company-wide CI/CD pipeline from Jenkins to Azure DevOps, shortening 35% CI and deployment lead time.
                                          </li>
                                          <li>
                                                  Founded an internal Python standards working group to set up company-wide Python coding style guidelines and maintained internal libraries for the engineering team.
                                          </li>
                                  </ul>
                          </>
                  ),
                },
                {
                  company: "Looking Glass Factory",
                  link: "https://lookingglassfactory.com/",
                  badges: ["NYC"],
                  title: "Software Engineer",
                  logo: ClevertechLogo,
                  start: "2020",
                  end: "2018",
                  description: (
                    <>
                      <ul className="list-inside list-disc">
                        <li>
                        Developed and maintained scalable backend API services for authentication, used in company wide applications including websites, SDKs and multiple official Unity applications.
                        </li>
                        <li>
                        Introduced DevOps culture into the company by setting up CI/CD processes, linters, and documentations.
                        </li>
                      </ul>
                    </>
                  ),
                },
        ],
        skills: [
                "Python",
                "Typescript",
                "Node.js",
                "Go",
                "Kotlin",
                "AWS Certified Solutions Architect (SAA-C03)",
                "AWS",
                "Kubernetes",
                "Docker",
                "Helm",
                "Terraform",
                "CircleCI",
                "Github Actions",
                "Datadog",
                "Vim",
        ],
        projects: [],
} as const;
