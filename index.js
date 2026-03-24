import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";
const git = simpleGit();

const writeJson = (filePath, data) =>
  new Promise((resolve, reject) => {
    jsonfile.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });

const getCommitsForDay = (date) => {
  const isWeekend = date.day() === 0 || date.day() === 6;
  const activeChance = isWeekend ? 0.45 : 0.72;

  if (Math.random() > activeChance) {
    return 0;
  }

  // Weighted buckets to produce a mix of light, medium, and dark green cells.
  const bucket = Math.random();
  if (bucket < 0.55) {
    return random.int(1, 2);
  }
  if (bucket < 0.85) {
    return random.int(3, 5);
  }
  return random.int(7, 10);
};

const make2025Commits = async () => {
  const start = moment("2025-01-01");
  const end = moment("2025-12-31");
  let total = 0;

  for (const day = start.clone(); day.isSameOrBefore(end, "day"); day.add(1, "day")) {
    const commits = getCommitsForDay(day);

    for (let i = 0; i < commits; i += 1) {
      const date = day
        .clone()
        .hour(random.int(8, 22))
        .minute(random.int(0, 59))
        .second(random.int(0, 59))
        .format();

      const data = { date };
      console.log(date);

      await writeJson(path, data);
      await git.add([path]);
      await git
        .env("GIT_AUTHOR_DATE", date)
        .env("GIT_COMMITTER_DATE", date)
        .commit(`Contribution ${date}`, { "--date": date });
      total += 1;
    }
  }

  await git.push("origin", "main");
  console.log(`Done: pushed ${total} commits for 2025 pattern.`);
};

make2025Commits().catch((error) => {
  console.error("Failed to create 2025 commits:", error);
  process.exit(1);
});