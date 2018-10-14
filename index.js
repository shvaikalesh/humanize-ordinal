const pluralRules = new Intl.PluralRules("en", {
  type: "ordinal",
})

const suffixes = {
  one: "st",
  two: "nd",
  few: "rd",
  other: "th",
}

export default number => {
  let rule = pluralRules.select(number)
  let suffix = suffixes[rule]

  return `${number}${suffix}`
}
