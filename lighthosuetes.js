import express from "express";
import lighthouse from "lighthouse";
import chromeLauncher from 'chrome-launcher';

// const app = express();
// const port = 3000;

// app.get('/api/lighthouse', async (req, res) => {
  try {
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless'],
    //   chromePath: '/usr/bin/google-chrome',
    });

    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['accessibility', 'performance', 'pwa', 'seo'],
      port: chrome.port,
    };

    const runnerResult = await lighthouse('https://webartist.xyz/', options);

    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    await chrome.kill();

    // res.json(runnerResult);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
