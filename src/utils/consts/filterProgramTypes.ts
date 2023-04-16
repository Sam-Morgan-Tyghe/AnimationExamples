export const filterTypes = [
  'All',
  'Programs',
  'Workouts',
  'Challenges',
  'recipe',
  'how-to',
  'article',
]
export const discoveryfilterTypes = [
  'all',
  'program',
  'workout',
  'challenge',
  'how-to',
  'recipe',
  'article',
]

export const settingsFilterTypes = [
  'Login and Security',
  'Privacy',
  'Notifications',
  'Workout History',
  'More',
]

export const ProgramFilterTypes = [
  'workout',
  'how-to',
  'challenge',
  'program',
  'recipe',
  'article',
]

export const filterTypesTags = (key: string) => {
  return (
    {
      all: 'all',
      program: 'workout',
      workout: 'workout',
      challenge: 'workout',
      'how-to': 'how-to',
      recipe: 'recipe',
      article: 'article',
    }[key] ?? 'workout'
  )
}
