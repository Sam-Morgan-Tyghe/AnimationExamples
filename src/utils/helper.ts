export const getWelcomeMessageByTime = (): string => {
  const today = new Date()
  const curHr = today.getHours()
  if (curHr < 12) {
    return 'good morning'
  } else if (curHr < 18) {
    return 'good afternoon'
  } else {
    return 'good evening'
  }
}

export const goBack = (navigate: any) => {
  if (window.history.state && window.history.state.idx > 0) {
    navigate(-1)
  } else {
    navigate('/', { replace: true })
  }
}

export const formattedDates = (dates: any[]): string[] =>
  dates?.map(dateString => {
    const date = new Date(dateString)
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
    return formattedDate ?? ['']
  })

export const formatDate = (date: string) => {
  const newDate = new Date(date)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${monthNames[newDate.getMonth()]} ${newDate.getDay()}`
}

export const formatFormDate = (date: string | Date) => {
  const newDate = new Date(date)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${monthNames[newDate.getMonth()]} ${
    newDate.getDay() + 1
  }, ${newDate.getFullYear()}`
}
