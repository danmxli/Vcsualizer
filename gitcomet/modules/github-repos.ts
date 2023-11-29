'use server'
import fetch from 'node-fetch';
const query = `
  query GetUserRepositories($userName: String!) {
    user(login: $userName) {
      repositories(first: 100) {
        totalCount
        nodes {
          nameWithOwner
          description
          createdAt
          updatedAt
          isPrivate
          owner {
            login
          }
          primaryLanguage {
            name
          }
          stargazerCount
          forkCount
          licenseInfo {
            name
          }
          homepageUrl
          url
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export async function retrieveRepoData(): Promise<any> {
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