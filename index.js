const core = require('@actions/core');
const matter = require('gray-matter');
const github = require('@actions/github');

export async function run() {
   console.log("test")
   try {
    const host = core.getInput("host");
    const file = core.getInput("file");
    const hashnode_key = core.getInput("hashnode_key")

    console.log({
      host,
      file,
      hashnode_key
    })
   //  core.setSecret(hashnode_key)
   //  const content = await fs.readFile(file, "utf8");
   //  const parsedArticle = matter(content, { language: "yaml" });

    core.setOutput("result_json", 'hsskaska')
    core.setOutput("host__name", host)
    core.setOutput("secret__key", hashnode_key)
    core.setOutput("file__name", file)
    
   } catch (error) {
      core.setFailed(error)
   }
}

run()
