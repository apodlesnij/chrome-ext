import React, { useState, useEffect } from 'react';

import { Message } from "src/@types/Message"
import { Queue } from "src/constants/Queue"

import style from 'src/Popup/App/App.module.css';

async function getChromeTab(): Promise<chrome.tabs.Tab[]> {
  try {
    const tabs = await chrome.tabs?.query({ active: true, currentWindow: true });
    return tabs;
  } catch (e) {
    console.error(e);
    return [];
  }
}

function isJiraTab(tab: chrome.tabs.Tab | null): boolean {
  if (!tab || !tab.url) {
    return false;
  }

  return /atlassian\.net\/jira/.test(tab.url);
}

function copyFeatureNameBtn (tab) {
  chrome.tabs.sendMessage(tab.id, { queue: Queue.CONTENT, name: 'JiraTab' })
}

export function App() {
  const [currentTab, setCurrentTab] = useState<chrome.tabs.Tab | null>(null);
  const [disableFeatureBtn, setDisableFeatureBtn] = useState<boolean>(true);
  const [gitBranchName, setGitBranchName] = useState<string | null>(null);

  useEffect(() => {
    const fetchTab = async () => {
      const tabs = await getChromeTab();
      if (tabs?.length > 0) {
        setCurrentTab(tabs[0]); // Assuming the first tab is the one you want
      }
    };

    fetchTab();
  }, []);

  console.log(currentTab)

  useEffect(() => {
    setDisableFeatureBtn(!isJiraTab(currentTab));
  }, [currentTab]);

  // Listen Queue messages
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message: Message) => {
      if (message.queue !== Queue.POPUP) {
        return;
      }

      // код реализации копирования gitBranchName
      console.log("POPUP gitBranchName", message.data.gitBranchName)
      setGitBranchName(message.data.gitBranchName)
    });
  }, [gitBranchName]);

  if (gitBranchName) {
    navigator.clipboard.writeText(gitBranchName)
      .then(() => {
        alert("Copied!");
      })
      .catch(err => {
        alert("Error: " + err);
      });
  }

  return (
    <div className={style.card}>
      <header className={style.header}>Hello world</header>
      <h1>Is JIRA: {disableFeatureBtn ? "NO" : "YES"}</h1>

      <button type="button" onClick={(e) => copyFeatureNameBtn(currentTab)} disabled={disableFeatureBtn}>
        Copy feature name
      </button>
    </div>
  );
}
