import React from 'react';
import { teamMembers, notableAlumni } from '../data/teamMembers';
import './Team.css';

const TeamMemberCard = ({ member, type = 'default', showSocials = true }) => {
  if (member.name === "NOT FILLED") {
    return (
      <div className={`team-member-card ${type} not-filled`}>
        <div className="member-image-container">
          <div className="member-image-placeholder">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="member-info">
          <h3 className="member-role">{member.role}</h3>
          <p className="position-available">Position Available</p>
          {member.project && (
            <span className={`project-badge ${member.project.toLowerCase()}`}></span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`team-member-card ${type}`}>
      {member.project && (
        <span className={`project-badge ${member.project.toLowerCase()}`}></span>
      )}
      <div className="member-image-container">
        <img 
          src={`/photos/team_members/${member.image}`} 
          alt={member.name}
          className="member-image"
          onError={(e) => e.target.src = '/photos/team_members/empty.png'}
        />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        {member.major && <p className="member-major">{member.major}</p>}
        {member.yearJoined && (
          <p className="member-year">Joined {member.yearJoined}</p>
        )}
        
        {showSocials && (
          <div className="member-socials">
            {member.email && (
              <a href={`mailto:${member.email}`} className="social-link email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            )}
            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer" className="social-link website">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  const renderTeamSection = (teamArray, title) => {
    const seniors = teamArray.filter(member => member.level === 'senior');
    const members = teamArray.filter(member => member.level === 'member');

    return (
      <div className="discipline-team">
        <h3 className="discipline-title">{title}</h3>
        <div className="team-grid">
          {seniors.map((member, index) => (
            <TeamMemberCard key={`senior-${index}`} member={member} type="senior" />
          ))}
          {members.map((member, index) => (
            <TeamMemberCard key={`member-${index}`} member={member} type="member" />
          ))}
        </div>
      </div>
    );
  };

  const operationsLeads = teamMembers.operations.filter(member => member.level === 'lead');

  return (
    <div className="team-page">
      <div className="container">
        <div className="team-header">
          <h1>Our Team</h1>
          <p>
            Meet the engineers and leaders who drive Western Aero Design forward.
          </p>
        </div>

        {/* Executive Team Section */}
        <section className="executive-team-section">
          <h2>Executive Team</h2>
          <div className="executives-grid">
            {teamMembers.executives.map((executive, index) => (
              <TeamMemberCard key={`executive-${index}`} member={executive} type="director" />
            ))}
          </div>
        </section>

        {/* Technical Teams Section */}
        <section className="technical-teams-section">
          <div className="section-header">
            <h2>Technical Teams</h2>
            <div className="project-legend">
              <span className="legend-item">
                <span className="project-badge advanced"></span>
                Advanced VTOL
              </span>
              <span className="legend-item">
                <span className="project-badge regular"></span>
                Regular RC
              </span>
            </div>
          </div>
          
          {renderTeamSection(teamMembers.mechanicalTeam, 'Mechanical Team')}
          {renderTeamSection(teamMembers.electricalTeam, 'Electrical Team')}
          {renderTeamSection(teamMembers.softwareTeam, 'Software Team')}
        </section>

        {/* Business Operations Section */}
        <section className="operations-section">
          <h2>Business Operations</h2>
          <div className="operations-members">
            {operationsLeads.map((member, index) => (
              <TeamMemberCard key={index} member={member} type="operations" />
            ))}
          </div>
        </section>

        {/* Alumni Section */}
        <section className="alumni-section">
          <h2>Notable Alumni</h2>
          <div className="alumni-grid">
            {notableAlumni.map((alum, index) => (
              <div key={index} className="alumni-card">
                <div className="alumni-info">
                  <h3 className="alumni-name">{alum.name}</h3>
                  <p className="alumni-role">{alum.roleYear} {alum.role}</p>
                  <p className="alumni-major">{alum.major}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team; 