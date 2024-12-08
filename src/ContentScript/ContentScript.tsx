import { useEffect } from "react";
import { Queue } from "src/constants/Queue"
import { Message } from "src/@types/Message"

export function ContentScript() {
  useEffect(() => {
    console.log("INJECTED");
    chrome.runtime.onMessage.addListener((message: Message) => {
      console.log("ContentScript listener message: ", message);
      if (message.queue !== Queue.CONTENT) {
        return;
      }

      // код реализации получения feature name
      const taskName =
        document.querySelector('h1[data-testid="issue.views.issue-base.foundation.summary.heading"]').innerText
      console.log(taskName)
      const gitBranchName = 
        taskName
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with `-`
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing `-`
      console.log(gitBranchName);

      chrome.runtime.sendMessage({
        queue: Queue.POPUP,
        name: 'jiraGitBranchName',
        data: { gitBranchName: gitBranchName },
      });
    });
  }, []);
  return null;
}
