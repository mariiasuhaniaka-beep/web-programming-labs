// 4.1 delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// 4.2 simulateFetch
function simulateFetch(url) {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.floor(Math.random() * 300) + 200; // 200–500 мс

    setTimeout(() => {
      if (!url.startsWith("https")) {
        reject(new Error(`Invalid URL: ${url}`));
        return;
      }

      const success = Math.random() < 0.7; // 70%

      if (success) {
        resolve({
          url,
          status: 200,
          data: "OK",
        });
      } else {
        reject(new Error("Server error: 500"));
      }
    }, randomDelay);
  });
}
// 4.3 fetchWithRetry
async function fetchWithRetry(url, attempts) {
  let lastError;

  for (let i = 1; i <= attempts; i++) {
    console.log(`Спроба №${i}`);

    try {
      return await simulateFetch(url);
    } catch (error) {
      lastError = error;

      if (i < attempts) {
        await delay(500);
      }
    }
  }

  throw lastError;
}

// 4.4 fetchMultiple
async function fetchMultiple(urls) {
  const results = await Promise.allSettled(
    urls.map((url) => simulateFetch(url))
  );

  const successful = results
    .filter((r) => r.status === "fulfilled")
    .map((r) => r.value);

  const failed = results
    .filter((r) => r.status === "rejected")
    .map((r) => r.reason.message);

  return { successful, failed };
}

async function main() {
  console.log("=== Завдання 4: async/await ===");

  console.time("delay");
  await delay(1000);
  console.timeEnd("delay");

  try {
    const result = await simulateFetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("Успіх:", result);
  } catch (error) {
    console.error("Помилка:", error.message);
  }

    try {
    const result = await fetchWithRetry(
      "https://jsonplaceholder.typicode.com/posts",
      5
    );
    console.log("fetchWithRetry результат:", result);
  } catch (error) {
    console.error("Всі спроби невдалі:", error.message);
  }

  const results = await fetchMultiple([
    "https://jsonplaceholder.typicode.com/posts",
    "http://invalid-url",
    "https://jsonplaceholder.typicode.com/users",
  ]);

  console.log("Результати:", results);
}

main();
