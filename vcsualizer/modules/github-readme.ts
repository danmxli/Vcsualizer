'use server'
import fetch from 'node-fetch';
const query = `
query RepoFiles($userName: String!, $repoName: String!) {
  repository(owner: $userName, name: $repoName) {
    readme: object(expression: "HEAD:README.md") {
      ... on Blob {
        text
        byteSize
      }
    }
  }
}
`

export async function retrieveReadme(repoName: String): Promise<any> {
    const variables = `
  {
    "userName": "${process.env.USERNAME}",
    "repoName": "${repoName}"
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

