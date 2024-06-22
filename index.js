import fs from 'fs-extra'
const core = require('@actions/core');
const github = require('@actions/github');
const matter = require('gray-matter')

export async function run () {
   try {
      const hashnode_token = core.getInput("hashnode_token")
      const github_token = core.getInput("github_token")
      const octokit = github.getOctokit(github_token)

      // const payload = JSON.stringify(github.context.payload, null, 2)
      // console.log(payload)

    } catch (error) {
      core.setFailed(error.message);
    }
}
run()