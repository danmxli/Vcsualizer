'use server'
const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`
export async function retrieveContributionData(): Promise<any> {
  const variables = `
  {
    "userName": "${process.env.USERNAME}"
  }
`
  const body = {
    query,
    variables
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify(body)
  })
  return res.json()
}