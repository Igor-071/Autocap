import { teamContent } from './team'

describe('Team Content', () => {
  describe('Content Structure', () => {
    it('has valid structure matching TeamContent interface', () => {
      expect(teamContent).toBeDefined()
      expect(teamContent.hero).toBeDefined()
      expect(teamContent.hero.title).toBe('Leadership & Board')
      expect(teamContent.hero.description).toBeDefined()

      expect(teamContent.managementTeam).toBeDefined()
      expect(teamContent.managementTeam).toHaveLength(3)

      expect(teamContent.board).toBeDefined()
      expect(teamContent.board).toHaveLength(3)
    })
  })

  describe('AC-004: David Knape - CEO & Co-Founder', () => {
    it('has correct profile data for David Knape', () => {
      const david = teamContent.managementTeam.find((m) => m.id === 'david-knape')

      expect(david).toBeDefined()
      expect(david?.name).toBe('David Knape')
      expect(david?.title).toBe('CEO & Co-Founder')
      expect(david?.bio).toContain('Serial entrepreneur')
      expect(david?.bio).toContain('Nasdaq First North-listed company')
      expect(david?.education).toBe('B.Sc. Business Economics, M.Sc. Marketing')
      expect(david?.category).toBe('management')
    })
  })

  describe('AC-005: Niklas Norén - CFO', () => {
    it('has correct profile data for Niklas Norén', () => {
      const niklas = teamContent.managementTeam.find((m) => m.id === 'niklas-noren')

      expect(niklas).toBeDefined()
      expect(niklas?.name).toBe('Niklas Norén')
      expect(niklas?.title).toBe('CFO')
      expect(niklas?.bio).toContain('two decades of experience')
      expect(niklas?.bio).toContain('PE exit (Adven/EQT)')
      expect(niklas?.education).toContain('M.Sc. Business Economics (Civilekonom)')
      expect(niklas?.education).toContain('Stockholm University')
      expect(niklas?.category).toBe('management')
    })
  })

  describe('AC-006: Nicklas Knape - COO & Head of M&A', () => {
    it('has correct profile data for Nicklas Knape', () => {
      const nicklas = teamContent.managementTeam.find((m) => m.id === 'nicklas-knape')

      expect(nicklas).toBeDefined()
      expect(nicklas?.name).toBe('Nicklas Knape')
      expect(nicklas?.title).toBe('COO & Head of M&A')
      expect(nicklas?.bio).toContain('fifteen years')
      expect(nicklas?.bio).toContain('Nordic tire and automotive aftermarket')
      expect(nicklas?.education).toBe('B.Sc. Business Economics')
      expect(nicklas?.category).toBe('management')
    })
  })

  describe('AC-007: Gustav Berggren - Chairman', () => {
    it('has correct profile data for Gustav Berggren', () => {
      const gustav = teamContent.board.find((m) => m.id === 'gustav-berggren')

      expect(gustav).toBeDefined()
      expect(gustav?.name).toBe('Gustav Berggren')
      expect(gustav?.title).toBe('Chairman of the Board')
      expect(gustav?.bio).toContain('Entrepreneur')
      expect(gustav?.bio).toContain('property management, M&A')
      expect(gustav?.education).toBe('B.Sc. Business Economics')
      expect(gustav?.category).toBe('board')
    })
  })

  describe('AC-008: Thomas Petrén - Board Member', () => {
    it('has correct profile data for Thomas Petrén', () => {
      const thomas = teamContent.board.find((m) => m.id === 'thomas-petren')

      expect(thomas).toBeDefined()
      expect(thomas?.name).toBe('Thomas Petrén')
      expect(thomas?.title).toBe('Board Member & Partner')
      expect(thomas?.bio).toContain('Seved Invest AB')
      expect(thomas?.bio).toContain('Humble Group')
      expect(thomas?.category).toBe('board')
    })
  })

  describe('AC-009: Mats Johansson - Partner & Board Advisor', () => {
    it('has correct profile data for Mats Johansson', () => {
      const mats = teamContent.board.find((m) => m.id === 'mats-johansson')

      expect(mats).toBeDefined()
      expect(mats?.name).toBe('Mats Johansson')
      expect(mats?.title).toBe('Partner & Board Advisor')
      expect(mats?.bio).toContain('Falköping')
      expect(mats?.bio).toContain('Former Partner at PwC')
      expect(mats?.category).toBe('board')
    })
  })

  describe('AC-015: No email addresses in content', () => {
    it('validates no email addresses are present in team content', () => {
      const allMembers = [...teamContent.managementTeam, ...teamContent.board]

      allMembers.forEach((member) => {
        // Check that member object doesn't have email field
        expect(member).not.toHaveProperty('email')

        // Check bio doesn't contain @autocapgroup.se or similar
        expect(member.bio).not.toMatch(/@\w+\.\w+/)
      })
    })
  })
})
