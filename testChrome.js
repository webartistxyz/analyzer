import chromeLauncher from 'chrome-launcher';

async function testChromeLauncher() {
  try {
    const chrome = await chromeLauncher.launch({
      chromeFlags: ['--headless'],
      chromePath: '/usr/bin/google-chrome', // Set the correct path to Google Chrome
    });

    console.log('Google Chrome launched successfully!');
    console.log('Chrome process ID:', chrome.pid);

    await chrome.kill();

    console.log('Google Chrome process terminated successfully!');
  } catch (error) {
    console.error('Failed to launch Google Chrome:', error);
  }
}

testChromeLauncher();
