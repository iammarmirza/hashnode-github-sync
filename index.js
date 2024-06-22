import fs from 'fs-extra'
const core = require('@actions/core');
const github = require('@actions/github');
const matter = require('gray-matter')

export async function run () {
   try {
      const github_token = core.getInput("github_token")
      const hashnode_token = core.getInput("hashnode_token")
      core.setOutput("hashnode_token", hashnode_token)

      const added_files = core.getInput("added_files")
      const modified_files = core.getInput("modified_files")
      const deleted_files = core.getInput("deleted_files")

      const added_files_arr = added_files.split(' ')
      console.log(added_files)

    } catch (error) {
      core.setFailed(error.message);
    }
}
run()