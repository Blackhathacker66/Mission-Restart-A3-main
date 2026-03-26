const apps = [
  {
    id: 1,
    title: "Forest: Focus For Productivity",
    companyName: "forestapp.cc",
    image: "https://img.icons8.com/fluency/200/forest.png",
    description: `Forest is a unique productivity app that helps you stay focused and beat phone addiction. When you want to focus on work, you plant a seed in the app. The seed grows into a beautiful tree as long as you don't leave the app. If you can't help but use your phone, your tree will die.

This simple gamified mechanism has helped millions of people reclaim their focus time. The app integrates with real-world tree-planting partnerships, so every focus session you complete contributes to planting actual trees around the world. You earn coins as you focus, which can be spent to plant real trees.

Forest also offers insightful statistics that let you visualize your productivity over time. You can see how many hours you've focused, tag your sessions with custom categories, and review weekly and monthly trends. It's more than a timer — it's a complete focus ecosystem that rewards discipline and mindfulness.`,
    size: 258,
    reviews: 54000,
    ratingAvg: 4.9,
    downloads: 9000000,
    ratings: [
      { name: "1 star", count: 320 },
      { name: "2 star", count: 680 },
      { name: "3 star", count: 2100 },
      { name: "4 star", count: 5400 },
      { name: "5 star", count: 12000 },
    ],
  },
  {
    id: 2,
    title: "SmPlan: ToDo List With Reminder",
    companyName: "productive.io",
    image: "https://img.icons8.com/fluency/200/alarm.png",
    description: `SmPlan is a beautifully designed to-do list and reminder app that transforms the way you manage daily tasks. Whether you're juggling work projects, personal goals, or household chores, SmPlan keeps everything organized in one place.

The app features smart reminders with natural language input, recurring tasks, priority flags, and seamless calendar integration. You can create projects and assign tasks, making it ideal for both individual use and team collaboration. The clean interface reduces cognitive load so you can focus entirely on getting things done.

Built-in analytics show not only how many tasks you complete but also which hours you're most productive. This data helps you schedule demanding work during your peak performance periods. SmPlan also syncs across all devices and supports offline mode, ensuring you never miss a task regardless of your connectivity.`,
    size: 291,
    reviews: 54000,
    ratingAvg: 4.8,
    downloads: 8000000,
    ratings: [
      { name: "1 star", count: 410 },
      { name: "2 star", count: 830 },
      { name: "3 star", count: 2600 },
      { name: "4 star", count: 6200 },
      { name: "5 star", count: 11800 },
    ],
  },
  {
    id: 3,
    title: "FLIP - Focus Timer For Study",
    companyName: "flip-timer.com",
    image: "https://img.icons8.com/fluency/200/flip-phone.png",
    description: `FLIP takes a bold approach to focus: place your phone face-down, and the timer starts. Lift it up and the timer pauses — giving you an instant physical cue to stay disciplined. This reverse psychology method has proven highly effective for students and professionals alike.

The app features beautiful study session reports, group study modes where friends can join virtual focus rooms, and multiple timer styles including Pomodoro, custom intervals, and free-form sessions. You can set daily focus goals and track streaks, adding a motivational layer to your study habits.

FLIP's analytics dashboard provides a deep dive into your study patterns. You'll see total focus time by day, week, and month; your longest focus streaks; and which subjects you're spending the most time on. The social features let you compete with friends in weekly challenges, making studying a shared and more enjoyable experience.`,
    size: 184,
    reviews: 32000,
    ratingAvg: 4.7,
    downloads: 8500000,
    ratings: [
      { name: "1 star", count: 280 },
      { name: "2 star", count: 560 },
      { name: "3 star", count: 1800 },
      { name: "4 star", count: 4900 },
      { name: "5 star", count: 10200 },
    ],
  },
  {
    id: 4,
    title: "Pomocat - Cute Pomodoro Timer",
    companyName: "pomocat.app",
    image: "https://img.icons8.com/fluency/200/cat.png",
    description: `Pomocat brings an adorable twist to the classic Pomodoro technique. Your progress is represented by a cute cat companion who reacts to your focus sessions — celebrating when you complete a Pomodoro and pouting when you break focus too early. This emotional engagement makes it easier to stick to your work routines.

The app supports customizable work and break intervals, background ambient sounds (rain, café, nature), and task lists you can associate with each Pomodoro session. At the end of each work cycle, Pomocat rewards you with a fun cat animation and tracks how many "fish" (productivity points) you've earned.

Beyond the cute aesthetics, Pomocat is a serious productivity tool. It integrates with popular task managers, exports session logs, and provides weekly productivity reports. The built-in white noise generator and focus music help create the ideal environment for deep work, whether you're at home, in a café, or commuting.`,
    size: 142,
    reviews: 28000,
    ratingAvg: 4.8,
    downloads: 7500000,
    ratings: [
      { name: "1 star", count: 210 },
      { name: "2 star", count: 490 },
      { name: "3 star", count: 1600 },
      { name: "4 star", count: 4700 },
      { name: "5 star", count: 11200 },
    ],
  },
  {
    id: 5,
    title: "Time Planner: Schedule & Tasks",
    companyName: "timeplanner.io",
    image: "https://img.icons8.com/fluency/200/planner.png",
    description: `Time Planner is a comprehensive daily schedule and task management app that bridges the gap between a traditional planner and a modern digital calendar. It lets you visually block out your entire day in 15-minute increments, drag and resize time blocks, and color-code activities for clarity.

The app includes a built-in habit tracker, goals module, and time budget feature where you allocate target hours to each life category (work, health, family, learning). At the end of each day, you get a comparison of planned vs actual time usage, helping you improve your time allocation gradually.

Time Planner syncs with Google Calendar and Apple Calendar, ensuring your schedule is always up to date across all platforms. The recurring events feature handles complex patterns like "every second Tuesday" or "last day of the month". Push notifications with smart snooze options ensure you never miss an important commitment.`,
    size: 312,
    reviews: 41000,
    ratingAvg: 4.6,
    downloads: 9200000,
    ratings: [
      { name: "1 star", count: 380 },
      { name: "2 star", count: 720 },
      { name: "3 star", count: 2400 },
      { name: "4 star", count: 5900 },
      { name: "5 star", count: 10800 },
    ],
  },
  {
    id: 6,
    title: "Morning Habits - Daily Routine",
    companyName: "habitstack.co",
    image: "https://img.icons8.com/fluency/200/sunrise.png",
    description: `Morning Habits is designed specifically to help you build a powerful morning routine that sets the tone for your entire day. Research consistently shows that how you spend the first hour of your day significantly impacts your productivity, mood, and energy levels throughout. This app makes that time transformational.

You can create a personalized morning stack with activities like meditation, journaling, exercise, reading, gratitude practice, and hydration tracking. Each habit has flexible duration settings and gentle alarm sequences that wake you gradually. The app also suggests evidence-based habits based on your goals.

The streak system and progress visualization keep you accountable over time. You can view your completion rates, identify which habits you're struggling with, and adjust your routine accordingly. Community challenges let you join global morning challenges, and the social feed lets you share milestones with friends who are also working on their morning routines.`,
    size: 198,
    reviews: 36000,
    ratingAvg: 4.7,
    downloads: 8800000,
    ratings: [
      { name: "1 star", count: 290 },
      { name: "2 star", count: 610 },
      { name: "3 star", count: 2200 },
      { name: "4 star", count: 5600 },
      { name: "5 star", count: 11400 },
    ],
  },
  {
    id: 7,
    title: "Focus Plant: Pomodoro Forest",
    companyName: "focusplant.app",
    image: "https://img.icons8.com/fluency/200/potted-plant.png",
    description: `Focus Plant combines the proven Pomodoro technique with a virtual garden that grows as you stay productive. Every completed focus session plants a new virtual seed that blooms into a unique plant or flower. Over time, your garden becomes a beautiful visual representation of your hard work and discipline.

The app includes customizable Pomodoro intervals, task management with tags and priorities, detailed productivity analytics, and a relaxing ambient sound library. You can unlock rare plant species by hitting productivity milestones, adding a collectible element that keeps you motivated long-term.

Focus Plant also features a unique "ecosystem" mode where your virtual garden is shared with your team or study group. As each member stays focused, the shared garden grows together, creating a collaborative and visually rewarding productivity experience. The team analytics dashboard shows group focus time and individual contributions.`,
    size: 226,
    reviews: 29000,
    ratingAvg: 4.5,
    downloads: 7900000,
    ratings: [
      { name: "1 star", count: 340 },
      { name: "2 star", count: 700 },
      { name: "3 star", count: 2300 },
      { name: "4 star", count: 5200 },
      { name: "5 star", count: 9800 },
    ],
  },
  {
    id: 8,
    title: "Alarmy - Alarm Clock & Sleep",
    companyName: "alarmy.com",
    image: "https://img.icons8.com/fluency/200/alarm-clock.png",
    description: `Alarmy is the world's most downloaded alarm app, designed specifically for heavy sleepers who have trouble waking up on time. Unlike traditional alarms that you can snooze endlessly, Alarmy forces you to complete a mission before the alarm stops — ensuring you're truly awake before you go back to sleep.

Available missions include shaking your phone a set number of times, scanning a pre-registered barcode (perfect for placing in the kitchen or bathroom), solving math problems, or going outside for a walk. These physical and mental tasks engage your brain and body, making it virtually impossible to fall back asleep.

Beyond the alarm, Alarmy offers comprehensive sleep tracking using your phone's sensors to monitor sleep cycles and detect the optimal wake time within a set window. The sleep score report gives you nightly insights into your sleep quality, and the smart alarm learns your patterns over time to gradually optimize your wake time for maximum alertness.`,
    size: 167,
    reviews: 67000,
    ratingAvg: 4.6,
    downloads: 12000000,
    ratings: [
      { name: "1 star", count: 520 },
      { name: "2 star", count: 980 },
      { name: "3 star", count: 3200 },
      { name: "4 star", count: 7800 },
      { name: "5 star", count: 14200 },
    ],
  },
  {
    id: 9,
    title: "Notion - Notes & Collaboration",
    companyName: "notion.so",
    image: "https://img.icons8.com/fluency/200/note.png",
    description: `Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases into a single powerful tool. Whether you're an individual looking to organize your life or a team managing complex projects, Notion adapts to your workflow with its flexible block-based editor and powerful relational databases.

Create beautifully formatted documents with rich media embeds, build Kanban boards and calendars for project management, and design custom databases with filtered views, formulas, and rollups. Notion templates from the community cover virtually every use case from content planning to software development workflows.

Real-time collaboration, granular permission controls, and deep integrations with tools like Slack, GitHub, and Google Drive make Notion indispensable for modern teams. The AI assistant built into Notion can summarize documents, generate content, extract action items, and answer questions about your workspace content.`,
    size: 445,
    reviews: 89000,
    ratingAvg: 4.8,
    downloads: 15000000,
    ratings: [
      { name: "1 star", count: 680 },
      { name: "2 star", count: 1200 },
      { name: "3 star", count: 3800 },
      { name: "4 star", count: 9200 },
      { name: "5 star", count: 18600 },
    ],
  },
  {
    id: 10,
    title: "Habitica - Gamify Your Tasks",
    companyName: "habitica.com",
    image: "https://img.icons8.com/fluency/200/controller.png",
    description: `Habitica transforms your daily tasks and habits into a retro role-playing game. Complete real-world tasks to level up your character, earn gear, battle monsters with your friends, and join guilds of like-minded goal-setters. This gamified approach makes boring routines surprisingly compelling.

You create a character and list your habits, daily tasks, and to-do items. Checking off tasks gives your character experience points and gold, while neglected habits cause your character to take damage. The stakes are real within the game world, creating genuine motivation to stay on top of your commitments.

Habitica's social features are exceptional. Party with friends to tackle world bosses together, join guilds based on your interests (language learning, fitness, coding), and participate in limited-time seasonal events. The app is completely free and open-source, with optional cosmetic purchases to support its development.`,
    size: 198,
    reviews: 72000,
    ratingAvg: 4.7,
    downloads: 11000000,
    ratings: [
      { name: "1 star", count: 560 },
      { name: "2 star", count: 1100 },
      { name: "3 star", count: 3400 },
      { name: "4 star", count: 8600 },
      { name: "5 star", count: 16200 },
    ],
  },
  {
    id: 11,
    title: "Calm - Sleep & Meditation",
    companyName: "calm.com",
    image: "https://img.icons8.com/fluency/200/meditation.png",
    description: `Calm is the world's leading app for sleep, meditation, and relaxation. With guided meditation sessions ranging from 3 to 25 minutes, sleep stories narrated by celebrities, breathing exercises, and masterclasses from world-renowned mindfulness teachers, Calm is a complete mental wellness toolkit.

The app features daily meditation programs for beginners and advanced practitioners, body scan exercises for stress relief, and specialized content for anxiety, focus, relationships, and gratitude. The Sleep Stories library includes hundreds of soothing tales designed to quiet your mind and guide you into restful sleep.

Calm's nature soundscapes and music tracks create peaceful environments for work or relaxation. The breathing bubble exercise provides a simple but powerful tool for acute stress management. With offline access, Apple Health integration, and family sharing support, Calm is the most versatile and comprehensive mindfulness app available.`,
    size: 389,
    reviews: 120000,
    ratingAvg: 4.9,
    downloads: 20000000,
    ratings: [
      { name: "1 star", count: 890 },
      { name: "2 star", count: 1600 },
      { name: "3 star", count: 4800 },
      { name: "4 star", count: 12000 },
      { name: "5 star", count: 26000 },
    ],
  },
  {
    id: 12,
    title: "Todoist: To-Do List & Planner",
    companyName: "todoist.com",
    image: "https://img.icons8.com/fluency/200/todo-list.png",
    description: `Todoist is the gold standard of task management apps, trusted by over 30 million people worldwide. Its clean interface, powerful natural language input, and cross-platform reliability make it the go-to choice for professionals who take their productivity seriously.

The app supports nested projects and sub-tasks, labels and filters for flexible organization, priority levels with color coding, and collaboration features for shared projects. The natural language processing is remarkably intuitive — type "report every Friday at 3pm" and Todoist automatically creates a recurring task with the correct schedule.

Todoist's Karma system gamifies your productivity by tracking your completion rates and awarding points for consistent task management. The productivity visualization shows your performance trends and helps you set realistic daily and weekly goals. Integrations with 60+ apps including Slack, Google Calendar, Alexa, and GitHub make Todoist the hub of your productivity ecosystem.`,
    size: 267,
    reviews: 95000,
    ratingAvg: 4.8,
    downloads: 18000000,
    ratings: [
      { name: "1 star", count: 720 },
      { name: "2 star", count: 1400 },
      { name: "3 star", count: 4200 },
      { name: "4 star", count: 10800 },
      { name: "5 star", count: 22000 },
    ],
  },
  {
    id: 13,
    title: "Streaks - Build Better Habits",
    companyName: "streaksapp.com",
    image: "https://img.icons8.com/fluency/200/fire-element.png",
    description: `Streaks is the award-winning habit tracking app that uses the power of consecutive day streaks to keep you committed to your goals. The concept is simple: complete your chosen habits every day, and your streak grows. Break the chain, and you start over — creating powerful psychological motivation to maintain consistency.

You can track up to 12 habits simultaneously, each with customizable icons, colors, and schedules. Habits can be set to negative (things to avoid) or positive (things to accomplish), with completion requirements ranging from simple checkboxes to quantity-based goals like "drink 8 glasses of water" or "walk 10,000 steps".

Deep integration with Apple Health means many habits can be automatically tracked without manual input — your exercise habits update from workout data, your sleep habits from sleep tracking, and your hydration from water intake logging. Streaks widgets give you at-a-glance habit completion status throughout your day.`,
    size: 134,
    reviews: 48000,
    ratingAvg: 4.8,
    downloads: 10000000,
    ratings: [
      { name: "1 star", count: 380 },
      { name: "2 star", count: 760 },
      { name: "3 star", count: 2400 },
      { name: "4 star", count: 6200 },
      { name: "5 star", count: 13800 },
    ],
  },
  {
    id: 14,
    title: "Brain.fm - Focus Music",
    companyName: "brain.fm",
    image: "https://img.icons8.com/fluency/200/headphones.png",
    description: `Brain.fm is scientifically designed audio that helps your brain achieve and maintain focused, relaxed, or sleep states faster than regular music. Unlike typical background music or binaural beats, Brain.fm uses patented functional music technology developed with neuroscientists to produce measurable effects on brain activity.

The app offers three main modes: Focus (for deep work and study), Relax (for stress relief and breaks), and Sleep (for falling asleep faster and staying asleep). Each session intelligently adapts based on duration and intensity preferences, and the audio evolves subtly over time to prevent your brain from habituating to the sounds.

Users report significantly improved concentration within minutes of listening, reduced mental fatigue during long work sessions, and faster sleep onset compared to silence or conventional music. Brain.fm is particularly popular among knowledge workers, students, and anyone who does cognitively demanding tasks requiring extended concentration.`,
    size: 156,
    reviews: 38000,
    ratingAvg: 4.6,
    downloads: 6500000,
    ratings: [
      { name: "1 star", count: 290 },
      { name: "2 star", count: 580 },
      { name: "3 star", count: 1900 },
      { name: "4 star", count: 4800 },
      { name: "5 star", count: 9200 },
    ],
  },
  {
    id: 15,
    title: "Any.do - To-do List & Calendar",
    companyName: "any.do",
    image: "https://img.icons8.com/fluency/200/checkmark.png",
    description: `Any.do is an elegant and intuitive task manager that seamlessly combines to-do lists, a calendar, and a daily planner in one beautifully designed app. Its signature "Plan My Day" feature walks you through your tasks and calendar events each morning, helping you prioritize what matters most.

The app features voice input for hands-free task creation, smart recurring tasks, and location-based reminders that notify you when you arrive at specific places. The Moment feature provides a calm, daily planning session that helps you start each day with clarity and intention.

Any.do's collaboration features make it equally powerful for families and teams. Share shopping lists, assign household tasks, or coordinate work projects with real-time sync. The WhatsApp integration is particularly innovative — you can create tasks directly from WhatsApp messages, making it effortless to capture action items from conversations.`,
    size: 215,
    reviews: 76000,
    ratingAvg: 4.7,
    downloads: 14000000,
    ratings: [
      { name: "1 star", count: 580 },
      { name: "2 star", count: 1150 },
      { name: "3 star", count: 3600 },
      { name: "4 star", count: 9200 },
      { name: "5 star", count: 18400 },
    ],
  },
  {
    id: 16,
    title: "1Blocker - Ad Blocker & Privacy",
    companyName: "1blocker.com",
    image: "https://img.icons8.com/fluency/200/shield.png",
    description: `1Blocker is the most powerful and comprehensive ad blocking and privacy protection app available. It blocks ads, trackers, scripts, and other web clutter across Safari and all apps on your device, resulting in faster page loads, reduced data usage, and significantly improved browsing privacy.

Unlike other blockers that use a single blocklist, 1Blocker provides 12 distinct blockers targeting different categories: ads, social widgets, adult content, cookie notices, tracking scripts, and more. You have granular control over what gets blocked and can easily whitelist websites you want to support.

The advanced privacy features include real-time tracker blocking statistics, a detailed report of what was blocked on each website, and the ability to enable special rules for cookie consent dialogs. The native Safari integration means all blocking happens locally on your device without any data ever leaving, providing both privacy and performance benefits.`,
    size: 89,
    reviews: 31000,
    ratingAvg: 4.5,
    downloads: 5800000,
    ratings: [
      { name: "1 star", count: 260 },
      { name: "2 star", count: 520 },
      { name: "3 star", count: 1700 },
      { name: "4 star", count: 4200 },
      { name: "5 star", count: 8600 },
    ],
  },
];

export default apps;
